import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scrolling when full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-3">
        {/* Container for Layout */}
        <div className="flex items-center z-[50] justify-between relative h-16 md:h-auto md:flex-col md:gap-4">
          {/* 1. Left Spacer (Desktop only / Hidden on mobile for center alignment) */}
          <div className="hidden md:block flex-1" />

          {/* 2. CENTERED LOGO */}
          <div className="md:static absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0">
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1 flex-col">
              <img
                src={logo}
                alt="Floral by Dalia"
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover shadow-sm"
              />
              <span className="font-serif text-lg md:text-xl font-semibold text-foreground tracking-wide whitespace-nowrap">
                Floral <span className="font-light italic">by Dalia</span>
              </span>
            </a>
          </div>

          {/* 3. RIGHT SIDE (Menu Icon) */}
          <div className="flex-1 flex justify-end items-center z-50">
            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Desktop Links (Centered below logo) */}
        <ul className="hidden md:flex items-center justify-center w-fit m-auto gap-8 p-4 bg-white/20 rounded-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`text-xs font-sans tracking-widest uppercase text-black/90 font-[500] ${
                  scrolled ? "text-muted-foreground" : "text-black"
                } hover:text-primary transition-colors`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="absolute top-0 left-0 h-screen w-screen z-[40] bg-background flex flex-col items-center justify-center md:hidden">
            {/* Decorative background element if desired */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" />

            <ul className="flex flex-col items-center gap-8 z-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-2xl font-serif tracking-widest uppercase text-foreground hover:italic transition-all">
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;