#!/usr/bin/env python3
"""Generate the three one-page Rayan Cappai Sport CV PDFs."""

from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]

NAVY = colors.HexColor("#061225")
NAVY_2 = colors.HexColor("#0B1B33")
GOLD = colors.HexColor("#D4AF37")
GOLD_LIGHT = colors.HexColor("#F4DC83")
BLUE = colors.HexColor("#0EA5E9")
INK = colors.HexColor("#0F172A")
MUTED = colors.HexColor("#526177")
LIGHT = colors.HexColor("#F3F6FA")
LINE = colors.HexColor("#D8E0EA")
WHITE = colors.white

FONT_REGULAR = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

pdfmetrics.registerFont(TTFont("CVRegular", FONT_REGULAR))
pdfmetrics.registerFont(TTFont("CVBold", FONT_BOLD))


DATA = {
    "en": {
        "filename": "Rayan_Cappai_Sport_CV_EN.pdf",
        "subtitle": "2006 French Central Midfielder | 6 / 8 / 10 | Right-footed | 1.82 m / 77 kg",
        "intro": (
            "Club recruitment and staff evaluation profile. French U17 National / U19 National background, "
            "U.S. experience and current senior competition in Norway with Nybergsund IL Trysil."
        ),
        "strip": ["U17 / U19 National", "William Penn University", "Nybergsund IL Trysil", "Full Match #27"],
        "facts": [
            ("POSITION", "Central Midfielder"),
            ("ROLE", "6 / 8 / 10"),
            ("FOOT", "Right-footed"),
            ("HEIGHT / WEIGHT", "1.82 m / 77 kg"),
            ("FRENCH YOUTH LEVEL", "U17 National / U19 National"),
            ("U.S. EXPERIENCE", "William Penn University + First State FC"),
            ("CURRENT CLUB", "Nybergsund IL Trysil - Norway"),
            ("CONTRACT / CONTACT", "Under contract until 31 October 2026 - Open to discussions for next project"),
        ],
        "sections": [
            (
                "PLAYER PROFILE",
                [
                    "Central midfielder able to organize deeper, connect phases and receive between lines.",
                    "Role flexibility across positions 6, 8 and 10.",
                    "Full-match footage available to assess scanning, positioning, tempo, defensive work and decisions under pressure.",
                ],
            ),
            (
                "FOOTBALL BACKGROUND",
                [
                    "France: U17 National / U19 National experience.",
                    "United States: William Penn University and First State FC, The League for Clubs.",
                    "Norway 2026: Nybergsund IL Trysil, 4. divisjon men - NFF Indre Ostland.",
                ],
            ),
            (
                "RECENT EVIDENCE",
                [
                    "Current club: Nybergsund IL Trysil. Under contract until 31 October 2026 and open to discussions now for the next project.",
                    "The League for Clubs - Northeast Conference Team of the Week, June 26 - July 2, 2026.",
                    "Highlights 2026 and full-match reference from June 20, 2026 - Rayan wears number 27.",
                ],
            ),
        ],
        "links_title": "VIDEO AND PROFILE LINKS",
        "links": [
            ("Recruitment profile", "https://cc-2a.github.io/rayan-cappai-recruitment/"),
            ("Official NFF player profile", "https://www.fotball.no/fotballdata/person/profil/?fiksId=4171102"),
            ("Highlights 2026", "https://www.youtube.com/watch?v=6p439LZkKp4"),
            ("Full match #27", "https://www.youtube.com/watch?v=4_4mTHcd5zQ"),
        ],
        "contact_title": "DIRECT CONTACT",
        "email_label": "Email",
        "phone_label": "Phone",
        "whatsapp_label": "WhatsApp",
        "footer": "Nybergsund IL Trysil, Norway | Contract until 31 October 2026 | Open to discussions | Updated August 2026",
    },
    "fr": {
        "filename": "Rayan_Cappai_CV_Sportif_FR.pdf",
        "subtitle": "Milieu central français 2006 | 6 / 8 / 10 | Droitier | 1,82 m / 77 kg",
        "intro": (
            "Profil de recrutement et d'évaluation par le staff. Parcours U17 Nationaux / U19 Nationaux en France, "
            "expérience aux États-Unis et compétition senior actuelle en Norvège avec Nybergsund IL Trysil."
        ),
        "strip": ["U17 / U19 Nationaux", "William Penn University", "Nybergsund IL Trysil", "Match complet #27"],
        "facts": [
            ("POSTE", "Milieu central"),
            ("RÔLE", "6 / 8 / 10"),
            ("PIED", "Droitier"),
            ("TAILLE / POIDS", "1,82 m / 77 kg"),
            ("NIVEAU JEUNES FRANCE", "U17 Nationaux / U19 Nationaux"),
            ("EXPÉRIENCE US", "William Penn University + First State FC"),
            ("CLUB ACTUEL", "Nybergsund IL Trysil - Norvège"),
            ("CONTRAT / CONTACT", "Sous contrat jusqu'au 31 octobre 2026 - Contactable pour le prochain projet"),
        ],
        "sections": [
            (
                "PROFIL JOUEUR",
                [
                    "Milieu central capable d'organiser plus bas, de relier les phases et de recevoir entre les lignes.",
                    "Polyvalence de rôle sur les postes 6, 8 et 10.",
                    "Match complet disponible pour évaluer prise d'information, placement, tempo, travail défensif et décisions sous pression.",
                ],
            ),
            (
                "PARCOURS FOOTBALL",
                [
                    "France : expérience U17 Nationaux / U19 Nationaux.",
                    "États-Unis : William Penn University et First State FC, The League for Clubs.",
                    "Norvège 2026 : Nybergsund IL Trysil, 4. divisjon menn - NFF Indre Østland.",
                ],
            ),
            (
                "ÉLÉMENTS RÉCENTS",
                [
                    "Club actuel : Nybergsund IL Trysil. Sous contrat jusqu'au 31 octobre 2026 et contactable dès maintenant pour la suite.",
                    "Équipe type de la Northeast Conference de The League for Clubs, du 26 juin au 2 juillet 2026.",
                    "Highlights 2026 et match complet de référence du 20 juin 2026 - Rayan porte le numéro 27.",
                ],
            ),
        ],
        "links_title": "LIENS VIDÉO ET PROFIL",
        "links": [
            ("Profil de recrutement", "https://cc-2a.github.io/rayan-cappai-recruitment/?lang=fr"),
            ("Profil joueur officiel NFF", "https://www.fotball.no/fotballdata/person/profil/?fiksId=4171102"),
            ("Highlights 2026", "https://www.youtube.com/watch?v=6p439LZkKp4"),
            ("Match complet #27", "https://www.youtube.com/watch?v=4_4mTHcd5zQ"),
        ],
        "contact_title": "CONTACT DIRECT",
        "email_label": "E-mail",
        "phone_label": "Téléphone",
        "whatsapp_label": "WhatsApp",
        "footer": "Nybergsund IL Trysil, Norvège | Contrat jusqu'au 31 octobre 2026 | Contactable | Mis à jour en août 2026",
    },
    "es": {
        "filename": "Rayan_Cappai_CV_Deportivo_ES.pdf",
        "subtitle": "Mediocampista central francés 2006 | 6 / 8 / 10 | Diestro | 1,82 m / 77 kg",
        "intro": (
            "Perfil de reclutamiento y evaluación del staff. Trayectoria U17 Nacional / U19 Nacional en Francia, "
            "experiencia en Estados Unidos y competición sénior actual en Noruega con Nybergsund IL Trysil."
        ),
        "strip": ["U17 / U19 Nacional", "William Penn University", "Nybergsund IL Trysil", "Partido completo #27"],
        "facts": [
            ("POSICIÓN", "Mediocampista central"),
            ("ROL", "6 / 8 / 10"),
            ("PIE", "Diestro"),
            ("ALTURA / PESO", "1,82 m / 77 kg"),
            ("NIVEL JUVENIL FRANCIA", "U17 Nacional / U19 Nacional"),
            ("EXPERIENCIA EE. UU.", "William Penn University + First State FC"),
            ("CLUB ACTUAL", "Nybergsund IL Trysil - Noruega"),
            ("CONTRATO / CONTACTO", "Contrato hasta el 31 de octubre de 2026 - Contactable para el próximo proyecto"),
        ],
        "sections": [
            (
                "PERFIL DE JUGADOR",
                [
                    "Mediocampista central capaz de organizar desde atrás, conectar fases y recibir entre líneas.",
                    "Flexibilidad de rol en las posiciones 6, 8 y 10.",
                    "Partido completo disponible para evaluar lectura, posicionamiento, ritmo, trabajo defensivo y decisiones bajo presión.",
                ],
            ),
            (
                "TRAYECTORIA FUTBOLÍSTICA",
                [
                    "Francia: experiencia U17 Nacional / U19 Nacional.",
                    "Estados Unidos: William Penn University y First State FC, The League for Clubs.",
                    "Noruega 2026: Nybergsund IL Trysil, 4. divisjon menn - NFF Indre Østland.",
                ],
            ),
            (
                "EVIDENCIA RECIENTE",
                [
                    "Club actual: Nybergsund IL Trysil. Contrato hasta el 31 de octubre de 2026 y disponible desde ahora para conversar sobre el próximo proyecto.",
                    "Equipo de la semana de la Northeast Conference de The League for Clubs, 26 de junio - 2 de julio de 2026.",
                    "Highlights 2026 y partido completo de referencia del 20 de junio de 2026 - Rayan usa el número 27.",
                ],
            ),
        ],
        "links_title": "ENLACES DE VÍDEO Y PERFIL",
        "links": [
            ("Perfil de reclutamiento", "https://cc-2a.github.io/rayan-cappai-recruitment/?lang=es"),
            ("Perfil oficial del jugador NFF", "https://www.fotball.no/fotballdata/person/profil/?fiksId=4171102"),
            ("Highlights 2026", "https://www.youtube.com/watch?v=6p439LZkKp4"),
            ("Partido completo #27", "https://www.youtube.com/watch?v=4_4mTHcd5zQ"),
        ],
        "contact_title": "CONTACTO DIRECTO",
        "email_label": "Correo",
        "phone_label": "Teléfono",
        "whatsapp_label": "WhatsApp",
        "footer": "Nybergsund IL Trysil, Noruega | Contrato hasta el 31 de octubre de 2026 | Contactable | Actualizado en agosto de 2026",
    },
}


