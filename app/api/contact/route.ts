import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  storeName?: unknown;
  email?: unknown;
  phone?: unknown;
  inquiry?: unknown;
  website?: unknown;
};

function readText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "入力内容を確認してください。" }, { status: 400 });
  }

  if (readText(payload.website, 200)) {
    return NextResponse.json({ message: "お問い合わせを受け付けました。" });
  }

  const name = readText(payload.name, 80);
  const storeName = readText(payload.storeName, 120);
  const email = readText(payload.email, 160);
  const phone = readText(payload.phone, 30);
  const inquiry = readText(payload.inquiry, 3000);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || !inquiry) {
    return NextResponse.json({ message: "必須項目を正しく入力してください。" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { message: "メール送信設定が完了していません。お電話またはメールでお問い合わせください。" },
      { status: 503 },
    );
  }

  const safeInquiry = escapeHtml(inquiry).replaceAll("\n", "<br />");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "ミセキテン <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || "misekiten@gmail.com"],
      reply_to: email,
      subject: `【ミセキテン】無料店舗診断のお問い合わせ${storeName ? `（${storeName}）` : ""}`,
      html: `
        <h2>ミセキテンHPからのお問い合わせ</h2>
        <p><strong>お名前：</strong>${escapeHtml(name)}</p>
        <p><strong>店舗名：</strong>${escapeHtml(storeName || "未入力")}</p>
        <p><strong>メール：</strong>${escapeHtml(email)}</p>
        <p><strong>電話番号：</strong>${escapeHtml(phone || "未入力")}</p>
        <p><strong>ご相談内容：</strong><br />${safeInquiry}</p>
      `,
    }),
  });

  if (!response.ok) {
    console.error("Resend contact delivery failed", response.status, await response.text());
    return NextResponse.json({ message: "送信に失敗しました。お電話またはメールでお問い合わせください。" }, { status: 502 });
  }

  return NextResponse.json({ message: "お問い合わせを受け付けました。" });
}
