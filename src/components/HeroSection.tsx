import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import desktopVideo from "../assets/heroDesktopVid.mp4";
const HeroSection = () => {
  // Replace this with the 11-character ID of your YouTube video
  
  // const videoIdDesktop = "HTFJXo3gCKM";
  // const videoIdMob = "cWl1zKBCHS0";

  // State to track if the iframe has finished loading
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  !isVideoLoaded
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  // Configuration for the flower petals
  const numPetals = 8;
  const petalArray = [...Array(numPetals)];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* --- LOADING SCREEN OVERLAY --- */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
            {/* The Flower Container - Spins endlessly */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative w-24 h-24 flex items-center justify-center">
              {/* The Petals */}
              {petalArray.map((_, i) => {
                // Calculate rotation for each petal (e.g., 360 / 8 = 45deg increments)
                const rotation = i * (360 / numPetals);
                return (
                  <div
                    key={i}
                    // Petal styling: long oval shape, slightly transparent white
                    className="absolute w-4 h-10 bg-white/80 rounded-[100%] origin-bottom shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    style={{
                      bottom: "50%", // Position base at center
                      // Rotate around the center, push out slightly by translateY
                      transform: `rotate(${rotation}deg) translateY(-8px)`,
                    }}
                  />
                );
              })}
              {/* The Flower Center */}
              <div className="absolute w-6 h-6 bg-white rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.div>

            {/* Optional Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-6 text-white/70 font-sans text-xs uppercase tracking-[0.3em]">
              Arranging Blooms...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* -------------------------------- */}

      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* DESKTOP IFRAME */}
        <video
          onLoadedData={() => setTimeout(() => setIsVideoLoaded(true), 800)}
          src={desktopVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* MOBILE IFRAME */}
        {/* <iframe
          src={`https://www.youtube.com/embed/${videoIdMob}?autoplay=1&mute=1&loop=1&playlist=${videoIdMob}&controls=0&showinfo=0&rel=0&playsinline=1&disablekb=1`}
          title="Mobile Background Video"
          allow="autoplay; encrypted-media"
          onLoad={() => setInterval(() => setIsVideoLoaded(true), 1250)}
          className="block sm:hidden absolute top-1/2 left-1/2 w-[100vw] h-[177.77vw] min-h-[100vh] min-w-[56.25vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        /> */}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/30 to-background/30 pointer-events-none" />
      </div>

      {/* Hero Content - Only animate in AFTER video is loaded */}
      {isVideoLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 0, x: "200%", rotate: 60 }}
          animate={{ opacity: 1, y: 0, x: "0%", rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="relative z-10 text-center px-6 sm:max-w-3xl max-w-sm mx-auto bg-white/50 p-8 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col justify-center items-center">
            <p className="text-[0.65rem] sm:text-sm tracking-[0.3em] uppercase bg-white w-fit px-2 sm:px-4 sm:py-[0.1rem] py-[0.2rem] rounded-full text-muted-foreground mb-4 font-sans">
              Creating moments that feel special
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-semibold text-foreground mb-6 leading-tight">
              Floral <span className="italic font-light">by Dalia</span>
            </h1>
            <p className="text-lg text-muted-foreground font-sans max-w-xl mx-auto mb-10 leading-relaxed">
              Thoughtfully designed florals for your most meaningful moments —
              weddings, events, and everyday beauty.
            </p>
            <button
              onClick={scrollToServices}
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-all hover:scale-105 duration-200">
              Explore Our Services
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
