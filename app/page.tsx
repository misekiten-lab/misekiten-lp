"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

const issues = [
  "ホームページがない、または情報が古い",
  "Googleマップの写真・営業時間・口コミ対応が整っていない",
  "LINE公式やSNSが来店・予約につながっていない",
  "AIやITの使い方が分からず、日々の業務に活かせていない",
];

const services = [
  {
    title: "ホームページ制作・改善",
    body: "LP制作、店舗HP制作、問い合わせ導線設計、予約導線改善まで、来店前の不安を減らすページに整えます。",
  },
  {
    title: "Googleマップ対策 / MEO",
    body: "Googleビジネスプロフィール、写真、店舗情報、口コミ運用を整備し、地域検索で見つかりやすい状態を作ります。",
  },
  {
    title: "LINE公式アカウント導入",
    body: "初期設定、リッチメニュー、自動返信、クーポン設計で、初回来店からリピートまでの接点を作ります。",
  },
  {
    title: "AI活用支援",
    body: "ChatGPT導入、店舗向けAI活用、業務効率化を支援し、文章作成や返信対応の負担を軽くします。",
  },
];

const reasons = [
  "ホームページ単体ではなく、GoogleマップからLINEまで一続きで設計",
  "小規模店舗の現場に合わせて、必要な施策から無理なく導入",
  "専門用語を減らし、営業・運用で使える形まで伴走",
];

const steps = [
  ["1", "無料相談", "現状の集客導線と困りごとをヒアリングします。"],
  ["2", "導線診断", "HP、Googleマップ、LINE、SNSのつながりを確認します。"],
  ["3", "設計・制作", "優先順位を決め、必要なページや設定を整えます。"],
  ["4", "運用サポート", "公開後の改善、口コミ返信、AI活用まで支援します。"],
];

