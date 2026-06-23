import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import heroImg from "../../assets/hero-rings.jpg";

import p1 from "../../assets/ptoduct-1.jpg";
import p2 from "../../assets/ptoduct-2.jpg";
import p3 from "../../assets/ptoduct-3.jpg";
import p4 from "../../assets/ptoduct-4.jpg";

import craftImg from "../../assets/craft.jpg";
import mugsImg from "../../assets/mugs.jpg";
import roomImg from "../../assets/room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HIR STUDIO — اشیای چوبی دست‌ساز" },
      { name: "description", content: "HIR STUDIO؛ اشیای چوبی دست‌ساز با زیبایی‌شناسی مینیمال، معاصر و بی‌زمان." },
      { property: "og:title", content: "HIR STUDIO" },
      { property: "og:description", content: "اشیایی که برای دیده شدن فریاد نمی‌زنند، اما برای ماندن ساخته شده‌اند." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const products = [
  { id: 1, name: "حلقه گردو — تک‌نگین", price: "۲٬۸۰۰٬۰۰۰", img: p1, tag: "حلقه" },
  { id: 2, name: "کاسه راش — مجموعه طلوع", price: "۴٬۲۰۰٬۰۰۰", img: p2, tag: "کاسه" },
  { id: 3, name: "پایه عود — خط افق", price: "۱٬۹۰۰٬۰۰۰", img: p3, tag: "اکسسوری" },
  { id: 4, name: "گلدان منحنی — شب", price: "۶٬۵۰۰٬۰۰۰", img: p4, tag: "گلدان" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Collections />
      <BestSellers />
      <Craftsmanship />
      <SignatureCreator />
      <BuildYourOwn />
      <RoomStylist />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"}`}>
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14 h-20 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl tracking-[0.3em] text-foreground">HIR<span className="text-accent">·</span>STUDIO</a>
        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.25em] uppercase text-foreground/80">
          <a href="#collections" className="hover:text-accent transition-colors">مجموعه</a>
          <a href="#story" className="hover:text-accent transition-colors">داستان هیر</a>
          <a href="#craft" className="hover:text-accent transition-colors">صنعتگری</a>
          <a href="#studio" className="hover:text-accent transition-colors">استودیو</a>
          <a href="#contact" className="hover:text-accent transition-colors">تماس</a>
        </nav>
        <div className="flex items-center gap-5 text-[12px] tracking-[0.25em] uppercase">
          <button className="hover:text-accent transition-colors">جستجو</button>
          <button className="hover:text-accent transition-colors">حساب</button>
          <button className="relative hover:text-accent transition-colors">سبد <span className="text-accent">(۰)</span></button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[760px] w-full overflow-hidden bg-ink">
      <img src={heroImg} alt="HIR STUDIO" width={1600} height={1800} className="absolute inset-0 w-full h-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40" />
      <div className="relative z-10 h-full mx-auto max-w-[1600px] px-8 lg:px-14 flex flex-col justify-end pb-24 text-ivory">
        <div className="max-w-3xl reveal">
          <div className="text-[11px] tracking-[0.4em] uppercase mb-8 text-ivory/70">مجموعه‌ی زمستان ۱۴۰۴ — اشیای امضا</div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.05] text-balance text-ivory">
            پاسخی مینی‌مال
            <br />
            <em className="not-italic text-accent">به هیاهوی</em> جهان.
          </h1>
          <p className="mt-10 text-lg md:text-xl leading-loose text-ivory/80 max-w-xl">
            اشیایی که برای دیده شدن فریاد نمی‌زنند،
            <br /> اما برای ماندن ساخته شده‌اند.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a href="#collections" className="group inline-flex items-center gap-3 bg-ivory text-ink px-8 py-4 text-[12px] tracking-[0.3em] uppercase hover:bg-accent transition-colors duration-500">
              مشاهده مجموعه
              <span className="inline-block transition-transform duration-500 group-hover:-translate-x-1">←</span>
            </a>
            <a href="#story" className="group inline-flex items-center gap-3 text-ivory px-2 py-4 text-[12px] tracking-[0.3em] uppercase border-b border-ivory/40 hover:border-accent hover:text-accent transition-colors">
              داستان هیر
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-8 lg:left-14 flex items-center gap-6 text-[11px] tracking-[0.4em] text-ivory/60">
          <span className="text-accent">۰۱</span>
          <span className="w-12 h-px bg-ivory/30" />
          <span>۰۴</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["دست‌ساز در تهران", "چوب گردو ایرانی", "ادیشن محدود", "ارسال بدون پلاستیک", "ضمانت مادام‌العمر"];
  return (
    <div className="border-y border-border bg-background py-5 overflow-hidden">
      <div className="flex whitespace-nowrap marquee text-[12px] tracking-[0.4em] uppercase text-foreground/70">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="px-10 flex items-center gap-10">
            {t} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="relative py-32 lg:py-48 mx-auto max-w-[1600px] px-8 lg:px-14">
      <div className="grid lg:grid-cols-12 gap-16 items-end">
        <div className="lg:col-span-2 lg:order-1 order-2">
          <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50">— فصل اول</div>
        </div>
        <div className="lg:col-span-7 order-1">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-balance">
            طراحیِ بی‌زمان؛
            <br />
            <em className="not-italic text-walnut">برای کسانی</em> که زیبایی را
            <br /> در سادگیِ مطلق می‌جویند.
          </h2>
        </div>
        <div className="lg:col-span-3 order-3">
          <p className="text-base leading-loose text-foreground/70">
            تعادلی میان سکوتِ متریال و ظرافتِ خطوط. هر اثرِ HIR STUDIO با دست تراشیده می‌شود، آرام، صبور و با احترام به جنسِ چوب.
          </p>
          <div className="mt-8 h-px w-24 bg-accent" />
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section id="collections" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50 mb-4">— مجموعه‌های جدید</div>
            <h3 className="font-serif text-3xl md:text-5xl text-balance">
              تازه‌های مجموعهٔ <em className="not-italic text-walnut">حلقه‌ها</em>
            </h3>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-3 text-[12px] tracking-[0.3em] uppercase hover:text-accent transition-colors border-b border-foreground/30 pb-2">
            خرید همهٔ محصولات ←
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, delay }: { p: typeof products[number]; delay: number }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[4/5] bg-secondary overflow-hidden mb-6">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          width={900}
          height={1100}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase text-ink/60 bg-ivory/80 px-3 py-1.5">
          {p.tag}
        </div>
        <button className="absolute bottom-4 left-4 right-4 bg-ink text-ivory text-[11px] tracking-[0.3em] uppercase py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          افزودن به سبد
        </button>
      </div>
      <div className="flex items-baseline justify-between">
        <h4 className="font-serif text-xl leading-snug">{p.name}</h4>
      </div>
      <div className="mt-2 text-sm text-foreground/60 tabular-nums">{p.price} تومان</div>
    </article>
  );
}

