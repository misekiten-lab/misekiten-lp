import Image from "next/image";
import {
  ArrowRight,
  BookOpenText,
  CaretDown,
  ChartLineUp,
  ChatCircleDots,
  CheckCircle,
  ClipboardText,
  Clock,
  CurrencyJpy,
  EnvelopeSimple,
  ListChecks,
  MagnifyingGlass,
  MapPin,
  MegaphoneSimple,
  Monitor,
  PencilSimple,
  Phone,
  Quotes,
  Storefront,
  TrendUp,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "./components/contact-form";

const contactPhone = "090-9982-3996";
const contactPhoneHref = "tel:09099823996";
const contactEmail = "misekiten@gmail.com";

const concerns = [
  ["GoogleマップやHPの情報が古い", "更新が止まり、検索したお客様に今の魅力が伝わっていない。"],
  ["LINEや口コミ運用が続かない", "配信文や返信を考える時間がなく、せっかくの接点を活かせていない。"],
  ["新人への説明に時間がかかる", "タイミーや新人が入るたび、店長が同じ説明を繰り返している。"],
  ["業務が人によってバラバラ", "開店・閉店・申し送りが属人化し、現場の確認作業が増えている。"],
];

const pillars = [
  {
    icon: TrendUp,
    title: "集客導線を整える",
    body: "Googleマップ、ホームページ、LINE、予約・問い合わせ、口コミ対応を一続きにします。",
    items: ["Googleマップ / MEO", "HP・LP改善", "LINE公式", "予約・口コミ導線"],
  },
  {
    icon: ListChecks,
    title: "店舗業務を仕組み化する",
    body: "新人教育、タイミー受け入れ、開閉店作業、日報・申し送りを誰でも確認できる形にします。",
    items: ["新人教育マニュアル", "タイミー受け入れ資料", "AI日報・申し送り", "LINEスタッフポータル"],
  },
];

const services = [
  {
    icon: MapPin,
    title: "店舗ネット導線改善パック",
    body: "Googleマップ、ホームページ、LINEを整え、検索から来店・再来店までの流れを改善します。",
  },
  {
    icon: BookOpenText,
    title: "タイミー受け入れマニュアル",
    body: "入店方法、業務範囲、注意事項、作業手順を、単発スタッフが事前確認できる資料にします。",
  },
  {
    icon: ChatCircleDots,
    title: "AI販促・口コミ運用パック",
    body: "Googleマップ投稿、LINE配信、口コミ返信など、継続が大変な文章作成をAIで効率化します。",
  },
  {
    icon: UsersThree,
    title: "LINEスタッフポータル",
    body: "シフト、マニュアル、申し送り、FAQをLINEから確認できるスタッフ向け窓口を構築します。",
  },
];

const reasons = [
  [Storefront, "地域店舗の伴走役", "小規模店舗の現場と予算に合わせ、必要なところから整えます。"],
  [CheckCircle, "集客後まで見据える", "お客様が増えた後も、店舗業務が無理なく回る状態を作ります。"],
  [CurrencyJpy, "明確な料金と範囲", "実施内容と費用を先に整理し、不要な施策は勧めません。"],
  [ChartLineUp, "更新できる仕組み", "作って終わりにせず、日々の更新・説明・共有を軽くします。"],
] as const;

const process = [
  [MagnifyingGlass, "無料相談", "お悩みと現状を伺います。"],
  [ClipboardText, "現状診断", "集客と業務を整理します。"],
  [PencilSimple, "ご提案", "優先順位と費用を提示します。"],
  [MegaphoneSimple, "制作・導入", "必要な設定や資料を作ります。"],
  [TrendUp, "運用・改善", "公開後も必要に応じて支援します。"],
] as const;

const prices = [
  {
    name: "店舗ネット導線改善",
    price: "初期 98,000円〜",
    sub: "月額 29,800円〜",
    body: "Googleマップ・HP・LINE・予約導線をまとめて改善。",
  },
  {
    name: "マニュアル作成",
    price: "50,000円〜",
    sub: "内容に応じてお見積もり",
    body: "新人教育・タイミー受け入れ・開閉店手順などを整理。",
  },
  {
    name: "AI販促・口コミ運用",
    price: "月額 9,800円〜",
    sub: "29,800円までのプラン",
    body: "投稿文・配信文・口コミ返信・月次運用を効率化。",
  },
  {
    name: "LINEスタッフポータル",
    price: "個別見積もり",
    sub: "必要な機能から構築",
    body: "シフト・マニュアル・申し送りをLINEに集約。",
  },
];

const faqs = [
  ["相談や店舗診断は無料ですか？", "はい。現状を伺い、最初に整えるべき箇所と進め方をご案内します。"],
  ["ホームページ制作だけでも依頼できますか？", "可能です。ただし、GoogleマップやLINEとのつながりも確認し、来店につながる構成をご提案します。"],
  ["タイミーを使っていない店舗でも相談できますか？", "もちろん可能です。新人教育、開店・閉店手順、申し送りなど、店舗ごとの課題に合わせて整理します。"],
  ["ITやAIが苦手でも大丈夫ですか？", "専門用語を減らし、店舗で実際に使う画面や手順まで分かりやすくお伝えします。"],
  ["対応エリアはどこですか？", "オンラインを中心に全国対応します。現地対応が必要な場合は、内容と地域を確認してご案内します。"],
];

function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <h2 className="text-balance text-[28px] font-bold leading-[1.35] text-[#111827] md:text-[38px]">{title}</h2>
      <span className="mx-auto mt-4 block h-1 w-12 bg-[#14b8a6]" />
      {lead ? <p className="mt-5 text-base leading-8 text-[#52605d] md:text-lg">{lead}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-16 text-[#111827] md:pb-0">
      <header className="sticky top-0 z-50 border-b border-[#e2e8e5] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2.5" aria-label="ミセキテン トップへ">
            <Storefront size={30} weight="fill" className="text-[#166534]" aria-hidden="true" />
            <span className="text-xl font-bold text-[#166534]">ミセキテン</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#374151] lg:flex" aria-label="メインナビゲーション">
            <a href="#services" className="transition hover:text-[#166534]">サービス</a>
            <a href="#strengths" className="transition hover:text-[#166534]">選ばれる理由</a>
            <a href="#price" className="transition hover:text-[#166534]">料金</a>
            <a href="#faq" className="transition hover:text-[#166534]">よくある質問</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={contactPhoneHref} className="grid h-10 w-10 place-items-center border border-[#cfdad6] text-[#166534] md:hidden" aria-label={`${contactPhone}へ電話する`}>
              <Phone size={21} weight="bold" aria-hidden="true" />
            </a>
            <a href="#contact" className="hidden items-center gap-2 bg-[#f97360] px-5 py-3 text-sm font-bold whitespace-nowrap text-white transition hover:bg-[#e85d4b] sm:inline-flex">
              無料で店舗診断を相談する
              <ArrowRight size={17} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative flex h-[calc(100svh-220px)] min-h-[590px] max-h-[650px] items-center overflow-hidden border-b border-[#e2e8e5] md:h-[calc(100svh-170px)] md:min-h-[540px] md:max-h-[620px]">
        <Image
          src="/images/hero-store.png"
          alt="地域店舗の入口に立つ店舗オーナー"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] md:object-[center_40%]"
        />
        <div className="absolute inset-y-0 left-0 w-full bg-white/85 md:w-[58%] lg:w-[52%]" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-10">
          <div className="max-w-[620px]">
            <h1 className="text-[38px] font-bold leading-[1.22] text-[#111827] sm:text-[46px] lg:text-[58px]">
              <span className="block">小規模店舗の</span>
              <span className="block">集客と業務を、</span>
              <span className="block">まとめて整える。</span>
            </h1>
            <p className="mt-6 max-w-[590px] text-base leading-8 text-[#374151] md:text-lg md:leading-9">
              Googleマップ、LINE、ホームページの整備から、新人教育マニュアルやスタッフ向け情報共有まで。ミセキテンは、地域店舗のデジタル担当者として、店長・オーナーの負担を減らします。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#f97360] px-7 py-4 text-base font-bold whitespace-nowrap text-white shadow-[0_10px_24px_rgba(249,115,96,0.24)] transition hover:bg-[#e85d4b]">
                無料で店舗診断を相談する
                <ArrowRight size={19} weight="bold" aria-hidden="true" />
              </a>
              <a href={contactPhoneHref} className="inline-flex min-h-13 items-center justify-center gap-2 border border-[#166534] bg-white/90 px-7 py-4 text-base font-bold whitespace-nowrap text-[#166534] transition hover:bg-[#f0f8f3]">
                <Phone size={19} weight="bold" aria-hidden="true" />
                {contactPhone}
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#52605d]">
              <Clock size={18} className="text-[#166534]" aria-hidden="true" />
              初回相談無料・オンライン全国対応
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2e8e5] bg-white px-5 py-7" aria-label="ミセキテンが整える流れ">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4 md:gap-0">
          {([
            [MapPin, "見つけてもらう", "Googleマップ"],
            [Monitor, "魅力を伝える", "ホームページ"],
            [ChatCircleDots, "つながり続ける", "LINE"],
            [ListChecks, "現場を回しやすく", "業務仕組み化"],
          ] as const).map(([Icon, label, title], index) => (
            <div key={String(title)} className="relative flex min-w-0 items-center gap-3 px-2 md:justify-center md:border-l md:border-[#e2e8e5] md:px-5 first:md:border-l-0">
              <Icon size={34} weight="duotone" className="shrink-0 text-[#15917d]" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#111827]">{title}</p>
                <p className="mt-0.5 text-xs text-[#6b7280]">{label}</p>
              </div>
              {index < 3 ? <ArrowRight size={17} className="absolute -right-2 hidden text-[#9ca3af] md:block" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="こんな悩み、ありませんか？" />
          <div className="grid overflow-hidden border border-[#d9e3df] md:grid-cols-2 lg:grid-cols-4">
            {concerns.map(([title, body], index) => (
              <article key={title} className="border-t border-[#d9e3df] p-6 first:border-t-0 md:border-l md:first:border-l-0 md:[&:nth-child(-n+2)]:border-t-0 lg:border-t-0">
                <Quotes size={28} weight="fill" className="text-[#14b8a6]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold leading-7 text-[#111827]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5c6865]">{body}</p>
                <p className="mt-5 text-xs font-bold text-[#166534]">課題 {String(index + 1).padStart(2, "0")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9e3df] bg-[#f7faf8] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="集客と業務、2つの方向から整えます。" lead="集客できても現場が回らなければ、店長の負担は増えてしまいます。入口と現場を一緒に整理します。" />
          <div className="grid gap-6 lg:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="border border-[#cad9d3] bg-white p-7 md:p-9">
                  <Icon size={46} weight="duotone" className="text-[#166534]" aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-bold text-[#111827]">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[#52605d]">{pillar.body}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#374151]">
                        <CheckCircle size={19} weight="fill" className="shrink-0 text-[#14b8a6]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="ミセキテンのサービス" lead="店舗の状況に合わせ、必要なパッケージから始められます。" />
          <div className="grid overflow-hidden border-y border-[#d9e3df] md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="border-b border-[#d9e3df] px-6 py-8 md:border-l md:[&:nth-child(odd)]:border-l-0 lg:border-b-0 lg:[&:nth-child(3)]:border-l lg:first:border-l-0">
                  <Icon size={42} weight="duotone" className="text-[#15917d]" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold leading-7 text-[#111827]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5c6865]">{service.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="strengths" className="bg-[#087d70] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-[28px] font-bold leading-[1.35] md:text-[38px]">現場目線で、店舗の面倒ごとを減らす。</h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-8 text-[#d9f1ec]">
            単なるHP制作やMEO対策ではなく、店舗で発生する「説明・更新・共有・確認」の負担まで減らします。
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {reasons.map(([Icon, title, body]) => (
              <article key={String(title)} className="lg:border-l lg:border-white/30 lg:px-7 first:lg:border-l-0">
                <Icon size={42} weight="duotone" className="text-white" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#d9f1ec]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="ご相談から導入までの流れ" />
          <ol className="grid gap-8 md:grid-cols-5 md:gap-4">
            {process.map(([Icon, title, body], index) => (
              <li key={String(title)} className="relative flex gap-4 md:block md:text-center">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e7f6f2] text-sm font-bold text-[#087d70]">{index + 1}</span>
                <div>
                  <Icon size={34} weight="duotone" className="mb-3 text-[#15917d] md:mx-auto md:mt-5" aria-hidden="true" />
                  <h3 className="font-bold text-[#111827]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#66716e]">{body}</p>
                </div>
                {index < process.length - 1 ? <ArrowRight size={20} className="absolute -right-3 top-4 hidden text-[#94a3a0] md:block" aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="price" className="border-y border-[#d9e3df] bg-[#f7faf8] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="料金の目安" lead="必要な範囲を確認したうえで、正式なお見積もりをご案内します。" />
          <div className="grid overflow-hidden border border-[#d9e3df] bg-white md:grid-cols-2 lg:grid-cols-4">
            {prices.map((item) => (
              <article key={item.name} className="border-t border-[#d9e3df] p-7 first:border-t-0 md:border-l md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(odd)]:border-l-0 lg:border-t-0 lg:[&:nth-child(3)]:border-l">
                <h3 className="text-lg font-bold leading-7 text-[#111827]">{item.name}</h3>
                <p className="mt-6 text-2xl font-bold text-[#166534]">{item.price}</p>
                <p className="mt-1 text-sm font-semibold text-[#66716e]">{item.sub}</p>
                <p className="mt-5 text-sm leading-7 text-[#5c6865]">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-sm leading-7 text-[#66716e]">表示価格は税込の目安です。内容・規模・訪問の有無により変動します。</p>
        </div>
      </section>

      <section id="faq" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="よくある質問" />
          <div className="border-y border-[#d9e3df]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-[#d9e3df] last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-bold text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#166534]">
                  <span className="flex gap-3"><span className="text-[#166534]">Q.</span>{question}</span>
                  <CaretDown size={20} weight="bold" className="shrink-0 text-[#166534] transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pb-6 pl-8 text-sm leading-7 text-[#5c6865]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#d9e3df] bg-[#f7faf8] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-[30px] font-bold leading-[1.35] text-[#111827] md:text-[40px]">
              <span className="block">まずは無料で、</span>
              <span className="block">店舗の状況を聞かせてください。</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-[#52605d]">
              集客と業務のどこから整えるべきかを一緒に確認します。まだ依頼内容が決まっていなくても大丈夫です。
            </p>
            <div className="mt-8 space-y-3">
              <a href={contactPhoneHref} className="flex min-h-14 items-center gap-3 bg-[#f97360] px-5 py-4 font-bold whitespace-nowrap text-white transition hover:bg-[#e85d4b]">
                <Phone size={24} weight="fill" aria-hidden="true" />
                {contactPhone}
              </a>
              <a href={`mailto:${contactEmail}`} className="flex min-h-14 items-center gap-3 border border-[#166534] bg-white px-5 py-4 font-bold text-[#166534] transition hover:bg-[#f0f8f3]">
                <EnvelopeSimple size={24} weight="bold" aria-hidden="true" />
                <span className="break-all">{contactEmail}</span>
              </a>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#66716e]">受付時間：平日 9:00〜18:00<br />フォームとメールは24時間受け付けています。</p>
          </div>
          <div className="border-t border-[#cfdad6] pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-[#075f56] px-5 py-9 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <Storefront size={30} weight="fill" aria-hidden="true" />
            <span className="text-xl font-bold">ミセキテン</span>
          </div>
          <div className="flex flex-col gap-2 text-sm text-[#d8eeea] sm:flex-row sm:gap-6">
            <a href={contactPhoneHref} className="flex items-center gap-2"><Phone size={17} weight="bold" />{contactPhone}</a>
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-2"><EnvelopeSimple size={17} weight="bold" />{contactEmail}</a>
          </div>
          <p className="text-xs text-[#b9d8d2]">© 2026 Misekiten</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[0.8fr_1.2fr] border-t border-[#d9e3df] bg-white p-2 shadow-[0_-8px_24px_rgba(17,24,39,0.08)] md:hidden">
        <a href={contactPhoneHref} className="flex min-h-12 items-center justify-center gap-2 text-sm font-bold whitespace-nowrap text-[#166534]" aria-label={`${contactPhone}へ電話する`}>
          <Phone size={20} weight="fill" aria-hidden="true" />電話する
        </a>
        <a href="#contact" className="flex min-h-12 items-center justify-center gap-2 bg-[#f97360] px-3 text-sm font-bold whitespace-nowrap text-white">
          無料診断を相談
          <ArrowRight size={17} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </main>
  );
}
