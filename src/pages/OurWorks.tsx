import { useState, useEffect } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeading } from "@/components/site/Section";
import { X, ChevronLeft, ChevronRight, Quote, MapPin, Clock, Award, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuoteModal } from "@/context/QuoteModalContext";
import heroImg from "@/assets/hero-works.jpg";
import w1 from "@/assets/electricals1.jpeg";
import w2 from "@/assets/Paintwork1.jpeg";
import w3 from "@/assets/cleaning.jpeg";
import w4 from "@/assets/plumbing3.jpeg";
import w5 from "@/assets/paint-work2.jpeg";
import w6 from "@/assets/houses-painted.jpeg";
import w7 from "@/assets/tiling.jpeg";
import w8 from "@/assets/tiling1.jpeg";
import w9 from "@/assets/tiling 2.jpeg";
import w10 from "@/assets/plumbing4.jpeg";
import w11 from "@/assets/plumbing5.jpeg";
import w12 from "@/assets/service-electric.jpg";

type Cat = "All" | "Electrical" | "Cleaning" | "Painting" | "Plumbing" | "Tiling";

const works = [
  { id: 1, src: w1, title: "East Legon Wiring", cat: "Electrical" as Cat, year: "2024", loc: "East Legon", span: "" },
  { id: 2, src: w2, title: "Cantonments Wall Refresh", cat: "Painting" as Cat, year: "2024", loc: "Cantonments", span: "" },
  { id: 3, src: w3, title: "Airport Kitchen Deep Clean", cat: "Cleaning" as Cat, year: "2023", loc: "Airport Residential", span: "" },
  { id: 4, src: w4, title: "Labone Plumbing Fix", cat: "Plumbing" as Cat, year: "2024", loc: "Labone", span: "" },
  { id: 5, src: w5, title: "Osu Interior Paint", cat: "Painting" as Cat, year: "2023", loc: "Osu", span: "" },
  { id: 6, src: w6, title: "East Legon Exterior Paint", cat: "Painting" as Cat, year: "2024", loc: "East Legon", span: "" },
  { id: 7, src: w7, title: "Tiling 1", cat: "Tiling" as Cat, year: "2024", loc: "East Legon", span: "" },
  { id: 8, src: w8, title: "Tiling 2", cat: "Tiling" as Cat, year: "2024", loc: "Cantonments", span: "" },
  { id: 9, src: w9, title: "Tiling 3", cat: "Tiling" as Cat, year: "2024", loc: "Labone", span: "" },
  { id: 10, src: w10, title: "Cantonments Pipe Installation", cat: "Plumbing" as Cat, year: "2024", loc: "Cantonments", span: "" },
  { id: 11, src: w11, title: "Airport Residential Drainage", cat: "Plumbing" as Cat, year: "2024", loc: "Airport Residential", span: "" },
  { id: 12, src: w12, title: "Osu Panel Upgrade", cat: "Electrical" as Cat, year: "2024", loc: "Osu", span: "" },
];

const cats: Cat[] = ["All", "Electrical", "Cleaning", "Painting", "Plumbing", "Tiling"];

const testimonials = [
  { name: "Abena K.", role: "Designer · Accra Studio", quote: "They rewired my entire house in three days. Professional from start to finish." },
  { name: "Kwame O.", role: "Homeowner · Osu", quote: "Quiet, careful, on time. The kind of craftsmanship you assume no longer exists." },
  { name: "Yaa A.", role: "Gallery Owner · East Legon", quote: "Their electrical work is clean, safe, and professionally done." },
  { name: "Akosua R.", role: "Architect · Airport Residential", quote: "I've sent them three of my most demanding projects. Three times, they exceeded my brief." },
];

