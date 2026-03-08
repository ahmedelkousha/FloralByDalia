// import AnimatedSection from "./AnimatedSection";

// const VisionSection = () => (
//   <section className="py-24 px-6 bg-blush/50">
//     <div className="max-w-3xl mx-auto text-center">
//       <AnimatedSection>
//         <div className="flex items-center justify-center gap-4 mb-8">
//           {/* <div className="h-px w-16 bg-coral/50" />
//           <span className="text-coral text-2xl">🌿</span>
//           <div className="h-px w-16 bg-coral/50" /> */}
//         </div>
//         <p className="text-sm tracking-[0.2em] uppercase text-coral font-sans mb-3">
//           Our future goals
//         </p>

//         <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
//           Our Vision
//         </h2>
//         <div className="space-y-6 text-muted-foreground font-sans leading-relaxed text-lg">
//           <p>
//             We believe flowers are more than decoration.
//             <br />
//             They're a way to say,{" "}
//             <span className="italic text-foreground">"I care."</span>
//             <br />
//             They're the detail that turns a moment into a memory.
//           </p>
//           <p>
//             Our goal is simple: to design florals that reflect{" "}
//             <span className="font-semibold text-foreground">you</span> — not us.
//           </p>
//           <p>
//             Every client has their own taste, story, and style.
//             <br />
//             Our job is to listen first, then create.
//           </p>
//         </div>
//         <div className="flex items-center justify-center gap-4 mt-8">
//           <div className="h-px w-[25vw] bg-coral/50" />
//           {/* <span className="text-coral text-2xl">💐</span>
//           <div className="h-px w-16 bg-coral/50" /> */}
//         </div>
//       </AnimatedSection>
//     </div>
//   </section>
// );

// export default VisionSection;

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const VisionSection = () => (
  <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-blush/60 via-cream/40 to-background">
    {/* Floating decorative accents */}
    <motion.div
      className="absolute top-16 left-[10%] w-3 h-3 rounded-full bg-coral/30"
      animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-32 right-[15%] w-2 h-2 rounded-full bg-sage/40"
      animate={{ y: [0, 14, 0], opacity: [0.3, 0.7, 0.3] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
    <motion.div
      className="absolute bottom-20 left-[20%] w-4 h-4 rounded-full bg-coral/20"
      animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute bottom-32 right-[12%] w-2.5 h-2.5 rounded-full bg-forest/15"
      animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    />

    <div className="max-w-3xl mx-auto">
      {/* Card container */}
      <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl px-8 py-14 md:px-14 md:py-18 shadow-[0_8px_40px_-12px_hsl(var(--coral)/0.15)]">
        {/* Top decorative line */}
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-coral/50" />
            <motion.span
              className="text-coral text-2xl"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              🌿
            </motion.span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-coral/50" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-12 text-center tracking-wide">
            Our Vision
          </h2>
        </AnimatedSection>

        {/* First paragraph */}
        <AnimatedSection delay={0.2}>
          <p className="text-center text-muted-foreground font-sans leading-relaxed text-lg mb-8">
            We believe flowers are more than decoration.
            <br />
            They're a way to say,
          </p>
        </AnimatedSection>

        {/* Pull quote */}
        <AnimatedSection delay={0.35}>
          <div className="relative my-10 text-center">
            <span className="absolute -top-6 left-1/2 -translate-x-10 text-5xl text-coral/25 font-serif select-none">
              "
            </span>
            <p className="text-3xl md:text-4xl font-serif italic text-foreground tracking-wide">
              I care.
            </p>
            <span className="absolute -bottom-4 left-1/2 translate-x-4 text-5xl text-coral/25 font-serif select-none">
              "
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.45}>
          <p className="text-center text-muted-foreground font-sans leading-relaxed text-lg mt-8 mb-6">
            They're the detail that turns a moment into a{" "}
            <span className="font-semibold text-foreground">memory</span>.
          </p>
        </AnimatedSection>

        {/* Thin divider */}
        <AnimatedSection delay={0.55}>
          <div className="flex justify-center my-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-coral/40 to-transparent" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <p className="text-center text-muted-foreground font-sans leading-relaxed text-lg mb-6">
            Our goal is simple: to design florals that reflect{" "}
            <span className="font-serif text-xl text-foreground italic">
              you
            </span>{" "}
            — not us.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <p className="text-center text-muted-foreground font-sans leading-relaxed text-lg">
            Every client has their own taste, story, and style.
            <br />
            Our job is to{" "}
            <span className="text-foreground font-semibold">listen first</span>,
            then create.
          </p>
        </AnimatedSection>

        {/* Bottom decorative line */}
        <AnimatedSection delay={0.8}>
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-coral/50" />
            <motion.span
              className="text-coral text-2xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              💐
            </motion.span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-coral/50" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default VisionSection;
