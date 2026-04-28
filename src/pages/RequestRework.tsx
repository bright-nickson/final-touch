import { useState, useRef, FormEvent, ChangeEvent } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeading } from "@/components/site/Section";
import {
  Calendar as CalIcon, Upload, MapPin, Phone, Mail, Clock, Check, Sparkles,
  ShieldCheck, Leaf, Quote, MessageSquare, Hammer, Star
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import heroImg from "@/assets/hero-booking.jpg";

const faqs = [
  { q: "What counts as a 'rework'?", a: "Anything that wasn't quite right the first time — a finish that aged unevenly, wiring that needs adjustment, or a cleaning that missed a corner. We treat reworks with the same care as the original commission." },
  { q: "Is the visit free?", a: "Yes — we don't charge for an inspection within our service radius. We'll bring a written estimate before any work begins, and we'll never start without your approval." },
  { q: "How quickly can you come?", a: "Most rework requests are scheduled within seven days. Studio-tier and Atelier-tier clients have priority access and can usually be seen within 48 hours." },
  { q: "Do you provide your own materials?", a: "Always. We use a small, curated set of finishes, stains, oils and cleaning agents we trust. If a piece needs something unusual, we'll source it and tell you exactly where it came from." },
  { q: "What if it's outside your radius?", a: "We travel for the right project — get in touch and we'll talk through it. Travel beyond 30 miles is quoted separately and transparently." },
  { q: "Is there a guarantee on rework?", a: "Reworks of our own pieces within 12 months are always free. Reworks of work done by another studio are quoted normally, but include our standard 12-month touch-up." },
  { q: "How do you handle delicate antiques?", a: "Slowly. Antique pieces are assessed in our studio under controlled light, and we send detailed photographs and a written treatment plan before any tool touches them." },
];

const what = [
  { i: MessageSquare, t: "We reply within 24 hours", d: "A real message from a real person — usually Ama or Kwasi." },
  { i: CalIcon, t: "We schedule an inspection", d: "Always free within our radius. No pressure, no sales script." },
  { i: Hammer, t: "We propose, in writing", d: "A single-page estimate with timing, materials and price." },
  { i: ShieldCheck, t: "Work begins on your word", d: "Nothing starts until you've signed off. Quietly, properly." },
];

const promises = [
  { i: ShieldCheck, t: "12-month touch-up included", d: "On every rework we complete." },
  { i: Leaf, t: "Low-impact materials", d: "Plant-based and low-VOC where possible." },
  { i: Clock, t: "On-time, every time", d: "Or the next visit is on us." },
  { i: Star, t: "Same hands, same care", d: "No subcontractors, ever." },
];

const sidebarQuotes = [
  { q: "They came back, fixed what aged, and refused to charge.", a: "— Kwame O." },
  { q: "Reworks done with the same care as the first visit.", a: "— Abena K." },
];

export default function RequestRework() {
  const [date, setDate] = useState<Date | undefined>();
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    setFiles((f) => [...f, ...Array.from(e.dataTransfer.files)]);
  };

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles((f) => [...f, ...Array.from(e.target.files!)]);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
    toast.success("Request received", { description: "We'll be in touch within one business day." });
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[58vh] min-h-[460px] flex items-end overflow-hidden">
        <img src={heroImg} alt="Quiet workspace" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container relative z-10 pb-20 text-background">
          <Eyebrow className="text-background/80">[ Request a Rework ]</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-5 max-w-3xl animate-fade-up">
            Tell us what didn't <em className="text-primary-glow">quite settle.</em>
          </h1>
          <p className="mt-6 max-w-xl text-background/80 text-lg animate-fade-up">
            A few quiet questions and a date. We'll do the rest.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 bg-surface border-b border-border">
        <div className="container">
          <SectionHeading align="center" eyebrow="What to expect" title="Four small steps," italic="from this form to the fix." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {what.map((w, i) => {
              const Icon = w.i;
              return (
                <div
                  key={w.t}
                  className="reveal rounded-2xl border border-border bg-background p-7"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-display text-xl mt-6">{w.t}</p>
                  <p className="text-soft text-sm mt-2 leading-relaxed">{w.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-24 container grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          {done ? (
            <div className="reveal is-visible bg-surface border border-border rounded-2xl p-12 text-center animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground grid place-items-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl mt-6">Thank you.</h2>
              <p className="text-soft mt-4 max-w-md mx-auto">
                Your rework request is on its way to us. Expect a quiet, careful
                reply within one business day.
              </p>
              <button
                onClick={() => { setDone(false); setFiles([]); setDate(undefined); }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition-all"
              >
                Send another <Sparkles className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="reveal bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-soft">
              <Eyebrow>Project details</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl mt-4">Let's start with the basics.</h2>
              <p className="text-soft mt-3">All fields marked with care. None of this is shared, ever.</p>

              <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
                <div className="float-field">
                  <input placeholder=" " required />
                  <label>Full name</label>
                </div>
                <div className="float-field">
                  <input type="email" placeholder=" " required />
                  <label>Email</label>
                </div>
                <div className="float-field">
                  <input placeholder=" " />
                  <label>Phone (optional)</label>
                </div>
                <div className="float-field">
                  <select defaultValue="" required>
                    <option value="" disabled hidden></option>
                    <option>Electrical Services</option>
                    <option>Deep Cleaning</option>
                    <option>Paint & Finish</option>
                    <option>Plumbing Services</option>
                    <option>Tiling Services</option>
                    <option>Other</option>
                  </select>
                  <label>Service type</label>
                </div>

                <div className="float-field">
                  <select defaultValue="">
                    <option value="" disabled hidden></option>
                    <option>Single piece</option>
                    <option>Single room</option>
                    <option>Multiple rooms</option>
                    <option>Whole home / estate</option>
                  </select>
                  <label>Project scope</label>
                </div>
                <div className="float-field">
                  <select defaultValue="">
                    <option value="" disabled hidden></option>
                    <option>Within 2 weeks</option>
                    <option>Within a month</option>
                    <option>Within three months</option>
                    <option>No rush — when ready</option>
                  </select>
                  <label>Timeline</label>
                </div>

                <div className="md:col-span-2 float-field">
                  <input placeholder=" " />
                  <label>Address (optional, helps with travel)</label>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs tracking-[0.28em] uppercase text-soft mb-3">Preferred date</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "w-full flex items-center justify-between rounded-xl border border-border px-5 py-4 text-left hover:border-primary/60 transition-colors",
                          !date && "text-soft"
                        )}
                      >
                        <span>{date ? format(date, "PPP") : "Pick a date"}</span>
                        <CalIcon className="w-4 h-4 text-primary" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="md:col-span-2 float-field">
                  <textarea rows={6} placeholder=" " required />
                  <label>What needs reworking?</label>
                </div>

                {/* File upload */}
                <div className="md:col-span-2">
                  <p className="text-xs tracking-[0.28em] uppercase text-soft mb-3">Photos (optional)</p>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={onDrop}
                    onClick={() => inputRef.current?.click()}
                    className={cn(
                      "rounded-xl border-2 border-dashed p-10 text-center cursor-pointer transition-all",
                      dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    )}
                  >
                    <Upload className="w-6 h-6 mx-auto text-primary" />
                    <p className="font-display text-lg mt-3">Drop photos here</p>
                    <p className="text-soft text-sm mt-1">or click to browse — JPG, PNG up to 10MB each</p>
                    <input ref={inputRef} type="file" multiple accept="image/*" onChange={onSelect} className="hidden" />
                  </div>
                  {files.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {files.map((f, i) => (
                        <li key={i} className="text-xs px-3 py-1.5 rounded-full bg-secondary">{f.name}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="md:col-span-2 flex items-start gap-3 text-sm">
                  <input type="checkbox" id="consent" required className="mt-1 accent-primary" />
                  <label htmlFor="consent" className="text-soft leading-relaxed">
                    I agree to be contacted by The Final Touch about this request. We won't share your details with anyone, ever.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-12 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-primary hover:-translate-y-0.5 transition-all shadow-soft"
              >
                Submit request <Sparkles className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="reveal rounded-2xl bg-foreground text-background p-8">
            <Eyebrow className="text-background/70">Reach us</Eyebrow>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary-glow" /> 15 Aburi Road, East Legon, Accra</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary-glow" /> 050 137 2510</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary-glow" /> info@finaltouch.com.gh</li>
              <li className="flex items-start gap-3"><Clock className="w-4 h-4 mt-0.5 text-primary-glow" />
                <div>
                  <p>Tue – Sat · 9:00 – 17:30</p>
                  <p className="text-background/60 text-xs mt-1">Closed Sun & Mon</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="reveal rounded-2xl border border-border bg-surface p-8">
            <Eyebrow>Our promises</Eyebrow>
            <ul className="mt-6 space-y-5">
              {promises.map((p) => {
                const Icon = p.i;
                return (
                  <li key={p.t} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 grid place-items-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{p.t}</p>
                      <p className="text-soft text-xs mt-1">{p.d}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {sidebarQuotes.map((q, i) => (
            <blockquote key={i} className="reveal rounded-2xl border border-border bg-background p-7">
              <Quote className="w-6 h-6 text-primary" />
              <p className="font-display text-lg mt-4 italic leading-snug">"{q.q}"</p>
              <footer className="mt-4 text-xs tracking-[0.28em] uppercase text-soft">{q.a}</footer>
            </blockquote>
          ))}

          <div className="reveal rounded-2xl overflow-hidden border border-border h-64">
            <iframe
              title="Studio location"
              className="w-full h-full grayscale-[0.3]"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.18%2C5.62%2C-0.15%2C5.64&layer=mapnik"
              loading="lazy"
            />
          </div>
        </aside>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container max-w-3xl">
          <SectionHeading align="center" eyebrow="Questions" title="Asked, and" italic="answered." />
          <Accordion type="single" collapsible className="mt-12 reveal">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-lg md:text-xl text-left hover:no-underline hover:text-primary py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-soft leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
}
