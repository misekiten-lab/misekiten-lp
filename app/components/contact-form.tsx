"use client";

import { FormEvent, useState } from "react";
import { CheckCircle, PaperPlaneTilt, WarningCircle } from "@phosphor-icons/react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "送信できませんでした。時間をおいて再度お試しください。");
      }

      form.reset();
      setState("success");
      setMessage("お問い合わせを受け付けました。内容を確認してご連絡します。");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "送信できませんでした。");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="無料店舗診断のお問い合わせフォーム">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-[#17221e]">
          お名前 <span className="text-[#df5a46]">必須</span>
          <input name="name" required maxLength={80} autoComplete="name" className="form-control" placeholder="例）山田 太郎" />
        </label>
        <label className="block text-sm font-bold text-[#17221e]">
          店舗名
          <input name="storeName" maxLength={120} autoComplete="organization" className="form-control" placeholder="例）カフェ ミセキテン" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-[#17221e]">
          メールアドレス <span className="text-[#df5a46]">必須</span>
          <input name="email" required type="email" maxLength={160} autoComplete="email" className="form-control" placeholder="例）info@example.com" />
        </label>
        <label className="block text-sm font-bold text-[#17221e]">
          電話番号
          <input name="phone" type="tel" maxLength={30} autoComplete="tel" className="form-control" placeholder="例）090-1234-5678" />
        </label>
      </div>
      <label className="block text-sm font-bold text-[#17221e]">
        ご相談内容 <span className="text-[#df5a46]">必須</span>
        <textarea name="inquiry" required maxLength={3000} rows={6} className="form-control resize-y" placeholder="集客、Googleマップ、新人教育、タイミー受け入れなど、現在のお悩みをご記入ください。" />
      </label>
      <label className="sr-only" aria-hidden="true">
        ウェブサイト
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <p className="text-xs leading-6 text-[#65736d]">送信いただいた情報は、お問い合わせへの回答以外には使用しません。</p>
      <button type="submit" disabled={state === "submitting"} className="flex min-h-14 w-full items-center justify-center gap-2 rounded-[4px] bg-[#f56f58] px-6 py-4 text-base font-bold whitespace-nowrap text-white transition hover:bg-[#df5a46] disabled:cursor-wait disabled:opacity-65">
        <PaperPlaneTilt size={21} weight="fill" aria-hidden="true" />
        {state === "submitting" ? "送信中です" : "無料診断を申し込む"}
      </button>
      {message ? (
        <p role="status" className={`flex items-start gap-2 rounded-[4px] border px-4 py-3 text-sm leading-6 ${state === "success" ? "border-[#b8dfd4] bg-[#edf8f4] text-[#0f6a5b]" : "border-[#f2bdb4] bg-[#fff4f1] text-[#9f3325]"}`}>
          {state === "success" ? <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0" /> : <WarningCircle size={20} weight="fill" className="mt-0.5 shrink-0" />}
          {message}
        </p>
      ) : null}
    </form>
  );
}
