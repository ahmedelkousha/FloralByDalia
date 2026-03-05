import { motion } from "framer-motion";
import heroImage from "@/assets/hero-floral.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Beautiful floral arrangement" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto bg-white/50 p-8 rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase bg-white w-fit px-4 rounded-full text-muted-foreground mb-4 font-sans">
            Creating moments that feel special
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-foreground mb-6 leading-tight">
            Floral <span className="italic font-light">by Dalia</span>
          </h1>
          <p className="text-lg text-muted-foreground font-sans max-w-xl mx-auto mb-10 leading-relaxed">
            Thoughtfully designed florals for your most meaningful moments — weddings, events, and everyday beauty.
          </p>
          <button
            onClick={scrollToServices}
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-all hover:scale-105 duration-200"
          >
            Explore Our Services
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
