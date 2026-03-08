import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import desktopVideo from "../assets/heroDesktopVid.mp4";
import posterImg from "../assets/poster.png";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Track if video is actually moving
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isVideoLoaded ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVideoLoaded]);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative w-24 h-24 flex items-center justify-center">
              {petalArray.map((_, i) => {
                const rotation = i * (360 / numPetals);
                return (
                  <div
                    key={i}
                    className="absolute w-4 h-10 bg-white/80 rounded-[100%] origin-bottom shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    style={{
                      bottom: "50%",
                      transform: `rotate(${rotation}deg) translateY(-8px)`,
                    }}
                  />
                );
              })}
              <div className="absolute w-6 h-6 bg-white rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.div>
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

      {/* --- BACKGROUND VIDEO & POSTER SHIELD --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          onLoadedData={() => setTimeout(() => setIsVideoLoaded(true), 800)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          src={desktopVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        {/* THE SHIELD: This sits over the play button when paused */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.img
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={posterImg}
              alt="Poster"
              onClick={() => videoRef.current?.play()}
              className="absolute inset-0 w-full h-full object-cover z-[1] cursor-pointer"
            />
          )}
        </AnimatePresence>
        {/* Gradient overlay - Always on top of video and poster */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/30 to-background/30 pointer-events-none z-10" />{" "}
      </div>

      {/* --- HERO CONTENT --- */}
      {isVideoLoaded && (
        <motion.div
          initial={{ opacity: 0, x: "200%", rotate: 60 }}
          animate={{ opacity: 1, x: "0%", rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="relative z-10 text-center px-6 sm:max-w-3xl max-w-sm mx-auto bg-white/50 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
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
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