const featured = [
  {
    img: w3,
    eyebrow: "Case Study · 2024",
    title: "Residential Exterior Cleaning",
    loc: "East Legon Estate, six weeks",
    body: "A beautiful home's exterior and driveway needed restoration after months of buildup. We pressure-washed surfaces, removed all stains and grime, and restored the property's curb appeal — looking brand new.",
    stats: [
      { n: "6", l: "Weeks" },
      { n: "2,400", l: "Sq meters cleaned" },
      { n: "100%", l: "Satisfaction rate" },
    ],
  },
  {
    img: w1,
    eyebrow: "Case Study · 2023",
    title: "East Legon Electrical Upgrade",
    loc: "East Legon, three weeks",
    body: "A home with outdated wiring and frequent power outages. We upgraded the main panel, rewired the living areas, and installed modern safety switches — bringing reliable power to every room.",
    stats: [
      { n: "120", l: "Hours" },
      { n: "3", l: "Phases completed" },
      { n: "0", l: "Safety incidents" },
    ],
  },
];

const press = [
  { name: "Atelier Quarterly", quote: "A studio working at the speed of memory." },
  { name: "Slow Living Journal", quote: "The patience of a museum, the warmth of a home." },
  { name: "Heritage & Home", quote: "Electrical work that honors the home's character." },
  { name: "The Maker's Annual", quote: "Among the last true ateliers in the city." },
];

const stats = [
  { n: "1,240", l: "Pieces revived" },
  { n: "420", l: "Homes served" },
  { n: "3", l: "Years in craft" },
  { n: "98%", l: "Returning clients" },
];

