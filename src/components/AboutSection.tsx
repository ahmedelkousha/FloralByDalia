import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase text-coral font-sans mb-3">Meet the Founder</p>
        <h2 className="text-4xl font-serif text-foreground mb-6">I'm Dalia</h2>
        <div className="space-y-4 text-muted-foreground font-sans leading-relaxed text-justify">
          <p>
            I'm currently studying pharmacy because I've always cared about helping people. But outside of school, I found another love — flowers.
          </p>
          <p>
            In between classes and long study days, arranging flowers became my little escape. It made me feel calm, creative, and happy. What started as something small just for fun slowly became something I couldn't ignore.
          </p>
          <p>
            I realized that flowers have their own way of making people feel better — sometimes without saying a word.
          </p>
          <p className="font-serif italic text-foreground text-lg">
            That's how Floral by Dalia started — based in Chicago — a simple dream built from love for details, soft colors, and creating moments that feel special.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
