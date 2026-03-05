import { useState, useRef, useEffect } from "react";
import { Instagram, Mail, Phone, ChevronDown, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const services = [
  "Custom Bouquets",
  "Wedding Florals & Bridal Bouquets",
  "Event Floral Design",
  "Bloom Bar",
  "Floral Workshops",
  "Ring Trays",
  "Monthly Subscriptions",
];

const WHATSAPP_NUMBER = "17087177599";

// ─── Custom Select ───────────────────────────────────────────────────────────
interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: string[];
  required?: boolean;
}

const CustomSelect = ({
  value,
  onChange,
  placeholder = "Select an option",
  options,
  required,
}: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
// In CustomSelect, replace the existing open state useEffect or add this one:
useEffect(() => {
  if (open) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
    document.body.classList.add("scroll-locked");
  } else {
    document.body.classList.remove("scroll-locked");
  }

  return () => document.body.classList.remove("scroll-locked");
}, [open]);
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Hidden native input for form required validation */}
      <input
        tabIndex={-1}
        required={required}
        value={value}
        onChange={() => {}}
        style={{
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`
          flex h-10 w-full items-center justify-between rounded-md border border-input
          bg-background/80 px-3 py-2 text-sm ring-offset-background
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          transition-colors
          ${value ? "text-foreground" : "text-muted-foreground"}
        `}>
        <span className="line-clamp-1">{value || placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          className="
            absolute z-50 mt-1 w-full rounded-md border border-border
            bg-popover text-popover-foreground shadow-md
            animate-in fade-in-0 zoom-in-95
            max-h-60 overflow-y-auto
          ">
          <div className="p-1">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={value === option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="
                  relative flex w-full cursor-default select-none items-center
                  rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
                  hover:bg-accent hover:text-accent-foreground
                  focus:bg-accent focus:text-accent-foreground
                  transition-colors
                ">
                {value === option && (
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    <Check className="h-4 w-4" />
                  </span>
                )}
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Contact Section ──────────────────────────────────────────────────────────
const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Floral by Dalia! \n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-blush/30">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <AnimatedSection>
          <p className="text-sm tracking-[0.2em] uppercase text-coral font-sans mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl font-serif text-foreground mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-muted-foreground font-sans mb-8 leading-relaxed">
            Have an event in mind? A vision? Or just a question? We'd love to
            hear from you.
          </p>

          <div className="space-y-4 w-auto">
            <a
              href="mailto:hello@floralbydalia.com"
              className="w-fit flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-sans">
              <Mail className="w-5 h-5" /> hello@floralbydalia.com
            </a>
            <a
              href="tel:+17087177599"
              className="w-fit flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-sans">
              <Phone className="w-5 h-5" /> +1 (708) 717-7599
            </a>
            <a
              href="https://instagram.com/floralbydalia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-sans">
              <Instagram className="w-5 h-5" /> @floralbydalia
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-background/80 border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-background/80 border-border"
            />
            <CustomSelect
              value={form.service}
              onChange={(value) => setForm({ ...form, service: value })}
              placeholder="Select a Service"
              options={services}
              required
            />
            <Textarea
              placeholder="Tell us about your vision..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-background/80 border-border resize-none"
            />
            <Button
              type="submit"
              className="w-full rounded-full tracking-widest uppercase text-sm">
              Send via WhatsApp
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
