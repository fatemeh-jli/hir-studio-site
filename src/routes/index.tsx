import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

import bowlFrontImg from "../../assets/bowl-front.png";
import bowlTopImg from "../../assets/bowl-top.png";

import walnutTexture from "../../assets/walnut.jpg";
import ashTexture    from "../../assets/ash.jpg";
import ebonyTexture  from "../../assets/ebony.jpg";

import heroImg from "../../assets/hero-rings.jpg";

import hirLogoImg from "../../assets/HirLogo.png";

import p1 from "../../assets/ptoduct-1.jpg";
import p2 from "../../assets/ptoduct-2.jpg";
import p3 from "../../assets/ptoduct-3.jpg";
import p4 from "../../assets/ptoduct-4.jpg";

import craftImg from "../../assets/craft.jpg";
import mugsImg from "../../assets/mugs.jpg";
import roomImg from "../../assets/room.jpg";

import hirFa from "../../assets/hir-farsi.png";
import bowlImg from "../../assets/bowl-top.png";
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

import medad from "../../assets/1medad.png";
import darchin from "../../assets/6darchin.png";
import ring from "../../assets/11ring.png";
import nahang from "../../assets/16nahang.png";
import gerdoo from "../../assets/21gerdoo.png";
import dayere from "../../assets/26dayere.png";
import senjed from "../../assets/31senjed.png";




import brownImg from "../../assets/brown.jpg";
import orangeImg from "../../assets/orange.jpg";
import greenImg from "../../assets/green.jpg";
import blueImg from "../../assets/blue.jpg";