def build_styles() -> dict[str, ParagraphStyle]:
    styles = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "CVTitle", parent=styles["Normal"], fontName="CVBold", fontSize=27, leading=28,
            textColor=WHITE, spaceAfter=5,
        ),
        "subtitle": ParagraphStyle(
            "CVSubtitle", parent=styles["Normal"], fontName="CVBold", fontSize=10.8, leading=13,
            textColor=GOLD_LIGHT, spaceAfter=6,
        ),
        "intro": ParagraphStyle(
            "CVIntro", parent=styles["Normal"], fontName="CVRegular", fontSize=8.2, leading=10.5,
            textColor=colors.HexColor("#E4EBF4"),
        ),
        "strip": ParagraphStyle(
            "CVStrip", parent=styles["Normal"], fontName="CVBold", fontSize=7.4, leading=9,
            alignment=TA_CENTER, textColor=NAVY,
        ),
        "fact_label": ParagraphStyle(
            "CVFactLabel", parent=styles["Normal"], fontName="CVRegular", fontSize=7.2, leading=9,
            textColor=MUTED,
        ),
        "fact_value": ParagraphStyle(
            "CVFactValue", parent=styles["Normal"], fontName="CVBold", fontSize=7.7, leading=9.2,
            textColor=INK,
        ),
        "section": ParagraphStyle(
            "CVSection", parent=styles["Normal"], fontName="CVBold", fontSize=10.2, leading=12,
            textColor=INK,
        ),
        "bullet": ParagraphStyle(
            "CVBullet", parent=styles["Normal"], fontName="CVRegular", fontSize=7.65, leading=9.65,
            leftIndent=0, textColor=INK,
        ),
        "link": ParagraphStyle(
            "CVLink", parent=styles["Normal"], fontName="CVRegular", fontSize=7.2, leading=9.2,
            textColor=BLUE,
        ),
        "contact": ParagraphStyle(
            "CVContact", parent=styles["Normal"], fontName="CVBold", fontSize=7.5, leading=9.5,
            textColor=INK,
        ),
        "footer": ParagraphStyle(
            "CVFooter", parent=styles["Normal"], fontName="CVRegular", fontSize=6.8, leading=8,
            alignment=TA_CENTER, textColor=MUTED,
        ),
    }


