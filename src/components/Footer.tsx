import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Floral by Dalia" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-serif text-xl">
              Floral <span className="italic font-light">by Dalia</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            {[{ href: "#about", label: "About" }, { href: "#services", label: "Services" }, { href: "#how-it-works", label: "How It Works" }, { href: "#contact", label: "Contact" }].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-sans tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href="https://instagram.com/floralbydalia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:hello@floralbydalia.com" aria-label="Email" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm font-sans text-primary-foreground/60">
            © {new Date().getFullYear()} Floral by Dalia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
