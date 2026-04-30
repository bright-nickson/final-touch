import SiteLayout from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeading } from "@/components/site/Section";
import { useCounter } from "@/hooks/use-counter";
import {
  Award, Heart, Leaf, Hammer, ShieldCheck, Users, Quote,
  MapPin, Clock, ArrowRight, BookOpen, Coffee, Sun
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import heroImg from "@/assets/newest-hompage.jpg";
// Team images from Unsplash CDN - Black professionals
const t1 = "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=1000&fit=crop&crop=faces";
const t2 = "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&h=1000&fit=crop&crop=faces";
const t3 = "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=800&h=1000&fit=crop&crop=faces";
const t4 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces";
import sElectric from "@/assets/service-electric.jpg";
import sCleaning from "@/assets/cleaning.jpeg";
import sPainting from "@/assets/painting.jpeg";
import sPlumbing from "@/assets/plumbing-hero.jpeg";

const values = [
  { i: Heart, t: "Care", d: "Every piece is treated as if it belonged to one of us." },
  { i: Hammer, t: "Craft", d: "Slow, patient work — done by hand, where it matters." },
  { i: Leaf, t: "Restraint", d: "Minimal-impact methods, low-VOC finishes, no waste." },
  { i: ShieldCheck, t: "Honesty", d: "We say what something will cost, and we say it once." },
  { i: Users, t: "People", d: "Same hands, every visit. No subcontractors, ever." },
  { i: Award, t: "Pride", d: "We guarantee every electrical installation." },
];

const team = [
  { src: t1, name: "Ama Owusu", role: "Founder · Electrician", bio: "Licensed electrician with years of experience. Founded the studio with a commitment to safe, reliable electrical work for every home." },
  { src: t2, name: "Kwasi Boateng", role: "Lead Technician", bio: "Expert in electrical systems with years of field experience. Known for precise workmanship and careful attention to safety." },
  { src: t3, name: "Efua Mensah", role: "Cleaning & Project Lead", bio: "Oversees our cleaning operations and ensures every project meets our high standards. Brings expertise in quality control and client relations." },
  { src: t4, name: "Kofi Addo", role: "Electrician & Installer", bio: "Years of electrical installation experience, including work on residential and commercial properties. Believes every home deserves safe, modern electrical systems." },
];

const day = [
  { i: Sun, t: "07:30", d: "The studio opens. Kwasi arrives early to enjoy the morning quiet." },
  { i: Coffee, t: "08:00", d: "Team meeting around the workbench. Planning the day's projects and site visits." },
  { i: Hammer, t: "09:00", d: "Work begins. Wiring, installations, and careful electrical work." },
  { i: BookOpen, t: "13:00", d: "Lunch break together. Stories shared over traditional dishes." },
  { i: Hammer, t: "14:00", d: "Site visits or finishing work. Efua tests color samples by the window." },
  { i: Sun, t: "17:30", d: "Tools put away, surfaces cleaned. Another day of careful work complete." },
];

const press = [
  "Atelier Quarterly", "Slow Living Journal", "Heritage & Home",
  "The Maker's Annual", "Period House", "Craft & Place",
];

const certs = [
  "Licensed Electrical Contractors · Member",
  "Atelier Network · Founding studio",
  "Slow Crafts Council · Heritage registry",
  "Low-VOC Practitioner · Certified",
];

function Stat({ to, suffix, label }: { to: number; suffix?: string; label: string }) {
  const { ref, value } = useCounter(to);
  return (
    <div className="text-center">
      <p className="font-display text-5xl md:text-6xl">
        <span ref={ref}>{value.toLocaleString()}</span>
        {suffix}
      </p>
      <p className="mt-3 text-xs tracking-[0.28em] uppercase text-soft">{label}</p>
    </div>
  );
}

export default function About() {
  const { openModal } = useQuoteModal();
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[78vh] min-h-[560px] flex items-end overflow-hidden">
        <img src={heroImg} alt="The Final Touch team" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container relative z-10 pb-20 text-background">
          <Eyebrow className="text-background/80">[ About the Studio ]</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-5 max-w-4xl animate-fade-up">
            A small team, <em className="text-primary-glow">a long memory.</em>
          </h1>
          <p className="mt-6 max-w-xl text-background/80 text-lg animate-fade-up">
            A small studio in East Legon — restoring, finishing, and quietly
            insisting that the things people love deserve more time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 container grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Our mission" title="To return things" italic="to their best selves." />
        </div>
        <div className="lg:col-span-7 reveal text-lg text-foreground/85 leading-relaxed space-y-5">
          <p>
            We started with the belief that the things people live with deserve
            more attention than the throwaway pace of modern life allows. Some walls need a quieter color.
            Some rooms need to be put back the way they were.
          </p>
          <p>
            We do that — patiently, by hand, and with the same small team
            you'll meet on the first visit. We take fewer projects than we are
            offered, and we finish each one with the kind of care it asks for.
          </p>
          <p className="font-display text-2xl text-primary italic pt-4 border-l-2 border-primary pl-6">
            "Good electrical work is, at its best, an act of safety."
          </p>
        </div>
      </section>

      {/* Founder image + quote */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="zoom-wrap aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
              <img src={sElectric} alt="Electrical work" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <Eyebrow>From the founder</Eyebrow>
            <Quote className="w-10 h-10 text-primary mt-6" />
            <p className="font-display text-2xl md:text-3xl mt-6 leading-snug italic">
              "When I opened this studio, I wanted to work the way I'd
              been taught — slowly, with the same hands seeing a piece from
              start to finish. That's still how we work today."
            </p>
            <p className="mt-8 text-sm">
              <span className="font-medium">Ama Owusu</span>
              <span className="text-soft"> · Founder & Lead Electrician</span>
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-surface border-y border-border">
        <div className="container">
          <SectionHeading eyebrow="What we hold to" title="Six small ideas," italic="practiced daily." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.i;
              return (
                <div
                  key={v.t}
                  className="reveal lift rounded-2xl border border-border bg-background p-8"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <Icon className="w-7 h-7 text-primary" />
                  <p className="font-display text-2xl mt-8">{v.t}</p>
                  <p className="text-soft mt-2 text-sm leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A day in the studio */}
      <section className="py-28 container">
        <SectionHeading eyebrow="A day in the studio" title="From kettle on" italic="to lights low." />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {day.map((d, i) => {
            const Icon = d.i;
            return (
              <div
                key={d.t}
                className="reveal flex gap-5 items-start"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl">{d.t}</p>
                  <p className="text-soft mt-2 leading-relaxed">{d.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-primary/30 blur-3xl" />
        <div className="container relative z-10 grid grid-cols-2 md:grid-cols-3 gap-10">
          <Stat to={1240} label="Pieces revived" />
          <Stat to={420} label="Happy homes" />
          <Stat to={98} suffix="%" label="Returning clients" />
        </div>
      </section>

      {/* Team */}
      <section className="py-28 container">
        <SectionHeading align="center" eyebrow="The team" title="The same hands," italic="on every visit." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((p, i) => (
            <div
              key={p.name}
              className="reveal group relative overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="zoom-wrap aspect-[4/5]">
                <img src={p.src} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                <p className="text-[10px] tracking-[0.32em] uppercase text-background/70">{p.role}</p>
                <p className="font-display text-2xl mt-2">{p.name}</p>
                <p className="text-sm text-background/85 mt-3 max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-500 leading-relaxed">
                  {p.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop / studio tour */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="zoom-wrap aspect-[16/10] rounded-2xl overflow-hidden shadow-elegant">
              <img src={sPainting} alt="Our studio in East Legon" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-5 reveal">
            <Eyebrow>The atelier</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-tight">
              15 Aburi Road,
              <em className="block text-primary">East Legon.</em>
            </h2>
            <p className="text-soft mt-6 leading-relaxed">
              A bright studio space with natural light, four
              workbenches, a finishing room, and a small library of paint
              samples.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> 15 Aburi Road, East Legon, Accra</li>
              <li className="flex items-start gap-3"><Clock className="w-4 h-4 mt-0.5 text-primary" /> Tue – Sat, 9:00 – 17:30 · Visits by appointment</li>
              <li className="flex items-start gap-3"><Users className="w-4 h-4 mt-0.5 text-primary" /> Four electricians, one apprentice, one studio dog</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Press logos */}
      <section className="py-24 container">
        <SectionHeading align="center" eyebrow="Featured in" title="Quietly" italic="written about." />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 reveal">
          {press.map((p) => (
            <div
              key={p}
              className="rounded-xl border border-border bg-surface p-6 text-center hover:bg-primary/5 hover:border-primary/40 transition-all"
            >
              <p className="font-display text-base leading-tight">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliations / certifications */}
      <section className="pb-28 container">
        <div className="reveal rounded-2xl border border-border bg-surface p-10 md:p-14 text-center">
          <Eyebrow className="justify-center">Affiliations</Eyebrow>
          <p className="font-display text-3xl mt-5">Members of three small guilds we believe in.</p>
          <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl mx-auto text-left">
            {certs.map((c) => (
              <div key={c} className="flex items-start gap-3 text-sm">
                <Award className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-28 container">
        <div className="reveal rounded-3xl bg-foreground text-background p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-primary/25 blur-3xl" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow className="text-background/70">Visit us</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl mt-5 leading-tight">
                Come by the atelier
                <em className="block text-primary-glow">— or send a piece.</em>
              </h2>
            </div>
            <div className="flex md:justify-end">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 rounded-full bg-background text-foreground px-8 py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all shadow-lift"
              >
                Begin a project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