const faqs = [
  ["ホームページがなくても相談できますか？", "はい。GoogleマップやLINEの状況も含めて、最初に整えるべき導線から提案します。"],
  ["制作だけの依頼も可能ですか？", "可能です。LP制作、店舗HP改善、予約導線の見直しなど、必要な範囲で対応します。"],
  ["ITが苦手でも大丈夫ですか？", "大丈夫です。専門用語を避け、運用で使う画面や手順まで分かりやすく整理します。"],
  ["料金はどのくらいですか？", "内容により変動します。まずは現状確認のうえ、必要な施策と費用感を提示します。"],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-[#0f8f7a]" viewBox="0 0 24 24" fill="none">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionTitle({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className="text-3xl font-bold leading-tight text-[#17211f] md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[#64716d] md:text-lg">{lead}</p>
    </div>
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 border-b border-[#e6efec] bg-white/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3" aria-label="ミセキテン ホーム">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#0f8f7a] text-sm font-bold text-white">ミ</span>
            <span className="text-lg font-bold text-[#17211f]">ミセキテン</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#41504c] md:flex" aria-label="メインナビゲーション">
            <a href="#service">サービス</a>
            <a href="#flow">導入の流れ</a>
            <a href="#price">料金</a>
            <a href="#contact">問い合わせ</a>
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg bg-[#0f8f7a] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0a665b] sm:inline-flex"
          >
            無料相談する
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="relative border-b border-[#e6efec]">
        <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.02fr_0.98fr] md:py-16">
          <div className="min-w-0">
            <h1 className="max-w-3xl text-[34px] font-bold leading-[1.18] text-[#17211f] md:text-[44px] lg:text-[48px]">
              地域店舗の集客導線を、
              <br className="hidden md:block" />
              まるごと整える。
            </h1>
            <p className="mt-6 max-w-[320px] break-words text-base leading-8 text-[#53635f] [overflow-wrap:anywhere] [word-break:break-all] md:max-w-2xl md:text-xl md:leading-9 md:[word-break:normal]">
              ホームページ、Googleマップ、LINE導入まで。小さなお店の「見つかる・伝わる・来店される」を支援します。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex max-w-[320px] items-center justify-center gap-2 rounded-lg bg-[#0f8f7a] px-6 py-4 text-base font-bold text-white shadow-md transition hover:bg-[#0a665b] md:max-w-none"
              >
                無料相談する
                <ArrowIcon />
              </a>
              <a
                href="#service"
                className="inline-flex max-w-[320px] items-center justify-center rounded-lg border border-[#b9cbc6] px-6 py-4 text-base font-bold text-[#17211f] transition hover:border-[#0f8f7a] hover:text-[#0a665b] md:max-w-none"
              >
                サービスを見る
              </a>
            </div>
            <div className="mt-10 grid w-full max-w-[320px] grid-cols-3 divide-x divide-[#dce7e3] overflow-hidden rounded-lg border border-[#dce7e3] bg-white md:max-w-xl">
              {["Googleマップ", "ホームページ", "LINE"].map((item) => (
                <div key={item} className="min-w-0 px-2 py-4 text-center text-xs font-bold text-[#41504c] sm:text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="max-w-[calc(100vw-40px)] overflow-hidden rounded-lg border border-[#dce7e3] bg-white shadow-[0_24px_70px_rgba(26,72,64,0.12)] md:max-w-none">
              <Image
                src="/images/hero-store.png"
                alt="地域店舗の入口に立つ店舗オーナー"
                width={1024}
                height={768}
                priority
                className="h-64 w-full object-cover md:h-72"
              />
            </div>
            <div className="relative z-10 mx-4 -mt-8 max-w-[calc(100vw-40px)] rounded-lg border border-[#dce7e3] bg-white p-5 shadow-xl md:mx-8 md:max-w-none">
              <div>
                <div className="mb-5 flex items-center justify-between border-b border-[#e6efec] pb-4">
                  <div>
                    <p className="text-sm font-bold text-[#17211f]">来店までの導線</p>
                    <p className="mt-1 text-xs text-[#64716d]">見つかる・伝わる・再来店される</p>
                  </div>
                  <span className="hidden rounded-md bg-[#e9f7f3] px-3 py-1 text-xs font-bold text-[#0a665b] sm:inline">整理済み</span>
                </div>
                <div className="space-y-3">
                  {["Googleマップで見つかる", "HPで魅力と安心感が伝わる", "LINEで予約・再来店につなげる", "口コミとAIで運用を軽くする"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-[#e6efec] px-4 py-3">
                      <CheckIcon />
                      <span className="text-sm font-semibold text-[#2b3835]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf9] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title="集客の入口はあるのに、来店までつながっていない。"
            lead="地域店舗の集客は、ひとつのツールだけでは完結しません。見つけてもらい、安心してもらい、予約や再来店につながる流れが必要です。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {issues.map((issue) => (
              <div key={issue} className="flex gap-4 rounded-lg border border-[#dce7e3] bg-white p-5">
                <CheckIcon />
                <p className="text-base font-semibold leading-7 text-[#2b3835]">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title="店舗の状況に合わせて、必要な導線から整えます。"
            lead="ホームページ制作だけで終わらせず、Googleマップ、LINE、AI活用まで、売上につながる接点をまとめて設計します。"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-[#dce7e3] bg-white p-7 shadow-sm">
                <div className="mb-5 h-1.5 w-12 rounded-full bg-[#0f8f7a]" />
                <h3 className="text-xl font-bold text-[#17211f]">{service.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#53635f]">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6efec] bg-[#f7f3ec] px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#17211f] md:text-4xl">ミセキテンが選ばれる理由</h2>
            <p className="mt-5 text-base leading-8 text-[#53635f]">
              店舗オーナーが自分で運用しやすい状態を重視します。作って終わりではなく、営業・予約・再来店に使える導線として整えます。
            </p>
          </div>
          <div className="space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                <CheckIcon />
                <p className="text-base font-semibold leading-7 text-[#2b3835]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="導入の流れ" lead="初回相談から公開後の改善まで、必要なことを順番に整理して進めます。" />
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map(([num, title, body]) => (
              <article key={num} className="rounded-lg border border-[#dce7e3] bg-white p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#e9f7f3] text-sm font-bold text-[#0a665b]">{num}</span>
                <h3 className="mt-5 text-lg font-bold text-[#17211f]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#64716d]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="bg-[#f7faf9] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="料金目安" lead="店舗の現状と必要な範囲に合わせて提案します。まずは小さく始める相談も可能です。" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["ライト", "まずは入口を整える", "5万円〜", "Googleマップ整備、導線診断、簡易改善提案"],
              ["スタンダード", "HPとLINEまで整える", "15万円〜", "LP/店舗HP制作、LINE初期設定、問い合わせ導線設計"],
              ["伴走サポート", "運用改善まで任せる", "月3万円〜", "口コミ運用、AI活用、更新・改善サポート"],
            ].map(([name, label, price, detail]) => (
              <article key={name} className="rounded-lg border border-[#dce7e3] bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-[#17211f]">{name}</h3>
                <p className="mt-2 text-sm font-semibold text-[#0a665b]">{label}</p>
                <p className="mt-6 text-3xl font-bold text-[#17211f]">{price}</p>
                <p className="mt-4 text-sm leading-7 text-[#64716d]">{detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-[#64716d]">表示価格は目安です。正式な金額はヒアリング後にお見積もりします。</p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle title="よくある質問" lead="営業時によくいただく質問をまとめました。" />
          <div className="divide-y divide-[#dce7e3] rounded-lg border border-[#dce7e3] bg-white">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#17211f]">
                  {question}
                  <span className="text-xl text-[#0f8f7a] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#64716d]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0d3a34] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">まずは無料で、今の集客導線を確認しませんか。</h2>
            <p className="mt-5 text-base leading-8 text-[#d8ebe6]">
              ホームページ、Googleマップ、LINE、SNSのどこから整えるべきかを一緒に確認します。まだ具体的な依頼内容が決まっていなくても大丈夫です。
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 text-[#17211f] shadow-xl">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-bold">
                お名前
                <input required className="mt-2 w-full rounded-lg border border-[#cfded9] px-4 py-3 outline-none focus:border-[#0f8f7a]" placeholder="山田 太郎" />
              </label>
              <label className="text-sm font-bold">
                店舗名
                <input className="mt-2 w-full rounded-lg border border-[#cfded9] px-4 py-3 outline-none focus:border-[#0f8f7a]" placeholder="店舗名" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-bold">
              メールアドレス
              <input required type="email" className="mt-2 w-full rounded-lg border border-[#cfded9] px-4 py-3 outline-none focus:border-[#0f8f7a]" placeholder="info@example.com" />
            </label>
            <label className="mt-4 block text-sm font-bold">
              相談内容
              <textarea required rows={5} className="mt-2 w-full resize-none rounded-lg border border-[#cfded9] px-4 py-3 outline-none focus:border-[#0f8f7a]" placeholder="ホームページ改善、Googleマップ整備、LINE導入など" />
            </label>
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0f8f7a] px-6 py-4 text-base font-bold text-white transition hover:bg-[#0a665b]">
              無料相談する
              <ArrowIcon />
            </button>
            {submitted && <p className="mt-4 rounded-lg bg-[#e9f7f3] px-4 py-3 text-sm font-bold text-[#0a665b]">送信デモを受け付けました。実運用時に送信先を接続します。</p>}
          </form>
        </div>
      </section>

      <footer className="border-t border-[#e6efec] px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#64716d] md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-[#17211f]">ミセキテン</p>
          <p>地域店舗の集客導線を、まるごと整える。</p>
          <p>© 2026 Misekiten</p>
        </div>
      </footer>
    </main>
  );
}
