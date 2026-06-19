import Image from "next/image";
import {
  ArrowRight,
  BookOpenText,
  CaretDown,
  ChartLineUp,
  ChatCircleDots,
  ClipboardText,
  Clock,
  EnvelopeSimple,
  ListChecks,
  MagnifyingGlass,
  MapPin,
  Monitor,
  PencilSimple,
  Phone,
  Storefront,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "./components/contact-form";

const contactPhone = "090-9982-3996";
const contactPhoneHref = "tel:09099823996";
const contactEmail = "misekiten@gmail.com";

const painGroups = [
  {
    label: "お客様との接点",
    title: "見つけてもらえても、来店につながらない",
    items: [
      "Googleマップやホームページの情報が古い",
      "予約・問い合わせまでの導線が分かりにくい",
      "LINEや口コミ運用が止まっている",
    ],
  },
  {
    label: "店舗の現場",
    title: "忙しいほど、説明と確認が増えていく",
    items: [
      "新人やタイミーへ同じ説明を繰り返している",
      "開店・閉店・申し送りが人によって違う",
      "店長だけが分かる業務が増えている",
    ],
  },
];

const outcomes = [
  {
    icon: Storefront,
    title: "来店につながる導線",
    body: "検索・地図・ホームページ・LINE・予約をつなぎ、お客様が迷わず来店できる流れをつくります。",
    items: ["Googleマップ / MEO", "HP・LP改善", "LINE・予約・口コミ導線"],
  },
  {
    icon: UsersThree,
    title: "現場が回る仕組み",
    body: "情報・手順・連絡を一元化し、新しいスタッフでも同じ品質で動ける状態をつくります。",
    items: ["新人教育マニュアル", "タイミー受け入れ資料", "日報・申し送り・スタッフ共有"],
  },
];

const services = [
  {
    icon: MapPin,
    title: "店舗ネット導線改善",
    body: "Googleマップ、HP、LINE、予約・問い合わせまでを一続きに整えます。",
  },
  {
    icon: BookOpenText,
    title: "受け入れマニュアル",
    body: "新人・タイミーが事前に確認できる、現場で使える手順書を作ります。",
  },
  {
    icon: ChatCircleDots,
    title: "AI販促・口コミ運用",
    body: "投稿文、配信文、口コミ返信の作成と継続運用を効率化します。",
  },
  {
    icon: Monitor,
    title: "LINEスタッフポータル",
    body: "シフト、マニュアル、申し送りをLINEから確認できる窓口にまとめます。",
  },
];

const principles = [
  ["01", "必要なところから始める", "店舗の状況と予算を確認し、効果と負担のバランスが良い順番をご提案します。"],
  ["02", "制作と運用を分けない", "作って終わりではなく、更新・返信・共有まで日々使える形に整えます。"],
  ["03", "専門用語を現場の言葉にする", "ITやAIが得意でなくても判断できるよう、実際の画面と手順でお伝えします。"],
] as const;

const prices = [
  {
    name: "店舗ネット導線改善",
    body: "Googleビジネスプロフィール、HP、LINE、予約導線の改善",
    price: "初期 98,000円〜",
    sub: "月額 29,800円〜",
  },
  {
    name: "マニュアル作成",
    body: "新人教育、タイミー受け入れ、開店・閉店手順の整理",
    price: "50,000円〜",
    sub: "内容に応じてお見積もり",
  },
  {
    name: "AI販促・口コミ運用",
    body: "投稿、LINE配信、口コミ返信の作成・運用サポート",
    price: "月額 9,800円〜",
    sub: "29,800円までのプラン",
  },
  {
    name: "LINEスタッフポータル",
    body: "シフト、連絡、マニュアル、申し送りの一元化",
    price: "個別見積もり",
    sub: "必要な機能から構築",
  },
];

const process = [
  [MagnifyingGlass, "お問い合わせ", "フォームまたは電話でご連絡ください。"],
  [ClipboardText, "ヒアリング", "現状・お悩み・目標を整理します。"],
  [PencilSimple, "ご提案・お見積もり", "優先順位と実施内容をご提示します。"],
  [ListChecks, "制作・導入", "設定や資料作成を進めます。"],
  [ChartLineUp, "運用・改善", "公開後も必要に応じて支援します。"],
] as const;

const faqs = [
  ["相談や店舗診断は無料ですか？", "はい。現状を伺い、最初に整えるべき箇所と進め方をご案内します。"],
  ["どのサービスから始めればよいか分かりません。", "問題ありません。集客と店舗業務の状況を整理し、優先順位が高いものからご提案します。"],
  ["ホームページ制作だけでも依頼できますか？", "可能です。GoogleマップやLINEとのつながりも確認し、来店につながる構成をご提案します。"],
  ["ITやAIが苦手でも大丈夫ですか？", "専門用語を減らし、店舗で実際に使う画面や手順まで分かりやすくお伝えします。"],
  ["対応エリアはどこですか？", "オンラインを中心に全国対応します。現地対応が必要な場合は、内容と地域を確認してご案内します。"],
];

function Brand() {
  return (
    <span className="flex items-center gap-2.5">
      <Storefront size={28} weight="fill" className="text-[#174e3a]" aria-hidden="true" />
      <span className="text-xl font-extrabold text-[#17221e]">ミセキテン</span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-16 text-[#17221e] md:pb-0">
      <header className="sticky top-0 z-50 border-b border-[#dce5e0] bg-white/96 backdrop-blur">
        <div className="mx-auto flex h-[68px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
          <a href="#top" aria-label="ミセキテン トップへ">
            <Brand />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold text-[#33413b] lg:flex" aria-label="メインナビゲーション">
            <a href="#services" className="transition hover:text-[#174e3a]">サービス</a>
            <a href="#strengths" className="transition hover:text-[#174e3a]">選ばれる理由</a>
            <a href="#price" className="transition hover:text-[#174e3a]">料金</a>
            <a href="#faq" className="transition hover:text-[#174e3a]">よくある質問</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={contactPhoneHref} className="grid h-10 w-10 place-items-center border border-[#c7d5ce] text-[#174e3a] md:hidden" aria-label={`${contactPhone}へ電話する`}>
              <Phone size={20} weight="bold" aria-hidden="true" />
            </a>
            <a href="#contact" className="hidden min-h-11 items-center gap-2 bg-[#f56f58] px-5 py-3 text-sm font-bold whitespace-nowrap text-white transition hover:bg-[#df5a46] sm:inline-flex">
              無料で店舗診断を相談する
              <ArrowRight size={17} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="border-b border-[#dce5e0]">
        <div className="mx-auto grid max-w-[1440px] md:min-h-[560px] md:grid-cols-[48%_52%]">
          <div className="flex items-center px-5 py-10 sm:px-8 md:px-10 lg:px-[clamp(3rem,6vw,6.5rem)]">
            <div className="max-w-[610px]">
              <h1 className="text-[38px] font-extrabold leading-[1.2] text-[#17221e] sm:text-[48px] lg:text-[62px]">
                <span className="block">小規模店舗の</span>
                <span className="block">集客と業務を、</span>
                <span className="block">まとめて整える。</span>
              </h1>
              <p className="mt-6 max-w-[570px] text-base leading-8 text-[#405048] md:text-lg md:leading-9">
                GoogleマップやLINEで見つけてもらい、サイトで選ばれ、来店につながる導線をつくります。さらに、新人教育や情報共有を整え、毎日の業務を無理なく標準化します。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#f56f58] px-7 py-4 text-base font-bold whitespace-nowrap text-white transition hover:bg-[#df5a46]">
                  無料で店舗診断を相談する
                  <ArrowRight size={19} weight="bold" aria-hidden="true" />
                </a>
                <a href={contactPhoneHref} className="hidden min-h-14 items-center justify-center gap-2 border border-[#174e3a] bg-white px-7 py-4 text-base font-bold whitespace-nowrap text-[#174e3a] transition hover:bg-[#eef7f2] sm:inline-flex">
                  <Phone size={19} weight="bold" aria-hidden="true" />
                  {contactPhone}
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#52635b]">
                <Clock size={18} className="text-[#174e3a]" aria-hidden="true" />
                初回相談無料・オンライン全国対応
              </p>
            </div>
          </div>
          <div className="relative h-[140px] overflow-hidden md:h-auto">
            <Image
              src="/images/hero-operations-v2.png"
              alt="店舗でタブレットを見ながら業務を確認するオーナーとスタッフ"
              fill
              priority
              sizes="(min-width: 768px) 52vw, 100vw"
              className="object-cover object-[52%_42%] md:object-[52%_center]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce5e0] bg-[#f3f8f5] px-5 py-7" aria-label="ミセキテンが整える流れ">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4 md:gap-0">
          {([
            [MapPin, "見つけてもらう", "Googleマップ"],
            [Monitor, "魅力を伝える", "ホームページ"],
            [ChatCircleDots, "来店後もつながる", "LINE・口コミ"],
            [ListChecks, "現場を回しやすく", "業務仕組み化"],
          ] as const).map(([Icon, label, title], index) => (
            <div key={title} className="relative flex min-w-0 items-center gap-3 md:justify-center md:border-l md:border-[#cddbd4] md:px-6 first:md:border-l-0">
              <Icon size={32} weight="duotone" className="shrink-0 text-[#176b50]" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#17221e]">{title}</p>
                <p className="mt-0.5 text-xs text-[#65736d]">{label}</p>
              </div>
              {index < 3 ? <ArrowRight size={17} className="absolute -right-2 hidden text-[#8ea099] md:block" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <h2 className="text-[30px] font-extrabold leading-[1.35] md:text-[42px]">いまの困りごとを、<br className="hidden sm:block" />別々に考えない。</h2>
            <p className="mt-5 text-base leading-8 text-[#52635b]">集客だけ、業務だけを整えても、店長・オーナーの負担は減りません。両方を見て、優先順位を決めます。</p>
          </div>
          <div className="border-t border-[#aebfb7]">
            {painGroups.map((group) => (
              <article key={group.label} className="grid gap-5 border-b border-[#aebfb7] py-7 md:grid-cols-[0.85fr_1.15fr] md:py-8">
                <div>
                  <p className="text-sm font-bold text-[#176b50]">{group.label}</p>
                  <h3 className="mt-2 text-xl font-bold leading-8 text-[#17221e]">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-[#52635b]">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-[#f56f58]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[#dce5e0] bg-[#f3f8f5] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
              <Image
                src="/images/operations-checklist-v2.png"
                alt="店舗の業務チェックリストを確認するオーナーとスタッフ"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-[30px] font-extrabold leading-[1.35] md:text-[42px]">集客の入口から、<br />店舗の毎日まで。</h2>
              <p className="mt-5 text-base leading-8 text-[#52635b]">お客様に見つけてもらう仕組みと、スタッフが迷わず動ける仕組みを、ひとつの計画で整えます。</p>
              <div className="mt-8 border-t border-[#aebfb7]">
                {outcomes.map((outcome) => {
                  const Icon = outcome.icon;
                  return (
                    <article key={outcome.title} className="grid gap-4 border-b border-[#aebfb7] py-7 sm:grid-cols-[64px_1fr]">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#dcefe6] text-[#174e3a]">
                        <Icon size={30} weight="duotone" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-[#174e3a]">{outcome.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[#52635b]">{outcome.body}</p>
                        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-[#405048]">
                          {outcome.items.map((item) => <li key={item}>・{item}</li>)}
                        </ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-14 border-y border-[#aebfb7] lg:grid lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="border-b border-[#aebfb7] py-7 last:border-b-0 lg:border-b-0 lg:border-l lg:px-7 first:lg:border-l-0">
                  <Icon size={38} weight="duotone" className="text-[#174e3a]" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold leading-7">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#52635b]">{service.body}</p>
                </article>
              );
            })}
          </div>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 border-b border-[#f56f58] pb-1 font-bold text-[#df5a46]">
            サービス内容を相談する
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="strengths" className="bg-[#174e3a] px-5 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <h2 className="text-[30px] font-extrabold leading-[1.35] md:text-[42px]">店舗のデジタル担当者として、伴走します。</h2>
            <p className="mt-5 text-base leading-8 text-[#dcefe6]">担当者を一人雇うほどではない。でも、集客も業務改善も止めたくない。そんな小規模店舗の実行役になります。</p>
          </div>
          <div className="border-t border-white/35">
            {principles.map(([number, title, body]) => (
              <article key={number} className="grid gap-3 border-b border-white/35 py-6 sm:grid-cols-[52px_0.8fr_1.2fr] sm:items-start">
                <span className="text-sm font-bold text-[#9dd6c3]">{number}</span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm leading-7 text-[#dcefe6]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-[30px] font-extrabold leading-[1.35] md:text-[42px]">必要なところから、<br className="sm:hidden" />無理なく始められます。</h2>
            <p className="mt-5 text-base leading-8 text-[#52635b]">単体でも組み合わせでもご利用いただけます。正式な費用は、実施範囲を確認してからご案内します。</p>
          </div>
          <div className="mt-10 border-t border-[#aebfb7]">
            {prices.map((item) => (
              <article key={item.name} className="grid gap-3 border-b border-[#aebfb7] py-6 md:grid-cols-[0.8fr_1.3fr_0.8fr] md:items-center md:gap-8">
                <h3 className="text-lg font-bold text-[#174e3a]">{item.name}</h3>
                <p className="text-sm leading-7 text-[#52635b]">{item.body}</p>
                <div className="md:text-right">
                  <p className="text-xl font-extrabold text-[#f05f49]">{item.price}</p>
                  <p className="mt-1 text-xs font-semibold text-[#65736d]">{item.sub}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-[#65736d]">表示価格は税込の目安です。内容・規模・訪問の有無により変動します。</p>
        </div>
      </section>

      <section className="border-y border-[#dce5e0] bg-[#f3f8f5] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[28px] font-extrabold leading-[1.35] md:text-[36px]">ご相談から支援開始まで</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-5 md:gap-4">
            {process.map(([Icon, title, body], index) => (
              <li key={title} className="relative grid grid-cols-[44px_1fr] gap-4 md:block">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#174e3a] text-sm font-bold text-white">{index + 1}</span>
                <div>
                  <Icon size={31} weight="duotone" className="mb-3 text-[#176b50] md:mt-5" aria-hidden="true" />
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#65736d]">{body}</p>
                </div>
                {index < process.length - 1 ? <span className="absolute left-11 top-[21px] hidden h-px w-[calc(100%-44px)] bg-[#b9c8c1] md:block" aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div>
            <h2 className="text-[30px] font-extrabold leading-[1.35] md:text-[42px]">よくある質問</h2>
            <p className="mt-5 text-base leading-8 text-[#52635b]">ご相談前によくいただく質問をまとめています。</p>
          </div>
          <div className="border-t border-[#aebfb7]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-[#aebfb7]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174e3a]">
                  <span className="flex gap-3"><span className="text-[#176b50]">Q.</span>{question}</span>
                  <CaretDown size={20} weight="bold" className="shrink-0 text-[#174e3a] transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pb-6 pl-8 text-sm leading-7 text-[#52635b]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#174e3a] px-5 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <h2 className="text-[30px] font-extrabold leading-[1.35] md:text-[42px]">まずは、今の店舗状況を聞かせてください。</h2>
            <p className="mt-5 text-base leading-8 text-[#dcefe6]">小さなご相談でも大丈夫です。集客と業務のどこから整えるべきかを一緒に確認します。</p>
            <div className="mt-8 space-y-4">
              <a href={contactPhoneHref} className="flex min-h-14 items-center gap-4 border-b border-white/40 py-4 font-bold text-white">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#174e3a]"><Phone size={23} weight="fill" aria-hidden="true" /></span>
                <span><span className="block text-xs font-semibold text-[#b9dfd2]">電話でのお問い合わせ</span><span className="mt-1 block text-xl">{contactPhone}</span></span>
              </a>
              <a href={`mailto:${contactEmail}`} className="flex min-h-14 items-center gap-4 border-b border-white/40 py-4 font-bold text-white">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#174e3a]"><EnvelopeSimple size={23} weight="bold" aria-hidden="true" /></span>
                <span className="min-w-0"><span className="block text-xs font-semibold text-[#b9dfd2]">メールでのお問い合わせ</span><span className="mt-1 block break-all text-lg">{contactEmail}</span></span>
              </a>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#b9dfd2]">受付時間：平日 9:00〜18:00<br />フォームとメールは24時間受け付けています。</p>
          </div>
          <div className="rounded-[8px] bg-white p-6 text-[#17221e] shadow-[0_20px_50px_rgba(9,42,31,0.28)] sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dce5e0] bg-white px-5 py-9 text-[#17221e]">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <Brand />
          <div className="flex flex-col gap-2 text-sm text-[#52635b] sm:flex-row sm:gap-6">
            <a href={contactPhoneHref} className="flex items-center gap-2"><Phone size={17} weight="bold" />{contactPhone}</a>
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-2"><EnvelopeSimple size={17} weight="bold" />{contactEmail}</a>
          </div>
          <p className="text-xs text-[#7a8982]">© 2026 Misekiten</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[0.8fr_1.2fr] border-t border-[#dce5e0] bg-white p-2 shadow-[0_-8px_24px_rgba(23,34,30,0.08)] md:hidden">
        <a href={contactPhoneHref} className="flex min-h-12 items-center justify-center gap-2 text-sm font-bold whitespace-nowrap text-[#174e3a]" aria-label={`${contactPhone}へ電話する`}>
          <Phone size={20} weight="fill" aria-hidden="true" />電話する
        </a>
        <a href="#contact" className="flex min-h-12 items-center justify-center gap-2 bg-[#f56f58] px-3 text-sm font-bold whitespace-nowrap text-white">
          無料診断を相談
          <ArrowRight size={17} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </main>
  );
}
