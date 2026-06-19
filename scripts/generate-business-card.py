from pathlib import Path

import qrcode
from reportlab.lib.colors import HexColor, white
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PDF_PATH = OUTPUT_DIR / "misekiten-business-card.pdf"
TEMP_DIR = ROOT / "tmp" / "pdfs"
QR_PATH = TEMP_DIR / "misekiten-qr.png"

WIDTH = 55 * mm
HEIGHT = 91 * mm
GREEN = HexColor("#075B4B")
DARK = HexColor("#102724")
CORAL = HexColor("#F15A43")
MINT = HexColor("#DCEBE6")
PALE = HexColor("#F4F7F5")


FONT_NAME = "ArialUnicode"
FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
pdfmetrics.registerFont(TTFont(FONT_NAME, FONT_PATH))


def text(c: canvas.Canvas, value: str, x: float, y: float, size: float, color=DARK):
    c.setFillColor(color)
    c.setFont(FONT_NAME, size)
    c.drawString(x, y, value)


def centered(c: canvas.Canvas, value: str, y: float, size: float, color=DARK):
    c.setFillColor(color)
    c.setFont(FONT_NAME, size)
    c.drawCentredString(WIDTH / 2, y, value)


def create_qr():
    qr = qrcode.QRCode(version=None, box_size=14, border=2)
    qr.add_data("https://misekiten.jp")
    qr.make(fit=True)
    qr.make_image(fill_color="#075B4B", back_color="white").save(QR_PATH)


def draw_front(c: canvas.Canvas):
    c.setFillColor(white)
    c.rect(0, 0, WIDTH, HEIGHT, fill=1, stroke=0)

    text(c, "ミセキテン", 7 * mm, 81 * mm, 15)
    text(c, "地域店舗の集客・業務改善支援", 7 * mm, 75.5 * mm, 7.2)
    c.setFillColor(CORAL)
    c.rect(7 * mm, 71 * mm, 10 * mm, 1.1 * mm, fill=1, stroke=0)

    text(c, "小野 一真", 7 * mm, 50 * mm, 20)
    text(c, "代表｜地域店舗のデジタル担当者", 7 * mm, 43.5 * mm, 6.4)

    c.setStrokeColor(MINT)
    c.setLineWidth(0.7)
    c.line(7 * mm, 26 * mm, 48 * mm, 26 * mm)
    text(c, "090-9982-3996", 7 * mm, 19.5 * mm, 9)
    text(c, "misekiten@gmail.com", 7 * mm, 14 * mm, 8)
    text(c, "misekiten.jp", 7 * mm, 8.5 * mm, 9, GREEN)
    c.showPage()


def draw_back(c: canvas.Canvas):
    c.setFillColor(GREEN)
    c.rect(0, 51 * mm, WIDTH, 40 * mm, fill=1, stroke=0)
    c.setFillColor(PALE)
    c.rect(0, 0, WIDTH, 51 * mm, fill=1, stroke=0)

    text(c, "小規模店舗の集客と業務を、", 7 * mm, 76 * mm, 10.4, white)
    text(c, "まとめて整える。", 7 * mm, 68.5 * mm, 14.5, white)
    c.setFillColor(CORAL)
    c.rect(7 * mm, 62.5 * mm, 10 * mm, 1.1 * mm, fill=1, stroke=0)

    services = [
        "Googleマップ・ホームページ",
        "LINE・口コミ運用",
        "新人教育マニュアル",
        "店舗業務の仕組み化",
    ]
    y = 45 * mm
    for service in services:
        text(c, service, 7 * mm, y, 7.4)
        c.setStrokeColor(MINT)
        c.setLineWidth(0.5)
        c.line(7 * mm, y - 2.2 * mm, 48 * mm, y - 2.2 * mm)
        y -= 7.2 * mm

    c.setFillColor(white)
    c.roundRect(7 * mm, 4.8 * mm, 15.5 * mm, 15.5 * mm, 1.5 * mm, fill=1, stroke=0)
    c.drawImage(str(QR_PATH), 7.7 * mm, 5.5 * mm, 14.1 * mm, 14.1 * mm, mask="auto")
    text(c, "サービス内容・無料相談", 25 * mm, 15.2 * mm, 6.8)
    text(c, "misekiten.jp", 25 * mm, 9.2 * mm, 11, GREEN)
    c.showPage()


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    TEMP_DIR.mkdir(parents=True, exist_ok=True)
    create_qr()
    c = canvas.Canvas(str(PDF_PATH), pagesize=(WIDTH, HEIGHT), pageCompression=1)
    c.setTitle("ミセキテン 名刺 - 小野一真")
    c.setAuthor("ミセキテン")
    draw_front(c)
    draw_back(c)
    c.save()
    print(PDF_PATH)


if __name__ == "__main__":
    main()
