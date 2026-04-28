import { useEffect, useState } from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { X, Hammer, SprayCan, Brush, Sparkles, ArrowRight, Check, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const services = [
  { id: "repair", label: "Repair & Restore", icon: Hammer },
  { id: "clean", label: "Deep Cleaning", icon: SprayCan },
  { id: "paint", label: "Paint & Finish", icon: Brush },
  { id: "plumbing", label: "Plumbing Services", icon: Droplets },
  { id: "polish", label: "Polish & Detail", icon: Sparkles },
];

export default function QuoteModal() {
  const { open, closeModal } = useQuoteModal();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    contactPref: "email",
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setStep(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  if (!open) return null;

  const estimate = data.service
    ? (data.service === "repair" ? "₵3,600 – ₵9,300" : data.service === "clean" ? "₵1,800 – ₵5,100" : data.service === "paint" ? "₵5,700 – ₵14,700" : data.service === "plumbing" ? "₵2,400 – ₵7,200" : "₵2,700 – ₵6,600")
    : "—";

  const next = () => setStep((s) => Math.min(s + 1, 2));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request sent", { description: "We'll be in touch within one business day." });
    closeModal();
    setData({ service: "", description: "", name: "", email: "", phone: "", contactPref: "email" });
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8 animate-fade-in">
      <button
        onClick={closeModal}
        aria-label="Close"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-3xl rounded-2xl bg-surface shadow-lift border border-border overflow-hidden animate-scale-in">
        <div className="relative p-8 md:p-12">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 grid place-items-center w-9 h-9 rounded-full hover:bg-secondary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-xs tracking-[0.32em] uppercase text-soft mb-3">
            <span className="w-8 h-px bg-primary" /> Step {step + 1} of 3
          </div>
          <h2 className="font-display text-3xl md:text-4xl">
            {step === 0 && <>What may we <em className="text-primary">tend to</em>?</>}
            {step === 1 && <>Tell us a little more.</>}
            {step === 2 && <>Where shall we <em className="text-primary">reach</em> you?</>}
          </h2>

          {/* Progress bar */}
          <div className="mt-6 h-px bg-border relative overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-primary transition-all duration-500"
              style={{ width: `${((step + 1) / 3) * 100}%` }}
            />
          </div>

          <form onSubmit={submit} className="mt-8">
            {step === 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((s) => {
                  const active = data.service === s.id;
                  const Icon = s.icon;
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setData((d) => ({ ...d, service: s.id }))}
                      className={cn(
                        "group p-5 rounded-xl border text-left transition-all duration-300",
                        active
                          ? "border-primary bg-primary/10 shadow-soft"
                          : "border-border hover:border-primary/50 hover:-translate-y-1"
                      )}
                    >
                      <Icon className={cn("w-5 h-5 mb-3 transition-colors", active ? "text-primary" : "text-foreground/70")} />
                      <p className="text-sm font-medium leading-snug">{s.label}</p>
                      {active && <Check className="w-3.5 h-3.5 text-primary mt-2" />}
                    </button>
                  );
                })}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <div className="float-field">
                  <textarea
                    rows={5}
                    value={data.description}
                    onChange={(e) => setData((d) => ({ ...d, description: e.target.value }))}
                    placeholder=" "
                    required
                  />
                  <label>Describe your project</label>
                </div>
                <div className="rounded-xl bg-secondary/60 p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-[0.28em] uppercase text-soft">Live estimate</p>
                    <p className="font-display text-2xl mt-1">{estimate}</p>
                  </div>
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="float-field">
                    <input value={data.name} onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))} placeholder=" " required />
                    <label>Full name</label>
                  </div>
                  <div className="float-field">
                    <input type="email" value={data.email} onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))} placeholder=" " required />
                    <label>Email</label>
                  </div>
                </div>
                <div className="float-field">
                  <input value={data.phone} onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))} placeholder=" " />
                  <label>Phone (optional)</label>
                </div>
                <div>
                  <p className="text-xs tracking-[0.28em] uppercase text-soft mb-3">Preferred contact</p>
                  <div className="flex gap-3">
                    {(["email", "phone", "either"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setData((d) => ({ ...d, contactPref: p }))}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm border transition-all capitalize",
                          data.contactPref === p
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-10 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="text-sm text-soft hover:text-foreground disabled:opacity-30 transition-colors"
              >
                ← Back
              </button>
              {step < 2 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={step === 0 && !data.service}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary disabled:opacity-40 transition-all hover:-translate-y-0.5"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-soft"
                >
                  Send request <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

