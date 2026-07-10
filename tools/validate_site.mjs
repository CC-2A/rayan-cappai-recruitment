#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const errors = [];

const translationMatch = app.match(
  /const translations = (\{[\s\S]*?\n\});\n\nconst getValue/,
);
if (!translationMatch) {
  errors.push("Unable to parse the translation dictionary.");
}

let translations = {};
if (translationMatch) {
  const context = { result: null };
  vm.runInNewContext(`result = ${translationMatch[1]}`, context);
  translations = context.result;
}

const getValue = (object, key) =>
  key.split(".").reduce((value, part) => value?.[part], object);
const translationKeys = new Set();
for (const attribute of ["data-i18n", "data-i18n-aria", "data-i18n-alt"]) {
  const regex = new RegExp(`${attribute}="([^"]+)"`, "g");
  for (const match of html.matchAll(regex)) translationKeys.add(match[1]);
}

for (const language of ["en", "fr", "es"]) {
  if (!translations[language]) {
    errors.push(`Missing ${language} translation dictionary.`);
    continue;
  }
  for (const key of translationKeys) {
    if (typeof getValue(translations[language], key) !== "string") {
      errors.push(`Missing ${language} translation: ${key}`);
    }
  }
}

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
for (const id of new Set(ids)) {
  if (ids.filter((candidate) => candidate === id).length > 1)
    errors.push(`Duplicate id: ${id}`);
}

const localReferences = new Set();
for (const match of html.matchAll(/(?:href|src)="(\.\/[^"#]+)"/g)) {
  localReferences.add(match[1].replace(/^\.\//, "").split(/[?#]/)[0]);
}
for (const reference of localReferences) {
  if (!fs.existsSync(path.join(root, reference)))
    errors.push(`Missing local asset: ${reference}`);
}

for (const cv of [
  "Rayan_Cappai_Sport_CV_EN.pdf",
  "Rayan_Cappai_CV_Sportif_FR.pdf",
  "Rayan_Cappai_CV_Deportivo_ES.pdf",
]) {
  const file = path.join(root, cv);
  if (!fs.existsSync(file) || fs.statSync(file).size < 10_000)
    errors.push(`Invalid CV file: ${cv}`);
}

if ((html.match(/<meta name="description"/g) || []).length !== 1) {
  errors.push("The page must contain exactly one meta description.");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Site validation passed: ${translationKeys.size} translated keys, ${localReferences.size} local assets, ${ids.length} unique ids.`,
);
