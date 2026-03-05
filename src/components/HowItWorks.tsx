import { MessageSquare, Palette, FileText, Truck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: MessageSquare, title: "Tell Us", desc: "Share your event or idea with us." },
  { icon: Palette, title: "Design", desc: "We discuss your style, colors, and vision." },
  { icon: FileText, title: "Propose", desc: "We create a clear proposal that fits your needs." },
  { icon: Truck, title: "Deliver", desc: "We design and deliver with care and attention." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-6 bg-cream">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-coral font-sans mb-3">Simple & Smooth</p>
          <h2 className="text-4xl font-serif text-foreground">How It Works</h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <AnimatedSection key={step.title} delay={i * 0.15}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mx-auto mb-4 relative">
                <step.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-coral text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-sans">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Timeline connector (desktop) */}
      <div className="hidden lg:block relative -mt-[7.5rem] mb-16 mx-auto max-w-[calc(100%-8rem)]">
        <div className="h-px bg-border" />
      </div>
    </div>
  </section>
);

export default HowItWorks;
