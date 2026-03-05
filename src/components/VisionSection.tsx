import AnimatedSection from "./AnimatedSection";

const VisionSection = () => (
  <section className="py-24 px-6 bg-blush/50">
    <div className="max-w-3xl mx-auto text-center">
      <AnimatedSection>
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* <div className="h-px w-16 bg-coral/50" />
          <span className="text-coral text-2xl">🌿</span>
          <div className="h-px w-16 bg-coral/50" /> */}
        </div>
        <p className="text-sm tracking-[0.2em] uppercase text-coral font-sans mb-3">
          Our future goals
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
          Our Vision
        </h2>
        <div className="space-y-6 text-muted-foreground font-sans leading-relaxed text-lg">
          <p>
            We believe flowers are more than decoration.
            <br />
            They're a way to say,{" "}
            <span className="italic text-foreground">"I care."</span>
            <br />
            They're the detail that turns a moment into a memory.
          </p>
          <p>
            Our goal is simple: to design florals that reflect{" "}
            <span className="font-semibold text-foreground">you</span> — not us.
          </p>
          <p>
            Every client has their own taste, story, and style.
            <br />
            Our job is to listen first, then create.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px w-[25vw] bg-coral/50" />
          {/* <span className="text-coral text-2xl">💐</span>
          <div className="h-px w-16 bg-coral/50" /> */}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default VisionSection;