const products = [
  { id: 1, name: "مداد چوبی", price: "۸۵۰٬۰۰۰", img: medad, tag: "قلم" },
  { id: 2, name: "دارچین", price: "۱٬۲۰۰٬۰۰۰", img: darchin, tag: "آشپزخانه" },
  { id: 3, name: "گزّه", price: "۲٬۸۰۰٬۰۰۰", img: ring, tag: "حلقه" },
  { id: 4, name: "نهنگ", price: "۳٬۴۰۰٬۰۰۰", img: nahang, tag: "آشپزخانه" },
  { id: 5, name: "گردو", price: "۴٬۲۰۰٬۰۰۰", img: gerdoo, tag: "کاسه" },
  { id: 6, name: "دایره", price: "۲٬۱۰۰٬۰۰۰", img: dayere, tag: "تزئینی" },
  { id: 7, name: "سنجد", price: "۳٬۶۰۰٬۰۰۰", img: senjed, tag: "کاسه" },
];

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Nav />

      {/* shared scroll-linked bowl layer */}
      
      <Hero />
      <Marquee />
      <StoryGrid />
      <Collections />
      <Craftsmanship />
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
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.85);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14 h-20 flex items-center justify-between relative">

        {/* LOGO AREA (راست) */}
        <a
          href="/"
          className={`flex items-center gap-4 transition-all duration-500 ${
            searchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* مونوگرام اصلی — همیشه در راست‌ترین نقطه */}
          <img
            src={scrolled ? "/assets/HirLogo.png" : "/assets/whiteHirLogo.png"}
            className="h-9 w-auto object-contain transition-all duration-700"
            alt="hir logo"
          />

          {/* متن — سمت چپِ مونوگرام، بدون فشردگی */}
          {!scrolled ? (
            <img
              src="/assets/hir-farsi.png"
              className="h-9 w-auto object-contain"
              alt="hir farsi"
            />
          ) : (
            <span className="font-serif text-xl tracking-[0.25em] text-foreground whitespace-nowrap">
              HIR<span className="text-accent">·</span>STUDIO
            </span>
          )}
        </a>

        {/* MENU (وسط) */}
        <nav
          className={`hidden md:flex items-center gap-10 text-[12px] tracking-[0.25em] uppercase text-foreground/80 transition-all duration-500 ${
            searchOpen || !scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <a href="#collections">مجموعه</a>
          <a href="#craft">فلسفه هیر</a>
          <a href="#studio">استودیو</a>
          <a href="#contact">تماس</a>
        </nav>

        {/* ICONS & EXPANDABLE SEARCH (چپ) */}
        <div className="flex items-center justify-end flex-1 md:flex-none gap-6 relative">
          
          {/* باکس شیشه‌ای سرچ کشویی */}
          <div
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-12 rounded-xl transition-all duration-500 ease-out flex items-center px-4 overflow-hidden border border-white/10 ${
              searchOpen
                ? "w-[320px] md:w-[450px] lg:w-[600px] bg-white/10 backdrop-blur-2xl opacity-100"
                : "w-0 opacity-0 pointer-events-none border-transparent"
            }`}
          >
            <input
              autoFocus={searchOpen}
              placeholder="جستجوی اشیای هیر..."
              className="w-full bg-transparent text-foreground placeholder-foreground/40 text-sm focus:outline-none pr-8 text-right"
            />
            
            {/* دکمه بستن داخل باکس شیشه‌ای */}
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute left-4 text-foreground/60 hover:text-foreground text-xs cursor-pointer transition-colors"
            >
              ✕
            </button>
          </div>

          {/* آیکون‌ها */}
          <div
            className={`flex items-center gap-6 transition-all duration-500 ${
              scrolled ? "text-foreground" : "text-ivory"
            } ${searchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            {/* SEARCH TRIGGER */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hover:text-accent transition-colors cursor-pointer"
              aria-label="جستجو"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* PROFILE */}
            <Link to="/auth/login" className="hover:text-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </Link>

            {/* CART */}
            <Link to="/cart" className="relative hover:text-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span className="absolute -top-1 -left-1 w-3.5 h-3.5 rounded-full bg-accent text-ink text-[8px] flex items-center justify-center">
                ۰
              </span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}


function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function Hero() {
  const { scrollY } = useScroll();
const rotateZ = useTransform(
  scrollY,
  [0, 700],
  [0, 10]
);

const bowlY = useTransform(
  scrollY,
  [0, 800],
  [0, -10]
);

const scale = useTransform(
  scrollY,
  [0, 10000],
  [1.15, 0.95]
);

  return (
    <section
      id="hero-section"
      className="relative h-screen min-h-[700px] overflow-hidden bg-ink"
    >
      {/* ambient glow */}
      <div
        className="
          absolute
          left-[-10%]
          top-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-accent/10
          blur-[180px]
          pointer-events-none
        "
      />

      {/* overlays */}

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink/20 pointer-events-none" />

      {/* bowl */}
      <motion.img
  src={bowlImg}
  alt="HIR Bowl"
  style={{
    rotateZ,
    y: bowlY,
    scale,
  }}
  className="
    absolute
    left-[-12%]
    top-[60%]
    -translate-y-1/2
    w-[58vw]
    max-w-[1150px]
    z-[5]
    pointer-events-none
    select-none
    will-change-transform
    drop-shadow-[0_70px_140px_rgba(0,0,0,0.35)]
  "
/>
      {/* content */}
      <div className="relative z-10 h-full mx-auto max-w-[1600px] px-8 lg:px-14 flex flex-col justify-end pb-24">
        <div className="max-w-2xl mr-0 ml-auto text-ivory">

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.4,
            }}
            className="
              font-serif
              text-5xl
              md:text-7xl
              lg:text-[96px]
              leading-[1.02]
              text-balance
            "
          >
            پاسخی{" "}
            <em className="not-italic text-accent">
              مینیمال
            </em>
            <br />
            به هیاهوی جهان.
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 1.2,
            }}
            className="
              mt-10
              text-lg
              md:text-xl
              leading-loose
              text-ivory/80
              max-w-xl
            "
          >
            اشیایی که برای دیده شدن فریاد نمی‌زنند،
            <br />
            اما برای ماندن ساخته شده‌اند.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <a
              href="#collections"
              className="
                group
                inline-flex
                items-center
                gap-3
                bg-ivory
                text-ink
                px-8
                py-4
                text-[12px]
                tracking-[0.3em]
                uppercase
                hover:bg-accent
                transition-colors
                duration-500
              "
            >
              مشاهده مجموعه

              <span className="inline-block transition-transform duration-500 group-hover:-translate-x-1">
                ←
              </span>
            </a>

            <a
              href="#story"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-ivory
                px-2
                py-4
                text-[12px]
                tracking-[0.3em]
                uppercase
                border-b
                border-ivory/40
                hover:border-accent
                hover:text-accent
                transition-colors
              "
            >
              داستان هیر
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "دست‌ساز در تهران",
    "چوب گردو ایرانی",
    "ادیشن محدود",
    "ارسال بدون پلاستیک",
    "ضمانت مادام‌العمر",
  ];

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
const storyCards = [
  {
    title: "مجموعه",
    desc: "آثار فصلی، محدود و دست‌ساز",
    img: p2,
    href: "#collections",
  },
  {
    title: "فلسفه هیر",
    desc: "از تنهٔ درخت تا اثرِ امضا",
    img: craftImg,
    href: "#craft",
  },
  {
    title: "استودیو",
    desc: "سفارش شخصی، طراحی با شما",
    img: p1,
    href: "#studio",
  },
  {
    title: "داستانِ هیر",
    desc: "فلسفه‌ای که پشتِ هر اثر است",
    img: mugsImg,
    href: "#story",
  },
];

