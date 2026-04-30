import { useState, FormEvent } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeading } from "@/components/site/Section";
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
  Instagram, Facebook, MessageSquare
} from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero-booking.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["15 Aburi Road", "East Legon, Accra"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["050 137 2510"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@finaltouch.com.gh"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Tue – Sat: 9:00 – 17:30", "Closed Sun & Mon"],
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xgodwqjq", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });
      if (response.ok) {
        setSubmitted(true);
        toast.success("Message sent", { description: "We'll get back to you within 24 hours." });
      } else {
        toast.error("Failed to send", { description: "Please try again." });
      }
    } catch {
      toast.error("Failed to send", { description: "Please try again." });
    }
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[58vh] min-h-[460px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Our studio"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container relative z-10 pb-20 text-background">
          <Eyebrow className="text-background/80">[ Contact Us ]</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-5 max-w-3xl animate-fade-up">
            We'd love to <em className="text-primary-glow">hear from you.</em>
          </h1>
          <p className="mt-6 max-w-xl text-background/80 text-lg animate-fade-up">
            Whether you have a question about our services, want to request a quote,
            or just want to say hello — we're here.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 container">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
                Visit our studio, <em className="text-primary">or send a message.</em>
              </h2>
              <p className="text-soft mt-4 leading-relaxed">
                We're based in East Legon, Accra, and serve homes and businesses
                across the city. Drop by during our working hours or reach out
                anytime — we reply within 24 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="reveal rounded-2xl border border-border bg-surface p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl mt-4">{item.title}</h3>
                    <div className="text-soft text-sm mt-2 space-y-1">
                      {item.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="reveal">
              <p className="text-xs tracking-[0.32em] uppercase text-soft mb-4">Follow us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="grid place-items-center w-12 h-12 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="reveal rounded-3xl bg-surface border border-border p-8 md:p-12">
              {!submitted ? (
                <>
                  <Eyebrow>Send a message</Eyebrow>
                  <h3 className="font-display text-2xl md:text-3xl mt-4">
                    Tell us what you need.
                  </h3>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="https://formspree.io/f/xgodwqjq" method="POST">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="float-field">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=" "
                          required
                        />
                        <label>Your name</label>
                      </div>
                      <div className="float-field">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=" "
                          required
                        />
                        <label>Email address</label>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="float-field">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder=" "
                        />
                        <label>Phone (optional)</label>
                      </div>
                      <div className="float-field">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="bg-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="quote">Request a Quote</option>
                          <option value="services">Services Inquiry</option>
                          <option value="appointment">Book an Appointment</option>
                          <option value="rework">Request Rework</option>
                          <option value="other">Other</option>
                        </select>
                        <label className="!top-0 !text-xs">Subject</label>
                      </div>
                    </div>

                    <div className="float-field">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder=" "
                        rows={5}
                        required
                      />
                      <label>Your message</label>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-primary hover:-translate-y-0.5 transition-all shadow-soft"
                    >
                      <Send className="w-4 h-4" />
                      Send message
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="font-display text-2xl md:text-3xl mt-6">Thank you!</h3>
                  <p className="text-soft mt-4 max-w-md mx-auto">
                    Your message has been sent. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-28 container">
        <div className="reveal rounded-3xl overflow-hidden border border-border h-96">
          <iframe
            title="Studio location"
            className="w-full h-full grayscale-[0.3]"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.18%2C5.62%2C-0.15%2C5.64&layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
