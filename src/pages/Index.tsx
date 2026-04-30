import { Link } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeading } from "@/components/site/Section";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  ArrowRight, Zap, SprayCan, Brush, Quote, Star, Award, Leaf,
  ShieldCheck, Clock, Heart, Sparkles
} from "lucide-react";
import heroImg from "@/assets/new-homepage.jpg";
import sElectric from "@/assets/service-electric.jpg";
import sCleaning from "@/assets/cleaning.jpeg";
import sPainting from "@/assets/painting.jpeg";
import w1 from "@/assets/service-electric.jpg";
import w2 from "@/assets/Paintwork1.jpeg";
import w3 from "@/assets/cleaning.jpeg";
import w5 from "@/assets/paint-work2.jpeg";
import t1 from "@/assets/team-1.jpg";

const featuredWorks = [
  { src: w1, cat: "Electrical", title: "East Legon Wiring" },
  { src: w2, cat: "Painting", title: "Cantonments Wall Refresh" },
  { src: w3, cat: "Cleaning", title: "Deep house cleaning" },
  { src: w5, cat: "Painting", title: "Sage Living Room" },
];

const promises = [
  { i: Heart, t: "Care", d: "Treated as if it were ours." },
  { i: ShieldCheck, t: "Honesty", d: "One price, in writing." },
  { i: Leaf, t: "Restraint", d: "Low-impact materials." },
  { i: Clock, t: "On time", d: "Or the next visit is free." },
];

const testimonials = [
  { q: "They rewired my entire house in three days. Professional from start to finish.", a: "Abena K., Designer" },
  { q: "Quiet, careful, on time. Craftsmanship you assume no longer exists.", a: "Kwame O., Homeowner" },
  { q: "Their electrical work is safe, clean, and professional.", a: "Yaa A., Gallery Owner" },
];

const Index = () => {
  const { openModal } = useQuoteModal();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Craftsman restoring antique furniture in a sunlit workshop"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-fade-bottom" />
        </div>

        <div className="container relative z-10 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <Eyebrow>The Final Touch</Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] mt-6">
              The quiet art of
              <em className="block text-primary">making things whole again.</em>
            </h1>
            <p className="mt-7 max-w-xl text-soft text-lg leading-relaxed">
              A small atelier devoted to electrical services, cleaning, and the finishing
              details that turn a service into a craft.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-primary hover:-translate-y-0.5 transition-all shadow-soft"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link to="/our-works" className="story-link text-sm font-medium">
                Browse our works →
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 max-w-md">
              {[
                { n: "1.2k", l: "Projects" },
                { n: "98%", l: "Returning" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl">{s.n}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-soft mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-28 container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal">
            <Eyebrow>Our Crafts</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-tight">
              Three disciplines,
              <em className="block text-primary">one obsession.</em>
            </h2>
            <p className="text-soft mt-6">
              Every project moves through hands that have worked the same craft
              for years. No subcontractors, no shortcuts.
            </p>
            <Link to="/services" className="story-link inline-block mt-8 text-sm font-medium">
              See all services →
            </Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Zap, label: "Electrical Services", img: sElectric, desc: "Wiring, panel upgrades, lighting installation." },
              { icon: SprayCan, label: "Deep Cleaning", img: sCleaning, desc: "Stone, marble, metal, heritage textiles." },
              { icon: Brush, label: "Paint & Finish", img: sPainting, desc: "Lime washes, French polish, custom palettes." },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="reveal lift rounded-2xl bg-surface border border-border overflow-hidden flex flex-col"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="zoom-wrap aspect-[4/3]">
                    <img src={s.img} alt={s.label} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <Icon className="w-6 h-6 text-primary" />
                    <p className="font-display text-2xl mt-6">{s.label}</p>
                    <p className="text-soft text-sm mt-3 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured works */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading eyebrow="Selected works" title="Quiet evidence" italic="of careful hands." className="m-0" />
            <Link to="/our-works" className="story-link text-sm font-medium reveal">
              View full portfolio →
            </Link>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredWorks.map((w, i) => (
              <Link
                key={w.title}
                to="/our-works"
                className="reveal group relative rounded-2xl overflow-hidden zoom-wrap aspect-[3/4]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img src={w.src} alt={w.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-background/70">{w.cat}</p>
                  <p className="font-display text-lg mt-2">{w.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="py-28 container">
        <SectionHeading align="center" eyebrow="What you can expect" title="Four small" italic="promises." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {promises.map((p, i) => {
            const Icon = p.i;
            return (
              <div
                key={p.t}
                className="reveal rounded-2xl border border-border bg-surface p-7 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 grid place-items-center mx-auto">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-2xl mt-6">{p.t}</p>
                <p className="text-soft mt-2 text-sm">{p.d}</p>
              </div>
            );
          })}
        </div>
      </section>

  
      {/* Process strip */}
      <section className="py-28 container">
        <SectionHeading eyebrow="How we work" title="Four quiet steps" italic="from inquiry to care." />
        <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-7 left-[6%] right-[6%] h-px bg-border" />
          {[
            { n: "01", t: "Listen", d: "We come, we look, we ask the right questions." },
            { n: "02", t: "Plan", d: "A quiet proposal — fair, written, single-page." },
            { n: "03", t: "Make", d: "Same hands, on site or in the atelier." },
            { n: "04", t: "Tend", d: "We return, polish, and care for what we made." },
          ].map((s, i) => (
            <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg relative z-10 shadow-soft">
                {s.n}
              </div>
              <h4 className="font-display text-2xl mt-6">{s.t}</h4>
              <p className="text-soft mt-2 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container">
          <SectionHeading align="center" eyebrow="Kind words" title="From those" italic="who returned." />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="reveal rounded-2xl border border-border bg-background p-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4" fill="currentColor" />
                  ))}
                </div>
                <p className="font-display text-lg mt-5 italic leading-relaxed">"{t.q}"</p>
                <footer className="mt-6 text-xs tracking-[0.28em] uppercase text-soft">— {t.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Press band */}
      <section className="py-20 container">
        <p className="text-center text-xs tracking-[0.32em] uppercase text-soft reveal">Quietly featured in</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 reveal">
          {["Atelier Quarterly", "Slow Living", "Heritage & Home", "Maker's Annual", "Period House", "Craft & Place"].map((p) => (
            <div key={p} className="rounded-xl border border-border bg-surface p-5 text-center">
              <p className="font-display text-sm leading-tight">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-28 container">
        <div className="reveal rounded-3xl bg-foreground text-background p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-primary/25 blur-3xl" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow className="text-background/70">Begin a project</Eyebrow>
              <h2 className="font-display text-4xl md:text-6xl mt-5 leading-[1.05]">
                Send us a note.
                <em className="block text-primary-glow">We'll bring the patience.</em>
              </h2>
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
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