def section_block(title: str, bullets: list[str], styles: dict[str, ParagraphStyle]):
    heading = Table([[Paragraph(title, styles["section"])]], colWidths=[100 * mm])
    heading.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.8, GOLD),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    items = [ListItem(Paragraph(text, styles["bullet"]), leftIndent=7) for text in bullets]
    bullet_list = ListFlowable(
        items,
        bulletType="bullet",
        start="circle",
        bulletFontName="CVBold",
        bulletFontSize=6,
        bulletColor=BLUE,
        leftIndent=12,
        bulletOffsetY=1,
        spaceBefore=3,
        spaceAfter=2,
    )
    return KeepTogether([heading, bullet_list])


def generate_pdf(language: str, data: dict) -> Path:
    styles = build_styles()
    output = ROOT / data["filename"]
    doc = SimpleDocTemplate(
        str(output),
        pagesize=A4,
        rightMargin=15 * mm,
        leftMargin=15 * mm,
        topMargin=12 * mm,
        bottomMargin=10 * mm,
        title="Rayan Cappai Sport CV",
        author="Rayan Cappai",
        subject="Football recruitment profile",
    )

    story = []
    header = Table(
        [[[
            Paragraph("RAYAN CAPPAI", styles["title"]),
            Paragraph(data["subtitle"], styles["subtitle"]),
            Paragraph(data["intro"], styles["intro"]),
        ]]],
        colWidths=[180 * mm],
    )
    header.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("BOX", (0, 0), (-1, -1), 0.6, NAVY_2),
        ("LEFTPADDING", (0, 0), (-1, -1), 11),
        ("RIGHTPADDING", (0, 0), (-1, -1), 11),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.append(header)
    story.append(Spacer(1, 4))

    strip = Table(
        [[Paragraph(item, styles["strip"]) for item in data["strip"]]],
        colWidths=[45 * mm] * 4,
    )
    strip.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), GOLD_LIGHT),
        ("INNERGRID", (0, 0), (-1, -1), 0.8, NAVY),
        ("BOX", (0, 0), (-1, -1), 0.3, GOLD),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(strip)
    story.append(Spacer(1, 5))

    facts = Table(
        [[Paragraph(label, styles["fact_label"]), Paragraph(value, styles["fact_value"])] for label, value in data["facts"]],
        colWidths=[44 * mm, 136 * mm],
    )
    facts.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
        ("BOX", (0, 0), (-1, -1), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 3.1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3.1),
    ]))
    story.append(facts)
    story.append(Spacer(1, 7))

    for title, bullets in data["sections"]:
        story.append(section_block(title, bullets, styles))
        story.append(Spacer(1, 3))

    links_heading = Table([[Paragraph(data["links_title"], styles["section"])]], colWidths=[180 * mm])
    links_heading.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.8, GOLD),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    story.append(links_heading)
    story.append(Spacer(1, 2))
    for label, url in data["links"]:
        story.append(Paragraph(f'<link href="{url}" color="#0EA5E9"><b>{label}:</b> {url}</link>', styles["link"]))
    story.append(Spacer(1, 5))

    contact_heading = Table([[Paragraph(data["contact_title"], styles["section"])]], colWidths=[180 * mm])
    contact_heading.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.8, GOLD),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    story.append(contact_heading)
    story.append(Spacer(1, 3))

    contact = Table(
        [[
            Paragraph(f'{data["email_label"]}: <link href="mailto:raykil132a@gmail.com" color="#0F172A">raykil132a@gmail.com</link>', styles["contact"]),
            Paragraph(f'{data["phone_label"]}: <link href="tel:+33611530454" color="#0F172A">+33 6 11 53 04 54</link>', styles["contact"]),
            Paragraph(f'{data["whatsapp_label"]}: <link href="https://wa.me/33611530454" color="#0F172A">Message</link>', styles["contact"]),
        ]],
        colWidths=[74 * mm, 66 * mm, 40 * mm],
    )
    contact.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(contact)
    story.append(Spacer(1, 5))
    story.append(Paragraph(data["footer"], styles["footer"]))

    doc.build(story)
    return output


def main() -> None:
    generated = {}
    for language, data in DATA.items():
        generated[language] = generate_pdf(language, data)

    for legacy_name in ["Rayan_Cappai_Sport_CV_Updated_2026.pdf", "rayan-cappai-sport-cv.pdf"]:
        shutil.copyfile(generated["en"], ROOT / legacy_name)

    for language, path in generated.items():
        print(f"{language}: {path.name}")


if __name__ == "__main__":
    main()