export default function OurWorks() {
  const { openModal } = useQuoteModal();
  const [filter, setFilter] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [tIdx, setTIdx] = useState(0);

  // Close lightbox when filter changes
  useEffect(() => {
    setLightbox(null);
  }, [filter]);

  const filtered = works.filter((w) => filter === "All" || w.cat === filter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);
  const goLightbox = (dir: -1 | 1) => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((w) => w.id === lightbox);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next].id);
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img src={heroImg} alt="Electrical work" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container relative z-10 pb-20 text-background">
          <Eyebrow className="text-background/80">[ Selected Works ]</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-5 max-w-4xl animate-fade-up">
            Quiet evidence of <em className="text-primary-glow">careful hands.</em>
          </h1>
          <p className="mt-6 max-w-xl text-background/80 text-lg animate-fade-up">
            A small selection of the rooms, pieces and
            details we've been trusted with.
          </p>
        </div>
      </section>

      {/* Marquee stats */}
      <section className="py-16 bg-foreground text-background border-y border-foreground">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-display text-4xl md:text-5xl">{s.n}</p>
              <p className="mt-3 text-[10px] tracking-[0.32em] uppercase text-background/65">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filters + Gallery */}
      <section className="py-24 container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 reveal">
          <SectionHeading
            eyebrow="Portfolio"
            title="A short walk"
            italic="through our atelier."
            className="m-0"
          />
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all border",
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-primary/60"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div key={filter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-5">
          {filtered.map((w, i) => (
            <button
              key={w.id}
              onClick={() => openLightbox(w.id)}
              className="zoom-wrap relative rounded-2xl overflow-hidden group bg-surface text-left h-[260px]"
            >
              <img src={w.src} alt={w.title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-background translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] tracking-[0.32em] uppercase text-background/70">{w.cat} · {w.year}</p>
                <p className="font-display text-2xl mt-2">{w.title}</p>
                <p className="text-xs mt-3 text-background/80 flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {w.loc} · View →</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured case studies */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container">
          <SectionHeading align="center" eyebrow="Case studies" title="Two projects," italic="told slowly." />
          <div className="mt-20 space-y-28">
            {featured.map((p, i) => (
              <article
                key={p.title} 
                className={cn(
                  "grid lg:grid-cols-12 gap-10 items-center",
                  i % 2 === 1 && "lg:[direction:rtl]"
                )}
              >
                <div className="lg:col-span-7 reveal lg:[direction:ltr]">
                  <div className="zoom-wrap aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-5 reveal lg:[direction:ltr]">
                  <p className="text-xs tracking-[0.28em] uppercase text-soft">{p.eyebrow}</p>
                  <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight">{p.title}</h3>
                  <p className="text-soft text-sm mt-3 flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-primary" /> {p.loc}</p>
                  <p className="text-foreground/80 mt-6 leading-relaxed">{p.body}</p>
                  <div className="mt-8 grid grid-cols-3 gap-6">
                    {p.stats.map((s) => (
                      <div key={s.l}>
                        <p className="font-display text-3xl text-primary">{s.n}</p>
                        <p className="text-[10px] tracking-[0.28em] uppercase text-soft mt-1">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container">
          <SectionHeading align="center" eyebrow="In print" title="Kindly noticed" italic="by quiet places." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {press.map((p, i) => (
              <div
                key={p.name}
                className="reveal rounded-2xl border border-border bg-background p-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Award className="w-6 h-6 text-primary" />
                <p className="font-display text-base mt-6 italic leading-relaxed">"{p.quote}"</p>
                <p className="mt-5 text-xs tracking-[0.28em] uppercase text-soft">— {p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 container">
        <SectionHeading align="center" eyebrow="Kind words" title="From those" italic="who returned." />
        <div className="reveal mt-16 max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 text-primary mx-auto" />
          <p className="font-display text-2xl md:text-3xl mt-6 leading-relaxed italic">
            "{testimonials[tIdx].quote}"
          </p>
          <p className="mt-8 text-sm">
            <span className="font-medium">{testimonials[tIdx].name}</span>
            <span className="text-soft"> · {testimonials[tIdx].role}</span>
          </p>
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setTIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="grid place-items-center w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIdx(i)}
                  className={cn("h-1.5 rounded-full transition-all", tIdx === i ? "w-8 bg-primary" : "w-2 bg-border")}
                  aria-label={`Quote ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setTIdx((i) => (i + 1) % testimonials.length)}
              className="grid place-items-center w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-28 container">
        <div className="reveal rounded-3xl bg-foreground text-background p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-primary/25 blur-3xl" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow className="text-background/70">Your project</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl mt-5 leading-tight">
                Have a piece, a wall,
                <em className="block text-primary-glow">or a room in mind?</em>
              </h2>
            </div>
            <div className="flex md:justify-end">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 rounded-full bg-background text-foreground px-8 py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all shadow-lift"
              >
                Begin a quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[80] grid place-items-center px-4 py-10 animate-fade-in">
          <button onClick={closeLightbox} className="absolute inset-0 bg-foreground/85 backdrop-blur-sm" aria-label="Close" />
          <button onClick={() => goLightbox(-1)} className="relative z-10 grid place-items-center w-12 h-12 rounded-full bg-background/10 text-background hover:bg-background hover:text-foreground transition-all mr-4">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="relative z-10 max-w-5xl max-h-[80vh] animate-scale-in">
            {(() => {
              const cur = filtered.find((w) => w.id === lightbox)!;
              return (
                <figure>
                  <img src={cur.src} alt={cur.title} className="max-h-[75vh] w-auto rounded-xl shadow-lift" />
                  <figcaption className="mt-5 text-background text-center">
                    <p className="text-[10px] tracking-[0.32em] uppercase text-background/60">{cur.cat} · {cur.year}</p>
                    <p className="font-display text-2xl mt-2">{cur.title}</p>
                    <p className="text-xs mt-2 text-background/70">{cur.loc}</p>
                  </figcaption>
                </figure>
              );
            })()}
          </div>
          <button onClick={() => goLightbox(1)} className="relative z-10 grid place-items-center w-12 h-12 rounded-full bg-background/10 text-background hover:bg-background hover:text-foreground transition-all ml-4">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={closeLightbox} className="absolute top-6 right-6 z-10 grid place-items-center w-10 h-10 rounded-full bg-background/10 text-background hover:bg-background hover:text-foreground transition-all">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </SiteLayout>
  );
}
