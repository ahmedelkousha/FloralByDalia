import AnimatedSection from "./AnimatedSection";
import bouquets from "@/assets/service-bouquets.jpg";
import wedding from "@/assets/service-wedding.jpg";
import events from "@/assets/service-events.jpg";
import bloombar from "@/assets/service-bloombar.jpg";
import workshops from "@/assets/service-workshops.jpg";
import ringtrays from "@/assets/service-ringtrays.jpg";
import subscription from "@/assets/service-subscription.jpg";

const services = [
  {
    title: "Custom Bouquets",
    description: "Bouquets designed to match your style, colors, and occasion. Each one made with intention, never from a template.",
    image: bouquets,
  },
  {
    title: "Wedding Florals & Bridal Bouquets",
    description: "Bridal bouquets, bridesmaids bouquets, table styling, ceremony aisle florals, backdrops, and custom centerpieces.",
    image: wedding,
  },
  {
    title: "Event Floral Design",
    description: "From engagement parties to corporate events — we transform ordinary spaces into warm, beautiful settings filled with life.",
    image: events,
  },
  {
    title: "Bloom Bar",
    description: "An interactive floral station where guests choose their favorite blooms and create their own mini bouquet. Elegant, unique, and always a favorite.",
    image: bloombar,
  },
  {
    title: "Floral Workshops",
    description: "Hands-on workshops perfect for girls' gatherings, bridal parties, and team-building events. A creative experience filled with positive energy.",
    image: workshops,
  },
  {
    title: "Ring Trays",
    description: "Floral ring trays designed for engagements and wedding ceremonies. A delicate detail that becomes part of your forever memories.",
    image: ringtrays,
  },
  {
    title: "Monthly Subscriptions",
    description: "Weekly or monthly seasonal arrangements delivered to your home or office. Fresh flowers, fresh energy.",
    image: subscription,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6">
    <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-coral font-sans mb-3">What We Offer</p>
          <h2 className="text-4xl font-serif text-foreground">Our Services</h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1}>
            <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/50">
              <div className="aspect-[4/4] overflow-hidden ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{service.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
