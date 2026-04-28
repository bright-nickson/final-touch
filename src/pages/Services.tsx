import SiteLayout from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeading } from "@/components/site/Section";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  Zap, SprayCan, Brush, Sparkles, Check, ArrowRight, Play,
  Leaf, ShieldCheck, Clock, Star, PaintBucket, Wrench, Layers,
  Sofa, DoorOpen, Wind, Quote, MapPin, Droplets
} from "lucide-react";
import heroImg from "@/assets/hero-services.jpg";
import sElectric from "@/assets/service-electric.jpg";
import sCleaning from "@/assets/service-cleaning.jpg";
import sPainting from "@/assets/service-painting.jpg";
// PLACEHOLDER: Replace with your plumbing service image
// TODO: Add your personal plumbing video to the service section
import sPlumbing from "@/assets/service-electric.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w5 from "@/assets/work-5.jpg";

const services = [
  {
    icon: Zap,
    title: "Electrical Services",
    desc: "Professional electrical installation and repair for homes and businesses — safe, reliable, and up to code.",
    img: sElectric,
    bullets: ["Wiring & rewiring", "Panel upgrades", "Lighting installation", "Fault diagnosis & repair"],
    from: "from ₵3,600",
  },
  {
    icon: SprayCan,
    title: "Deep Cleaning",
    desc: "Surface-by-surface cleaning that brings interiors back to a state of quiet brightness.",
    img: sCleaning,
    bullets: ["Stone & marble revival", "Hand-polished metals", "Upholstery deep-clean", "Heritage textile care"],
    from: "from ₵2,700",
  },
  {
    icon: Brush,
    title: "Paint & Finish",
    desc: "Hand-prepped walls and trim, period-correct finishes, curated palettes for living rooms.",
    img: sPainting,
    bullets: ["Lime wash & casein", "French-polish & shellac", "Bespoke color matching", "Low-VOC formulations"],
    from: "from ₵4,800",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    desc: "Professional plumbing solutions for homes and businesses — installation, repair, and maintenance.",
    img: sPlumbing,
    bullets: ["Leak detection & repair", "Pipe installation & replacement", "Fixture installation", "Drain cleaning & maintenance"],
    from: "from ₵2,400",
  },
];

const subServices = [
  { i: Zap, t: "Electrical Wiring", d: "New wiring, rewiring, and panel upgrades for homes and offices." },
  { i: DoorOpen, t: "Lighting Installation", d: "Indoor and outdoor lighting — installed safely and beautifully." },
  { i: PaintBucket, t: "Wall & Trim", d: "Lime washes, eggshells, color drawdowns on site." },
  { i: Wrench, t: "Fault Diagnosis", d: "Quick identification and repair of electrical faults and issues." },
  { i: Wind, t: "Soft Furnishings", d: "Curtains, slipcovers, cushion casings, headboards." },
  { i: Layers, t: "Floor Refinishing", d: "Sand, stain, seal — historically appropriate finishes." },
  { i: Droplets, t: "Plumbing", d: "Leak repairs, pipe work, fixture installation — done right." },
];

const tiers = [
  {
    name: "Essential",
    price: "₵3,600",
    period: "starting",
    tag: "For small electrical jobs or single rooms.",
    feats: ["Single fixture or room", "Safety inspection", "Standard materials", "7-day turnaround", "30-day guarantee"],
  },
  {
    name: "Studio",
    price: "₵9,300",
    period: "starting",
    tag: "Our most chosen — for home or office electrical work.",
    feats: ["Multi-room scope", "Quality materials", "On-site consultation", "Priority scheduling", "1-year maintenance", "Photography of completed work"],
    featured: true,
  },
  {
    name: "Atelier",
    price: "₵22,200",
    period: "starting",
    tag: "Full electrical installation for homes & commercial spaces.",
    feats: ["Full-home or office program", "Complete rewiring", "Designer collaboration", "Lifetime maintenance clinic", "Concierge access", "Annual safety report", "Dedicated project lead"],
  },
];

const steps = [
  { n: "01", t: "Listen", d: "We come, we look, we ask the kind of questions a craftsman asks." },
  { n: "02", t: "Plan", d: "A quiet proposal with materials, timing and a fair, written price." },
  { n: "03", t: "Make", d: "Our team works on site or in the atelier — always the same hands." },
  { n: "04", t: "Tend", d: "We return to inspect, polish, and care for what we made." },
];

const guarantees = [
  { i: ShieldCheck, t: "Written estimate", d: "Single price, no hidden lines." },
  { i: Leaf, t: "Low-impact materials", d: "Low-VOC, plant-based where possible." },
  { i: Clock, t: "On-time delivery", d: "Or the next visit is on us." },
  { i: Star, t: "12-month care", d: "Free touch-up within a year of completion." },
];