import { Link } from "@tanstack/react-router";

import firstImg from "../../assets/first3layer.jpg";
import secondImg from "../../assets/second3layer.webp";
import thirdImg from "../../assets/third3layer.jpg";

function StoryGrid() {
  const sections = [
    {
      title: "مجموعه‌ها",
      desc: "آرشیو اشیای هیر",
      href: "#collections",
      img: firstImg,
    },
    {
      title: "داستان هیر",
      desc: "چرا هیر شکل گرفت",
      href: "#craft",
      img: secondImg,
    },
    {
      title: "استودیو",
      desc: "طراحی شخصی شما",
      href: "#studio",
      img: thirdImg,
    },
  ];

  return (
    <section id="story" className="py-20 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-14">

        {/* HEADER (همون حالت خودت) */}
        <div className="text-right mb-10">
 <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50 mb-4">
            — آنچه می‌سازیم
            </div>
            <h3 className="font-serif text-3xl md:text-5xl">
               سه لحظه از خلق <em className="not-italic text-walnut">هـیر</em>
            </h3>
          </div>


        {/* CARDS ROW */}
<div className="flex justify-center gap-3 overflow-x-auto pb-6 scroll-smooth">          <div className="flex-shrink-0 w-6 md:w-20" />

          {sections.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="
                group relative flex-shrink-0
                w-[300x] md:w-[340px]
                aspect-[3/4]
                overflow-hidden
                rounded-xl
                transition-transform duration-300
                hover:scale-[1.02]
              "
            >
              <img
                src={s.img}
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700 group-hover:scale-105
                "
              />

<div
  className="
    absolute inset-0
    bg-gradient-to-t
    from-black/90
    via-black/25
    to-black/5
  "
/>
              <div className="absolute bottom-0 inset-x-0 p-3 text-right">

                <h3 className="font-serif text-[14px] text-white/90 mb-1">
                  {s.title}
                </h3>

                <p className="text-[10px] text-white/60">
                  {s.desc}
                </p>

              </div>
            </a>
          ))}

          <div className="flex-shrink-0 w-6 md:w-20" />

        </div>
      </div>
    </section>
  );
}


function Collections() {
  return (
    <section id="collections" className="relative bg-secondary overflow-hidden">

      {/* هدر */}
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14 pt-24 pb-12">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50 mb-4">
              — مجموعه‌های جدید
            </div>
            <h3 className="font-serif text-3xl md:text-5xl">
              آفرینه‌های <em className="not-italic text-walnut">هـیر</em>
            </h3>
          </div>

          <a
            href="#"
            className="hidden md:inline-flex items-center gap-3 text-[12px] tracking-[0.3em] uppercase
            border-b border-foreground/20 pb-2 hover:text-foreground transition"
          >
            خرید همهٔ محصولات ←
          </a>
        </div>
      </div>

      {/* میز نمایشگاهی */}
      <div
        className="flex overflow-x-auto pb-24 pt-6 cursor-grab active:cursor-grabbing"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          gap: "14px",
        }}
      >
        <div className="flex-shrink-0 w-[6vw] lg:w-[calc((100vw-1600px)/2)]" />

        {products.map((p) => (
          <ProductItem key={p.id} p={p} />
        ))}

        <div className="flex-shrink-0 w-[6vw] lg:w-[calc((100vw-1600px)/2)]" />
      </div>
    </section>
  );
}

function ProductItem({ p }: { p: any }) {

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = cart.find((i: any) => i.id === p.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: p.id,
        name: p.name,
        price: p.price,
        qty: 1,
        image: p.img,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cart_updated"));
  };

  return (
    <article
      className="group flex-shrink-0"
      style={{
        width: "clamp(190px, 20vw, 300px)",
        scrollSnapAlign: "start",
      }}
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/5] mb-4">
        <img
          src={p.img}
          alt={p.name}
          className="
            absolute inset-0 w-full h-full
            object-contain
            transition-transform duration-[2000ms] ease-out
            group-hover:scale-[1.03]
          "
          style={{
            padding: "10px 6px",
            filter: "drop-shadow(0 14px 18px rgba(0,0,0,0.08))",
          }}
        />
      </div>

    <div className="flex items-center justify-center gap-6 px-2">
  
  {/* NAME */}
  <h4 className="font-serif text-[15px] text-foreground/85 truncate text-center">
    {p.name}
  </h4>

  {/* PRICE */}
  <div className="text-[11px] text-foreground/50 whitespace-nowrap">
    {p.price.toLocaleString("fa-IR")} تومان
  </div>

  {/* BUTTON */}
  <button
    onClick={addToCart}
    className="w-5 h-5 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10"
  >
    +
  </button>

</div>
    </article>
  );
}