function BestSellers() {
  return (
    <section className="relative bg-secondary py-32 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative">
          <div className="aspect-[5/6] relative overflow-hidden">
            <img src={mugsImg} alt="ماگ دست‌ساز" loading="lazy" width={1200} height={1400} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-5 lg:pr-12">
          <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50 mb-6">— پرفروش‌ترین‌ها</div>
          <h3 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-8">
            ماگ‌های
            <br />
            <em className="not-italic text-accent">دست‌ساز.</em>
          </h3>
          <p className="text-base leading-loose text-foreground/70 max-w-md mb-10">
            در جهانِ ماگ‌های هیر سفر کنید — هر فنجان، روایتی از چوب، آتش و دستِ سازنده‌اش است؛ همراهی آرام برای نوشیدنیِ محبوبِ شما.
          </p>
          <a href="#" className="inline-flex items-center gap-3 text-[12px] tracking-[0.3em] uppercase border-b border-foreground/40 hover:border-accent hover:text-accent transition-colors pb-2">
            ← خرید همهٔ ماگ‌ها
          </a>
        </div>
      </div>
    </section>
  );
}

function Craftsmanship() {
  return (
    <section id="craft" className="relative py-32 bg-ink text-ivory overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="text-[11px] tracking-[0.4em] uppercase text-accent mb-6">— صنعتگری</div>
          <h3 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 text-ivory">
            از تنهٔ درخت
            <br />
            <em className="not-italic text-accent">تا اثرِ امضا.</em>
          </h3>
          <p className="text-base leading-loose text-ivory/70 max-w-md mb-10">
            هر قطعه از HIR STUDIO، حاصلِ ساعت‌ها صبر است. چوب را می‌شناسیم، رگه‌هایش را می‌خوانیم و آرام شکل می‌دهیم. آنچه می‌مانَد، نه یک شی‌ء، که اثری‌ست با حافظه.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              ["۱۲", "گونهٔ چوب"],
              ["۴۸", "ساعت کار دستی"],
              ["∞", "ضمانت مادام‌العمر"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-4xl text-accent mb-2">{n}</div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-ivory/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="aspect-[7/5] overflow-hidden">
            <img src={craftImg} alt="صنعتگری" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Signature Creator ---------- */
const creatorQuestions = [
  { q: "مدرن یا کلاسیک؟", a: ["مدرن", "کلاسیک"] },
  { q: "مینیمال یا گرم？", a: ["مینیمال", "گرم"] },
  { q: "روشن یا تیره؟", a: ["روشن", "تیره"] },
  { q: "کاربردی یا تزئینی؟", a: ["کاربردی", "تزئینی"] },
  { q: "آرام یا جسور؟", a: ["آرام", "جسور"] },
];

function SignatureCreator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = step >= creatorQuestions.length;

  const pick = (ans: string) => {
    setAnswers((prev) => [...prev, ans]);
    setStep((s) => s + 1);
  };
  const reset = () => { setStep(0); setAnswers([]); };

  return (
    <section id="studio" className="relative py-32 bg-background">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50 mb-4">— تجربهٔ امضا</div>
            <h3 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
              HIR <em className="not-italic text-walnut">Signature Creator</em>
            </h3>
            <p className="mt-6 max-w-xl text-foreground/70 leading-loose">
              یک مشاورهٔ خصوصیِ طراحی، در پنج پرسشِ کوتاه. به سلیقه‌ات شکل می‌دهیم و پروفایلِ زیبایی‌شناسانهٔ ویژهٔ تو را می‌سازیم.
            </p>
          </div>
        </div>

        <div className="border border-border bg-card overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[520px]">
            <div className="relative bg-ink text-ivory p-12 lg:p-16 flex flex-col justify-between">
              <div className="text-[11px] tracking-[0.4em] uppercase text-ivory/60">
                {done ? "گزارش نهایی" : `پرسش ${toPersian(step + 1)} از ${toPersian(creatorQuestions.length)}`}
              </div>
              {!done ? (
                <h4 className="font-serif text-4xl md:text-5xl leading-[1.15] text-ivory">
                  {creatorQuestions[step].q}
                </h4>
              ) : (
                <h4 className="font-serif text-4xl md:text-5xl leading-[1.15] text-ivory">
                  پروفایل تو:
                  <br />
                  <em className="not-italic text-accent">{profileName(answers)}</em>
                </h4>
              )}
              <div className="flex gap-2">
                {creatorQuestions.map((_, i) => (
                  <span key={i} className={`h-px flex-1 transition-colors ${i < step ? "bg-accent" : "bg-ivory/20"}`} />
                ))}
              </div>
            </div>

            <div className="p-12 lg:p-16 flex flex-col justify-center gap-6">
              {!done ? (
                creatorQuestions[step].a.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => pick(opt)}
                    className="group text-right border border-border hover:border-accent hover:bg-accent/10 transition-all duration-500 p-8"
                  >
                    <div className="font-serif text-3xl mb-2">{opt}</div>
                    <div className="text-[11px] tracking-[0.3em] uppercase text-foreground/50 group-hover:text-accent transition-colors">
                      انتخاب کن ←
                    </div>
                  </button>
                ))
              ) : (
                <div>
                  <p className="text-foreground/70 leading-loose mb-8">
                    بر اساس پاسخ‌های شما، مجموعه‌ای متناسب با ذائقه‌تان از آرشیو HIR STUDIO آماده شده است. این یک پیشنهاد مشاورانه است، نه یک فهرست خرید.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {[p1, p2, p4].map((src, i) => (
                      <div key={i} className="aspect-square overflow-hidden bg-secondary">
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button onClick={reset} className="text-[11px] tracking-[0.3em] uppercase border-b border-foreground/40 hover:text-accent hover:border-accent pb-1">شروع دوباره</button>
                    <a href="#" className="bg-ink text-ivory text-[11px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-accent hover:text-ink transition-colors">مشاهدهٔ پیشنهاد →</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function toPersian(n: number) {
  return n.toLocaleString("fa-IR");
}
function profileName(a: string[]) {
  if (a.includes("کلاسیک") && a.includes("گرم")) return "روایتگرِ گرم";
  if (a.includes("تیره") && a.includes("جسور")) return "شب‌گردِ معاصر";
  if (a.includes("روشن") && a.includes("مینیمال")) return "سکوتِ سپید";
  return "مینیمالیستِ معاصر";
}

/* ---------- Build Your Own ---------- */
function BuildYourOwn() {
  const [size, setSize] = useState(18);
  const [wood, setWood] = useState("گردو");
  const [finish, setFinish] = useState("روغن طبیعی");
  const [engrave, setEngrave] = useState("");
  const [gift, setGift] = useState(false);

  const base = 2_800_000;
  const price =
    base +
    (size - 16) * 80_000 +
    (wood === "زبان‌گنجشک" ? 600_000 : wood === "آبنوس" ? 1_400_000 : 0) +
    (finish === "موم زنبور" ? 250_000 : 0) +
    (engrave ? 350_000 : 0) +
    (gift ? 450_000 : 0);

  return (
    <section className="relative py-32 bg-secondary">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50 mb-4">— استودیوی سفارش</div>
            <h3 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              اثرِ خود را
              <em className="not-italic text-walnut"> بسازید.</em>
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="aspect-square bg-background relative overflow-hidden">
            <img src={p1} alt="پیش‌نمایش زنده" className="absolute inset-0 w-full h-full object-cover transition-all duration-700" style={{ filter: `hue-rotate(${wood === "آبنوس" ? -20 : wood === "زبان‌گنجشک" ? 30 : 0}deg) brightness(${finish === "موم زنبور" ? 1.05 : 1})` }} />
            <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] uppercase bg-ivory/80 px-3 py-1.5">پیش‌نمایش زنده</div>
            {engrave && (
              <div className="absolute bottom-10 left-0 right-0 text-center font-serif text-2xl text-ivory mix-blend-difference">
                « {engrave} »
              </div>
            )}
          </div>

          <div className="space-y-10">
            <Field label={`اندازه — ${toPersian(size)} میلی‌متر`}>
              <input type="range" min={16} max={22} value={size} onChange={(e) => setSize(+e.target.value)} className="w-full accent-[color:var(--accent)]" />
            </Field>

            <Field label="گونهٔ چوب">
              <div className="flex gap-3 flex-wrap">
                {["گردو", "زبان‌گنجشک", "آبنوس"].map((w) => (
                  <Pill key={w} active={wood === w} onClick={() => setWood(w)}>{w}</Pill>
                ))}
              </div>
            </Field>

            <Field label="پرداخت سطح">
              <div className="flex gap-3 flex-wrap">
                {["روغن طبیعی", "موم زنبور", "مات"].map((f) => (
                  <Pill key={f} active={finish === f} onClick={() => setFinish(f)}>{f}</Pill>
                ))}
              </div>
            </Field>

            <Field label="حکاکی شخصی (اختیاری)">
              <input value={engrave} onChange={(e) => setEngrave(e.target.value.slice(0, 24))} placeholder="حداکثر ۲۴ کاراکتر" className="w-full bg-transparent border-b border-foreground/30 focus:border-accent outline-none py-3 font-serif text-xl" />
            </Field>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={gift} onChange={(e) => setGift(e.target.checked)} className="accent-[color:var(--accent)] w-4 h-4" />
              <span className="text-[12px] tracking-[0.2em] uppercase">جعبهٔ کادویی ویژه</span>
            </label>

            <div className="border-t border-border pt-8 flex items-center justify-between">
              <div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-foreground/50 mb-2">قیمتِ نهایی</div>
                <div className="font-serif text-4xl tabular-nums">{price.toLocaleString("fa-IR")} <span className="text-base">تومان</span></div>
              </div>
              <button className="bg-ink text-ivory text-[12px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-accent hover:text-ink transition-colors">
                افزودن به سبد
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.3em] uppercase text-foreground/60 mb-4">{label}</div>
      {children}
    </div>
  );
}
function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`px-5 py-2.5 text-[12px] tracking-[0.2em] uppercase border transition-all ${active ? "bg-ink text-ivory border-ink" : "border-foreground/30 hover:border-accent hover:text-accent"}`}>
      {children}
    </button>
  );
}

/* ---------- AI Room Stylist ---------- */
function RoomStylist() {
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>(roomImg);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    
    // ✅ اصلاح شده: متد مربوط به کلاینت فقط در صورت وجود window اجرا می‌شود تا از خطا در SSR جلوگیری شود.
    if (f && typeof window !== "undefined") {
      setPreview(URL.createObjectURL(f));
    }
    
    setAnalyzing(true);
    setDone(false);
    
    // ✅ اصلاح شده: شبیه‌ساز انیمیشن هوش مصنوعی با بررسی امن محیط window اجرا می‌شود.
    if (typeof window !== "undefined") {
      window.setTimeout(() => {
        setAnalyzing(false);
        setDone(true);
      }, 1800);
    }
  };

  return (
    <section className="relative py-32 bg-ink text-ivory overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-8">
            <div className="text-[11px] tracking-[0.4em] uppercase text-accent mb-4">— تجربهٔ معاصر</div>
            <h3 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ivory">
              AI Room Stylist —
              <br />
              <em className="not-italic text-accent">طرّاحِ خصوصیِ فضای شما.</em>
            </h3>
          </div>
          <div className="lg:col-span-4 text-ivory/70 leading-loose">
            یک عکس از اتاقتان بفرستید. فضا را تحلیل می‌کنیم و اشیای HIR را که با نور، رنگ و معماریِ شما هم‌نوا هستند پیشنهاد می‌دهیم.
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 relative aspect-[7/5] overflow-hidden border border-ivory/10">
            <img src={preview} alt="اتاق شما" className="absolute inset-0 w-full h-full object-cover" />
            {analyzing && (
              <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-3xl text-accent mb-3 animate-pulse">در حالِ تحلیل…</div>
                  <div className="text-[11px] tracking-[0.4em] uppercase text-ivory/60">رنگ • نور • معماری</div>
                </div>
              </div>
            )}
            {done && (
              <>
                <Hotspot top="40%" left="22%" label="گلدان منحنی" />
                <Hotspot top="65%" left="55%" label="کاسه راش" />
                <Hotspot top="30%" left="72%" label="ست ماگ" />
              </>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="border border-ivory/15 p-8">
              <div className="text-[11px] tracking-[0.4em] uppercase text-ivory/60 mb-4">آپلود عکس اتاق</div>
              <input ref={fileRef} onChange={onFile} type="file" accept="image/*" className="hidden" />
              <button onClick={() => fileRef.current?.click()} className="w-full border border-dashed border-ivory/30 hover:border-accent py-10 text-center transition-colors">
                <div className="font-serif text-2xl text-ivory mb-2">+ انتخاب تصویر</div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-ivory/50">JPG · PNG · حداکثر ۸MB</div>
              </button>
            </div>

            {done && (
              <div className="border border-ivory/15 p-8 space-y-5">
                <div className="text-[11px] tracking-[0.4em] uppercase text-accent">پیشنهادهای استایلیست</div>
                {products.slice(0, 3).map((p) => (
                  <div key={p.id} className="flex items-center gap-4 pb-5 border-b border-ivory/10 last:border-0 last:pb-0">
                    <div className="w-16 h-16 bg-ivory/5 overflow-hidden flex-shrink-0">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-serif text-lg text-ivory truncate">{p.name}</div>
                      <div className="text-[11px] text-ivory/60">پیشنهاد: کنار پیشخوان</div>
                    </div>
                    <button className="text-[11px] tracking-[0.3em] uppercase text-accent hover:text-ivory">افزودن</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Hotspot({ top, left, label }: { top: string; left: string; label: string }) {
  return (
    <div className="absolute" style={{ top, left }}>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping w-4 h-4" />
        <span className="relative block w-4 h-4 rounded-full bg-accent border-2 border-ivory" />
        <div className="absolute top-6 right-0 bg-ivory text-ink text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 whitespace-nowrap">
          {label}
        </div>
      </div>
    </div>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    { q: "هر بار نگاهش می‌کنم، چیزی تازه می‌بینم. سکوتِ یک شیء را HIR به من یاد داد.", a: "نگار — معمار، تهران" },
    { q: "بسته‌بندی، جنس، حسِ گرفتنش در دست — همه‌چیز یک اعلامِ ساده از کیفیت بود.", a: "آرش — طراح صنعتی" },
    { q: "اولین باری بود که خرید آنلاین برایم یک مراسم شد، نه یک معامله.", a: "مهسا — کیوریتور" },
  ];
  return (
    <section className="py-32 bg-background">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
        <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50 mb-12">— از زبانِ آنها</div>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {items.map((t, i) => (
            <figure key={i} className="space-y-8">
              <div className="text-accent font-serif text-5xl leading-none">”</div>
              <blockquote className="font-serif text-2xl leading-[1.6] text-balance text-foreground/90">
                {t.q}
              </blockquote>
              <figcaption className="text-[11px] tracking-[0.3em] uppercase text-foreground/50 pt-4 border-t border-border">
                {t.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Newsletter ---------- */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="py-32 bg-walnut/10 border-y border-border">
      <div className="mx-auto max-w-3xl px-8 text-center">
        <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50 mb-6">— نامهٔ استودیو</div>
        <h3 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-6 text-balance">
          آرام، فصلی، <em className="not-italic text-walnut">با احترام به وقتِ شما.</em>
        </h3>
        <p className="text-foreground/70 leading-loose mb-10">
          چهار نامه در سال؛ از کارگاه، از سفرها، از اشیای در حالِ ساخت.
        </p>
        {sent ? (
          <div className="font-serif text-2xl text-accent">کمپین فعال شد — اولین نامه به‌زودی به دستِ شما می‌رسد.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="نشانیِ ایمیلِ شما" className="flex-1 bg-background border border-border focus:border-accent outline-none px-5 py-4 text-base" />
            <button className="bg-ink text-ivory px-8 py-4 text-[12px] tracking-[0.3em] uppercase hover:bg-accent hover:text-ink transition-colors">عضویت</button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer id="contact" className="bg-ink text-ivory pt-24 pb-10">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-ivory/10">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl tracking-[0.3em] mb-6">HIR<span className="text-accent">·</span>STUDIO</div>
            <p className="text-ivory/70 max-w-sm leading-loose">
              استودیوی اشیای چوبی دست‌ساز، با تمرکز بر طراحیِ معاصر، صبر و احترام به متریال.
            </p>
          </div>
          {[
            { t: "خرید", l: ["حلقه‌ها", "ماگ‌ها", "گلدان‌ها", "اکسسوری"] },
            { t: "استودیو", l: ["داستان هیر", "صنعتگری", "کارگاه", "همکاری‌ها"] },
            { t: "خدمات", l: ["ارسال", "بازگشت", "ضمانت", "تماس"] },
          ].map((c) => (
            <div key={c.t} className="md:col-span-2">
              <div className="text-[11px] tracking-[0.3em] uppercase text-ivory/40 mb-5">{c.t}</div>
              <ul className="space-y-3 text-ivory/80">
                {c.l.map((x) => <li key={x}><a href="#" className="hover:text-accent transition-colors">{x}</a></li>)}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1 text-ivory/40 text-[11px] tracking-[0.3em] uppercase">
            تهران<br />ایران
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[11px] tracking-[0.3em] uppercase text-ivory/40">
          <div>© ۱۴۰۴ HIR STUDIO. تمام حقوق محفوظ است.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">Pinterest</a>
            <a href="#" className="hover:text-accent">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}