const materials = [
  { name: "Linseed-based oils", origin: "Brittany, France" },
  { name: "Hand-mixed casein paint", origin: "Studio-formulated" },
  { name: "Hide glues & shellacs", origin: "Sourced locally" },
  { name: "Tadelakt lime plaster", origin: "Marrakech, Morocco" },
  { name: "Beeswax & carnauba", origin: "Cold-blended in studio" },
  { name: "Linen & wool fibres", origin: "Belgian mills" },
];

const compare = [
  { feat: "Same team every visit", us: true, them: false },
  { feat: "Written, single-price estimate", us: true, them: false },
  { feat: "12-month touch-up included", us: true, them: false },
  { feat: "Low-VOC & natural materials", us: true, them: "Sometimes" },
  { feat: "Period-correct restoration", us: true, them: false },
  { feat: "Lifetime workshop clinic", us: "Atelier tier", them: false },
];

const quotes = [
  { q: "They didn't just clean it — they returned it to itself.", a: "Abena K., Designer" },
  { q: "Every quote was honored to the line. Every visit, the same faces.", a: "Kwame O., Homeowner" },
];

const sectors = [
  { src: w1, t: "Residences", d: "Homes, apartments, estates." },
  { src: w2, t: "Boutiques", d: "Hospitality, ateliers, galleries." },
  { src: w5, t: "Heritage", d: "Colonial buildings & historic sites." },
];

