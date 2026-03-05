import { Heart, Eye, Ear, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const points = [
  { icon: Heart, text: "Because we truly care." },
  { icon: Eye, text: "We pay attention to the little details." },
  { icon: Ear, text: "We listen more than we speak." },
  { icon: Sparkles, text: "We design every piece as if it's our first." },
];

const WhyUs = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase text-coral font-sans mb-3">The Difference</p>
        <h2 className="text-4xl font-serif text-foreground mb-4">Why Floral by Dalia?</h2>
        <p className="text-muted-foreground font-sans mb-12 text-lg">
          We're not just selling flowers. <span className="italic text-foreground">We're creating moments.</span>
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-8">
        {points.map((point, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="flex items-center gap-4 p-6 bg-blush/40 rounded-2xl text-left">
              <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center shrink-0">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-serif text-lg text-foreground">{point.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