function Craftsmanship() {
  const cards = [
    {
      image: brownImg,
      color: "text-[#B38A62]",
      title: "چوبی که",
      subtitle: "با زمان\nزیباتر می‌شود.",
      hover:
        "برخلاف بسیاری از متریال‌ها،\nچوب با گذر زمان شخصیت پیدا می‌کند.\nهر رگه، ادامهٔ داستان همان درخت است.",
      translate: "",
    },
    {
      image: greenImg,
      color: "text-[#7E8E66]",
      title: "کمتر،",
      subtitle: "اما ماندگار.",
      hover:
        "وقتی چیزی برای سال‌ها کنار شما می‌ماند،\nکمتر جایگزین می‌شود،\nکمتر دور انداخته می‌شود\nو ارزش انتخابش بیشتر می‌شود.",
      translate: "lg:translate-y-8",
    },
    {
      image: blueImg,
      color: "text-[#7E94A8]",
      title: "برای لمس،",
      subtitle: "نه فقط تماشا.",
      hover:
        "ما دکور نمی‌سازیم.\nچیزهایی می‌سازیم\nکه هر روز\nبخشی از زندگی باشند.",
      translate: "lg:translate-y-2",
    },
    {
      image: orangeImg,
      color: "text-[#D19A63]",
      title: "هر رگه،",
      subtitle: "یک داستان.",
      hover:
        "هیچ دو تکه چوب\nکاملاً شبیه هم نیستند.\nبرای همین،\nهیچ اثر هیر دقیقاً شبیه دیگری نیست.",
      translate: "lg:translate-y-12",
    },
  ];

  return (
    <section
      id="craft"
      className="relative overflow-hidden bg-ink py-32"
    >
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
        {/* Heading */}

        <div className="max-w-2xl mb-24">

          <div className="text-[11px] uppercase tracking-[0.45em] text-accent mb-6">
            — فلسفه هیر
          </div>

          <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] text-ivory">
            چیزهایی که
            <br />
            <span className="text-accent">
              ارزش ماندن دارند.
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-lg leading-loose text-ivory/70">

            هیر به معنای ارزشمندترین بخش چوب در فارسی کهن،
            <br />
            بر این باور شکل گرفت که وسایل روزمره تنها برای استفاده ساخته
            نمی‌شوند؛
            <br />
            آن‌ها می‌توانند بخشی از هویت خانه باشند.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">

          {cards.map((card) => (

            <article
              key={card.title}
              className={`group ${card.translate}`}
            >

              <div className="relative aspect-[0.74] overflow-hidden rounded-[28px]">

                {/* Image */}

                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    absolute inset-0
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.08]
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/20
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:from-black/90
                  "
                />

                {/* Content */}

                <div className="absolute inset-0 flex flex-col justify-end p-7">

                  {/* Colored line */}

                  <div
                    className={`
                      mb-6
                      h-[1px]
                      w-8
                      bg-current
                      transition-all
                      duration-700
                      group-hover:w-16
                      ${card.color}
                    `}
                  />

                  {/* Title */}

                  <h3
                    className={`
                      font-serif
                      text-2xl
                      leading-tight
                      whitespace-pre-line
                      transition-all
                      duration-500
                      group-hover:-translate-y-3
                      ${card.color}
                    `}
                  >
                    {card.title}
                    <br />
                    {card.subtitle}
                  </h3>

                  {/* Hover text */}

                  <p
                    className="
                      mt-5
                      whitespace-pre-line
                      text-sm
                      leading-7
                      text-white/75
                      opacity-0
                      translate-y-6
                      transition-all
                      duration-700
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {card.hover}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Craftsmanship;
/* ---------- Signature Creator ---------- */
const creatorQuestions = [
  { q: "مدرن یا کلاسیک؟", a: ["مدرن", "کلاسیک"] },
  { q: "مینیمال یا گرم？", a: ["مینیمال", "گرم"] },
  { q: "روشن یا تیره؟", a: ["روشن", "تیره"] },
  { q: "کاربردی یا تزئینی؟", a: ["کاربردی", "تزئینی"] },
  { q: "آرام یا جسور؟", a: ["آرام", "جسور"] },
];



function toPersian(n: number) {
  return n.toLocaleString("fa-IR");
}
function profileName(a: string[]) {
  if (a.includes("کلاسیک") && a.includes("گرم")) return "روایتگرِ گرم";
  if (a.includes("تیره") && a.includes("جسور")) return "شب‌گردِ معاصر";
  if (a.includes("روشن") && a.includes("مینیمال")) return "سکوتِ سپید";
  return "مینیمالیستِ معاصر";
}

/* ════════════════════════════════════════════════════════════════
   BUILD YOUR OWN — نسخه‌ی صادقانه: بدون شبیه‌سازی شکل دروغین.
   به‌جای SVG انتزاعی، قاب عکس واقعی + کارت خلاصه‌ی متنی زنده.
   سواچ‌های چوب از عکس بافت واقعی (walnut.jpg / ash.jpg / ebony.jpg).
════════════════════════════════════════════════════════════════ */

const buildableProducts = [
  { id: "bowl",  label: "کاسه",          sub: "برای میز و سرو",        icon: "bowl",  sizeRange: [14, 28] as [number, number], sizeUnit: "سانتی‌متر",                 sizeDefault: 20, basePrice: 2_800_000, pricePerUnit: 60_000 },
  { id: "clock", label: "ساعت رومیزی",   sub: "برای میز کار یا قفسه",  icon: "clock", sizeRange: [15, 25] as [number, number], sizeUnit: "سانتی‌متر",                 sizeDefault: 18, basePrice: 3_600_000, pricePerUnit: 90_000 },
  { id: "ring",  label: "انگشتر",        sub: "حلقه‌ی دست‌ساز",        icon: "ring",  sizeRange: [15, 22] as [number, number], sizeUnit: "میلی‌متر (قطر داخلی)",      sizeDefault: 18, basePrice: 1_400_000, pricePerUnit: 25_000 },
  { id: "vase",  label: "گلدان",         sub: "برای فضای داخلی",       icon: "vase",  sizeRange: [18, 40] as [number, number], sizeUnit: "سانتی‌متر",                 sizeDefault: 26, basePrice: 3_200_000, pricePerUnit: 70_000 },
];
type ProductId = typeof buildableProducts[number]["id"];

// گونه‌های چوب — سواچ از عکس بافت واقعی، نه رنگ تخت
const woodTypes = [
  { id: "walnut",  label: "گردو",         desc: "رگه‌های تیره و موج‌دار؛ گرم‌ترین و رایج‌ترین انتخاب در آثار هیر.",         img: walnutTexture, priceDelta: 0 },
  { id: "sparrow", label: "زبان‌گنجشک",  desc: "روشن و طلایی با گره‌های طبیعی فراوان؛ هر قطعه‌اش بی‌نظیره.",            img: ashTexture,    priceDelta: 600_000 },
  { id: "ebony",   label: "آبنوس",        desc: "تیره و یکدست، سنگین‌ترین و کمیاب‌ترین چوب در مجموعه‌ی ما.",             img: ebonyTexture,  priceDelta: 1_400_000 },
];

const buildFinishes = [
  { id: "oil",   label: "روغن طبیعی",        desc: "حس و رنگ طبیعی چوب حفظ می‌شود؛ مات و گرم.",                  priceDelta: 0 },
  { id: "wax",   label: "موم زنبور",          desc: "درخشش ملایم می‌دهد و در برابر رطوبت محافظت بیشتری دارد.",     priceDelta: 250_000 },
  { id: "matte", label: "ساده / بدون پرداخت", desc: "سطحی کاملاً خام و طبیعی، بدون هیچ روکشی.",                    priceDelta: -100_000 },
];

const grainOptions = [
  { id: "with",    label: "با گره‌های طبیعی", desc: "ظاهر خام‌تر و یگانه‌تر؛ هر قطعه با دیگری فرق دارد." },
  { id: "without", label: "بدون گره (صاف)",   desc: "سطحی یکدست‌تر و مرتب‌تر، مناسب فضاهای مینیمال." },
];

const engraveSuggestions = ["برای کسی که می‌ماند", "۱۴۰۴", "با عشق، برای خانه", "سکوتِ ماندگار", "هدیه‌ای از جنسِ زمان"];

/* ---------- Build Your Own ---------- */
function BuildYourOwn() {
  const [stage, setStage] = useState<"pick" | "customize">("pick");
  const [productId, setProductId] = useState<ProductId>("bowl");
  const product = buildableProducts.find((p) => p.id === productId)!;

  const [size, setSize] = useState(product.sizeDefault);
  const [woodId, setWoodId] = useState("walnut");
  const [finishId, setFinishId] = useState("oil");
  const [grainId, setGrainId] = useState("with");
  const [engrave, setEngrave] = useState("");
  const [gift, setGift] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const wood = woodTypes.find((w) => w.id === woodId)!;
  const finish = buildFinishes.find((f) => f.id === finishId)!;

  const price =
    product.basePrice +
    (size - product.sizeRange[0]) * product.pricePerUnit +
    wood.priceDelta +
    finish.priceDelta +
    (engrave ? 350_000 : 0) +
    (gift ? 450_000 : 0);

  function selectProduct(id: ProductId) {
    const p = buildableProducts.find((x) => x.id === id)!;
    setProductId(id);
    setSize(p.sizeDefault);
    setStage("customize");
  }

  const summarySentence = `${product.label}ای در اندازه‌ی ${toPersian(size)} ${product.sizeUnit}، از چوب ${wood.label}، با پرداخت ${finish.label}${grainId === "without" ? " و سطحی صاف بدون گره" : ""}${engrave ? `، با حکاکیِ «${engrave}»` : ""}${gift ? "، در جعبه‌ی کادویی ویژه" : ""}.`;

  return (
    <section className="relative py-32 bg-warm-mid">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
<div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-foreground/50 mb-4">— استودیوی سفارش</div>
            <h3 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              اثرِ خود را
              <em className="not-italic text-walnut"> بسازید.</em>
            </h3>
          </div>
          {stage === "customize" && (
            <button onClick={() => setStage("pick")} className="text-[11px] tracking-[0.3em] uppercase text-foreground/50 hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-1">
              ← تغییر محصول
            </button>
          )}
        </div>
        </div>

        {stage === "pick" && (
          <div>
            <p className="text-foreground/60 mb-10 max-w-lg leading-loose">
              اول انتخاب کن چه اثری می‌خواهی بسازی. هر محصول، اندازه‌ها و گزینه‌های شخصی‌سازیِ مخصوصِ خودش را دارد.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {buildableProducts.map((p) => (
                <button key={p.id} onClick={() => selectProduct(p.id)} className="group text-right border border-border bg-background hover:border-accent hover:bg-accent/5 transition-all duration-500 p-7 flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <ProductIcon id={p.icon} />
                  </div>
                  <div>
                    <div className="font-serif text-2xl mb-1">{p.label}</div>
                    <div className="text-[12px] text-foreground/50">{p.sub}</div>
                  </div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-foreground/40 group-hover:text-accent transition-colors mt-2">
                    از {toPersian(p.basePrice)} تومان ←
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {stage === "customize" && (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 lg:sticky lg:top-28">
              {/* یک کارت خلاصهٔ واحد — بدون ادعای عکس، تمرکز روی توضیح زنده */}
              <div className="bg-ink text-ivory p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-full bg-ivory/10 flex items-center justify-center text-accent flex-shrink-0">
                    <ProductIcon id={product.icon} />
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/40">{product.label}</div>
                </div>

                <div className="text-[10px] tracking-[0.3em] uppercase text-accent/80 mb-4">خلاصهٔ سفارش شما</div>
                <p className="font-serif text-2xl lg:text-3xl leading-[1.65] text-ivory/95 text-balance">
                  {summarySentence}
                </p>

                <div className="flex items-center gap-3 mt-8 pt-7 border-t border-ivory/10">
                  <span className="w-10 h-10 rounded-sm overflow-hidden border border-ivory/20 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${wood.img})` }} />
                  <span className="text-[11px] text-ivory/50 tracking-wide leading-relaxed">
                    بافتِ واقعیِ چوبِ انتخابی شما — تصویر نهاییِ اثر پس از تأیید سفارش برایتان ارسال می‌شود.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <Field label={`اندازه — ${toPersian(size)} ${product.sizeUnit}`}>
                <input type="range" min={product.sizeRange[0]} max={product.sizeRange[1]} value={size} onChange={(e) => setSize(+e.target.value)} className="w-full accent-[color:var(--accent)]" />
                <div className="flex justify-between text-[10px] text-foreground/40 mt-2 tracking-wide">
                  <span>{toPersian(product.sizeRange[0])}</span>
                  <span>{toPersian(product.sizeRange[1])}</span>
                </div>
              </Field>

              {/* گونهٔ چوب — سواچ مربعی کوچک با عکس بافت واقعی */}
              <Field label="گونهٔ چوب">
                <div className="space-y-3">
                  {woodTypes.map((w) => (
                    <button key={w.id} onClick={() => setWoodId(w.id)} className={`w-full flex items-center gap-4 p-4 border text-right transition-all ${woodId === w.id ? "border-ink bg-ink/[0.03]" : "border-border hover:border-accent/50"}`}>
                      {/* سواچ مربعی با عکس بافت واقعی چوب — گرد گوشه‌ی ظریف */}
                      <span
                        className="w-12 h-12 rounded-md flex-shrink-0 border border-black/10 bg-cover bg-center shadow-sm"
                        style={{ backgroundImage: `url(${w.img})` }}
                      />
                      <span className="flex-1 min-w-0">
                        <span className="flex items-center gap-2">
                          <span className="font-serif text-lg">{w.label}</span>
                          {w.priceDelta !== 0 && <span className="text-[10px] text-foreground/40">+{toPersian(w.priceDelta)} تومان</span>}
                        </span>
                        <span className="block text-[12px] text-foreground/50 mt-0.5 leading-snug">{w.desc}</span>
                      </span>
                      {woodId === w.id && <span className="text-accent text-sm flex-shrink-0">✓</span>}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="پرداخت سطح">
                <div className="space-y-3">
                  {buildFinishes.map((f) => (
                    <button key={f.id} onClick={() => setFinishId(f.id)} className={`w-full text-right p-4 border transition-all ${finishId === f.id ? "border-ink bg-ink/[0.03]" : "border-border hover:border-accent/50"}`}>
                      <span className="flex items-center justify-between">
                        <span className="font-serif text-lg">{f.label}</span>
                        {f.priceDelta !== 0 && <span className="text-[10px] text-foreground/40">{f.priceDelta > 0 ? "+" : ""}{toPersian(f.priceDelta)} تومان</span>}
                      </span>
                      <span className="block text-[12px] text-foreground/50 mt-1 leading-snug">{f.desc}</span>
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="بافتِ سطح">
                <div className="grid grid-cols-2 gap-3">
                  {grainOptions.map((g) => (
                    <button key={g.id} onClick={() => setGrainId(g.id)} className={`text-right p-4 border transition-all ${grainId === g.id ? "border-ink bg-ink/[0.03]" : "border-border hover:border-accent/50"}`}>
                      <span className="font-serif text-base block mb-1">{g.label}</span>
                      <span className="text-[11px] text-foreground/50 leading-snug block">{g.desc}</span>
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="حکاکی شخصی (اختیاری)">
                <input value={engrave} onChange={(e) => setEngrave(e.target.value.slice(0, 28))} placeholder="حداکثر ۲۸ کاراکتر" className="w-full bg-transparent border-b border-foreground/30 focus:border-accent outline-none py-3 font-serif text-xl" />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] text-foreground/40">{toPersian(engrave.length)} / ۲۸</span>
                  <button type="button" onClick={() => setShowSuggestions((s) => !s)} className="text-[10px] tracking-[0.2em] uppercase text-accent hover:text-ink transition-colors">✦ پیشنهاد متن</button>
                </div>
                {showSuggestions && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {engraveSuggestions.map((s) => (
                      <button key={s} onClick={() => { setEngrave(s.slice(0, 28)); setShowSuggestions(false); }} className="text-[11px] px-3 py-1.5 bg-background border border-border hover:border-accent hover:text-accent transition-colors">{s}</button>
                    ))}
                  </div>
                )}
              </Field>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={gift} onChange={(e) => setGift(e.target.checked)} className="accent-[color:var(--accent)] w-4 h-4" />
                <span className="text-[12px] tracking-[0.2em] uppercase">جعبهٔ کادویی ویژه</span>
              </label>

              <div className="border-t border-border pt-8 flex items-center justify-between">
                <div>
                  <div className="text-[11px] tracking-[0.3em] uppercase text-foreground/50 mb-2">قیمتِ نهایی</div>
                  <div className="font-serif text-4xl tabular-nums">{toPersian(price)} <span className="text-base">تومان</span></div>
                </div>
                <button className="bg-ink text-ivory text-[12px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-accent hover:text-ink transition-colors flex-shrink-0">افزودن به سبد</button>
              </div>
            </div>
          </div>
        )}
    </section>
  );
}

function ProductIcon({ id }: { id: string }) {
  const common = { width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", stroke: "currentColor", strokeWidth: 1.4 } as const;
  if (id === "bowl")  return (<svg {...common}><path d="M3 11 Q13 18 23 11" /><ellipse cx="13" cy="11" rx="10" ry="3.4" /></svg>);
  if (id === "clock") return (<svg {...common}><circle cx="13" cy="13" r="9.5" /><path d="M13 8v5l3.5 2" /></svg>);
  if (id === "ring")  return (<svg {...common}><circle cx="13" cy="13" r="7" /><circle cx="13" cy="13" r="4" /></svg>);
  return (<svg {...common}><path d="M9 6 Q8 12 10 15 Q8 19 11 22 H15 Q18 19 16 15 Q18 12 17 6 Z" /></svg>);
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
/* ---------- AI Room Stylist (REDESIGNED) ---------- */
function RoomStylist() {
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setDone(false);
    setAnalyzing(true);

    setTimeout(() => {
      setAnalyzing(false);
      setDone(true);
    }, 1800);
  };

  return (
    <section className="relative min-h-screen bg-ink text-ivory overflow-hidden" dir="rtl">

      <div className="flex flex-row-reverse min-h-screen">

        {/* IMAGE - 1/4 WIDTH FULL HEIGHT */}
        <div className="w-1/4 hidden lg:block relative">
          <div className="absolute inset-0 overflow-hidden border-l border-ivory/10">
            <img
              src={preview || roomImg}
              className="w-full h-full object-cover scale-105"
              alt="room"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-ink/90 to-transparent" />
          </div>
        </div>

        {/* UI - 3/4 WIDTH */}
        <div className="w-full lg:w-3/4 px-8 lg:px-16 py-20 space-y-12">

          {/* HEADER */}
          <div className="text-right max-w-2xl ml-auto">
            <div className="text-[11px] tracking-[0.4em] uppercase text-accent mb-4">
              — تجربهٔ معاصر
            </div>

            <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] mb-6">
              طراح خصوصی
              <br />
              <span className="text-accent">فضای شما</span>
            </h2>

            <p className="text-ivory/60 leading-loose">
              تصویر اتاق را ارسال کنید تا نور، رنگ و فرم فضا تحلیل شود
              و پیشنهادهای هماهنگ دریافت کنید.
            </p>
          </div>

          {/* UPLOAD */}
          <Field label="آپلود تصویر">
            {!preview && (
              <div className="border border-dashed border-ivory/20 hover:border-accent transition p-12 text-center">
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={onFile}
                  className="hidden"
                />

                <button onClick={() => fileRef.current?.click()}>
                  <div className="font-serif text-3xl mb-2">
                    انتخاب تصویر اتاق
                  </div>
                  <div className="text-[11px] tracking-[0.3em] text-ivory/50">
                    JPG · PNG · حداکثر ۸MB
                  </div>
                </button>
              </div>
            )}

            {preview && (
              <div className="relative aspect-[4/3] overflow-hidden border border-ivory/10">
                <img
                  src={preview}
                  className="w-full h-full object-cover"
                />

                {analyzing && (
                  <div className="absolute inset-0 bg-ink/70 flex items-center justify-center">
                    <div className="text-accent font-serif text-2xl animate-pulse">
                      در حال تحلیل…
                    </div>
                  </div>
                )}
              </div>
            )}
          </Field>

          {/* STEPS */}
          <Field label="مراحل">
            <div className="space-y-3">
              {[
                ["01", "ارسال تصویر"],
                ["02", "تحلیل فضا"],
                ["03", "پیشنهاد"],
              ].map(([n, t]) => (
                <div
                  key={n}
                  className="border border-ivory/10 p-4 flex justify-between"
                >
                  <span className="text-accent font-serif">{n}</span>
                  <span className="text-ivory/70 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </Field>

          {/* RESULT */}
          {done && (
            <Field label="تحلیل فضا">
              <div className="border border-ivory/10 p-6 space-y-2">
                <div>سبک: مینیمال معاصر</div>
                <div>نور: طبیعی گرم</div>
                <div>پالت: چوب • بژ • سفید</div>
              </div>
            </Field>
          )}

        </div>
      </div>

    </section>
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