export default function Services() {
  const { openModal } = useQuoteModal();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[78vh] min-h-[560px] flex items-end overflow-hidden">
        <img src={heroImg} alt="Workshop scene" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container relative z-10 pb-20 text-background">
          <Eyebrow className="text-background/80">[ Services ]</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-5 max-w-4xl animate-fade-up">
            Crafted services for <em className="text-primary-glow">every surface</em> you love.
          </h1>
          <p className="mt-6 max-w-xl text-background/80 text-lg animate-fade-up">
            A small, slow menu — three disciplines we practice with care and dedication.
          </p>
        </div>
      </section>

      {/* Intro statement */}
      <section className="py-24 container grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Philosophy" title="What you receive" italic="is the time we take." />
        </div>
        <div className="lg:col-span-7 reveal text-lg text-foreground/85 leading-relaxed space-y-5">
          <p>
            Our services are not transactions — they are quiet collaborations.
            Each project moves through the hands of a small, named team that
            stays with you from first walk-through to final touch.
          </p>
          <p>
            We do three things: repair, clean, and finish. We do them slowly,
            with materials we trust, and we sign the back of every piece we
            return to you.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-28 container">
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="reveal lift group rounded-2xl bg-surface border border-border overflow-hidden flex flex-col"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="zoom-wrap aspect-[4/3]">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-[10px] tracking-[0.28em] uppercase text-soft">{s.from}</span>
                  </div>
                  <h3 className="font-display text-2xl mt-6">{s.title}</h3>
                  <p className="text-soft mt-3">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button onClick={openModal} className="story-link inline-block mt-6 text-sm font-medium self-start">
                    Request a quote →
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Sub-services / specialties grid */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container">
          <SectionHeading eyebrow="Specialties" title="Within our three crafts," italic="six quieter disciplines." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subServices.map((v, i) => {
              const Icon = v.i;
              return (
                <div
                  key={v.t}
                  className="reveal lift rounded-2xl border border-border bg-background p-7 flex gap-5 items-start"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-xl">{v.t}</p>
                    <p className="text-soft mt-1.5 text-sm leading-relaxed">{v.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28 container">
        <SectionHeading align="center" eyebrow="Pricing" title="Honest tiers,"  italic="no surprise lines." description="Every estimate is given in writing before any work begins. No revisions, no add-ons, no gentle surprises." />
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`reveal lift rounded-2xl p-10 border relative overflow-hidden ${
                t.featured ? "bg-foreground text-background border-foreground" : "bg-surface border-border"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {t.featured && (
                <span className="absolute top-6 right-6 text-[10px] tracking-[0.28em] uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full">Most chosen</span>
              )}
              <p className={`text-xs tracking-[0.28em] uppercase ${t.featured ? "text-background/60" : "text-soft"}`}>{t.name}</p>
              <p className="font-display text-5xl mt-3">{t.price}</p>
              <p className={`text-xs mt-1 ${t.featured ? "text-background/60" : "text-soft"}`}>{t.period}</p>
              <p className={`text-sm mt-4 italic ${t.featured ? "text-background/80" : "text-foreground/70"}`}>{t.tag}</p>
              <div className={`h-px my-7 ${t.featured ? "bg-background/15" : "bg-border"}`} />
              <ul className="space-y-3">
                {t.feats.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 ${t.featured ? "text-primary-glow" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={openModal}
                className={`mt-10 w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                  t.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary-dark"
                    : "bg-foreground text-background hover:bg-primary"
                }`}
              >
                Begin <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container">
          <SectionHeading eyebrow="Process" title="Four quiet steps," italic="from inquiry to care." />
          <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-7 left-[6%] right-[6%] h-px bg-border" />
            {steps.map((s, i) => (
              <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg relative z-10 shadow-soft">
                  {s.n}
                </div>
                <h4 className="font-display text-2xl mt-6">{s.t}</h4>
                <p className="text-soft mt-2 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-28 container">
        <SectionHeading eyebrow="Promises" title="Four quiet" italic="guarantees." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map((g, i) => {
            const Icon = g.i;
            return (
              <div
                key={g.t}
                className="reveal rounded-2xl border border-border bg-surface p-7"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <Icon className="w-7 h-7 text-primary" />
                <p className="font-display text-xl mt-6">{g.t}</p>
                <p className="text-soft mt-2 text-sm">{g.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-primary/25 blur-3xl" />
        <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow className="text-background/70">Materials</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-tight">
              A small library of
              <em className="block text-primary-glow">trusted materials.</em>
            </h2>
            <p className="text-background/75 mt-6 leading-relaxed">
              We've kept the same suppliers for years. Each material is chosen
              for honesty of finish, longevity, and a kind footprint.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 reveal">
            {materials.map((m, i) => (
              <div key={m.name} className={`flex justify-between items-baseline py-5 ${i < materials.length - 2 ? "border-b border-background/10" : ""}`}>
                <p className="font-display text-lg">{m.name}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-background/60 flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> {m.origin}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-28 container">
        <SectionHeading align="center" eyebrow="The difference" title="Why studios" italic="choose us, quietly." />
        <div className="reveal mt-16 max-w-4xl mx-auto rounded-2xl border border-border overflow-hidden">
          <div className="grid grid-cols-12 bg-surface px-6 py-5 text-xs tracking-[0.28em] uppercase text-soft">
            <div className="col-span-7">Detail</div>
            <div className="col-span-3 text-center">Final Touch</div>
            <div className="col-span-2 text-center">Typical firm</div>
          </div>
          {compare.map((row, i) => (
            <div key={row.feat} className={`grid grid-cols-12 px-6 py-5 items-center text-sm ${i < compare.length - 1 ? "border-b border-border" : ""}`}>
              <div className="col-span-7">{row.feat}</div>
              <div className="col-span-3 text-center text-primary font-medium">
                {typeof row.us === "boolean" ? (row.us ? <Check className="w-5 h-5 mx-auto" /> : "—") : row.us}
              </div>
              <div className="col-span-2 text-center text-soft">
                {typeof row.them === "boolean" ? (row.them ? "Yes" : "—") : row.them}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container">
          <SectionHeading eyebrow="Where we work" title="Three settings," italic="one standard." />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <article
                key={s.t}
                className="reveal group relative overflow-hidden rounded-2xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="zoom-wrap aspect-[4/5]">
                  <img src={s.src} alt={s.t} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-background">
                  <p className="font-display text-2xl">{s.t}</p>
                  <p className="text-background/80 text-sm mt-2">{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="container py-28">
        <div className="reveal relative aspect-[16/8] rounded-3xl overflow-hidden">
          <video
            src="/plumbing-showcase.mp4"
            controls
            poster={sPlumbing}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-6">
          <p className="text-xs tracking-[0.32em] uppercase text-soft">Plumbing Services</p>
          <p className="font-display text-3xl md:text-4xl mt-2 max-w-xl">See our plumbing work in action.</p>
        </div>
      </section>

      {/* Pull quotes */}
      <section className="pb-28 container grid md:grid-cols-2 gap-6">
        {quotes.map((q, i) => (
          <blockquote
            key={i}
            className="reveal rounded-2xl bg-surface border border-border p-10"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <Quote className="w-8 h-8 text-primary" />
            <p className="font-display text-2xl md:text-3xl mt-5 leading-snug italic">"{q.q}"</p>
            <footer className="mt-6 text-xs tracking-[0.28em] uppercase text-soft">— {q.a}</footer>
          </blockquote>
        ))}
      </section>

      {/* CTA banner */}
      <section className="relative py-28 overflow-hidden bg-foreground text-background">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/30 blur-3xl" />
        <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center reveal">
          <div>
            <Eyebrow className="text-background/70">Begin a project</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl mt-5 leading-[1.05]">
              Send us a note.
              <em className="block text-primary-glow">We'll bring the patience.</em>
            </h2>
            <p className="text-background/75 mt-6 max-w-md leading-relaxed">
              Most replies arrive within one business day. Site visits within
              our radius are always complimentary.
            </p>
          </div>
          <div className="flex md:justify-end">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-3 rounded-full bg-background text-foreground px-8 py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all shadow-lift"
            >
              <Sparkles className="w-4 h-4" />
              Request a Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
