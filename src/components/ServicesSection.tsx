import AnimatedSection from "./AnimatedSection";
// Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Your image imports
import cb1 from "@/assets/custom-bouquets/cb1.jpg";
import cb2 from "@/assets/custom-bouquets/cb2.jpg";
import cb3 from "@/assets/custom-bouquets/cb3.jpg";
import cb4 from "@/assets/custom-bouquets/cb4.jpeg";
import cb5 from "@/assets/custom-bouquets/cb5.jpg";
import cb6 from "@/assets/custom-bouquets/cb6.jpg";
import cb7 from "@/assets/custom-bouquets/cb7.jpg";
import cb8 from "@/assets/custom-bouquets/cb8.jpg";

import wedding1 from "@/assets/wedding-bridal/wedding1.jpg";
import wedding2 from "@/assets/wedding-bridal/wedding2.jpg";
import wedding3 from "@/assets/wedding-bridal/wedding3.jpg";
import wedding4 from "@/assets/wedding-bridal/wedding4.jpg";
import wedding5 from "@/assets/wedding-bridal/wedding5.jpg";
import wedding6 from "@/assets/wedding-bridal/wedding6.jpg";
import wedding7 from "@/assets/wedding-bridal/wedding7.jpg";
import wedding8 from "@/assets/wedding-bridal/wedding8.jpg";

import event1 from "@/assets/event/event1.jpg";
import event2 from "@/assets/event/event2.jpg";
// import event3 from "@/assets/event/event3.jpg";
import event4 from "@/assets/event/event4.jpg";
import event5 from "@/assets/event/event5.jpg";
import event6 from "@/assets/event/event6.jpg";
import event7 from "@/assets/event/event7.jpg";
// import event8 from "@/assets/event/event8.jpg";
// import event9 from "@/assets/event/event9.png";

import bloombar1 from "@/assets/bloom-bar/bloom1.jpg";
import bloombar2 from "@/assets/bloom-bar/bloom2.jpg";
import bloombar3 from "@/assets/bloom-bar/bloom3.jpg";
import bloombar4 from "@/assets/bloom-bar/bloom4.jpg";
import bloombar5 from "@/assets/bloom-bar/bloom5.jpg";
import bloombar6 from "@/assets/bloom-bar/bloom6.jpg";
import bloombar7 from "@/assets/bloom-bar/bloom7.jpg";
import bloombar8 from "@/assets/bloom-bar/bloom8.jpg";

import ws1 from "@/assets/workshop/ws1.jpg";
import ws2 from "@/assets/workshop/ws2.jpg";
import ws3 from "@/assets/workshop/ws3.jpg";
// import ws4 from "@/assets/workshop/ws4.jpg";
// import ws5 from "@/assets/workshop/ws5.jpg";
import ws6 from "@/assets/workshop/ws6.jpg";
// import ws7 from "@/assets/workshop/ws7.jpg";
import ws8 from "@/assets/workshop/ws8.jpg";

import rt1 from "@/assets/ring-tray/rt1.jpg";
import rt2 from "@/assets/ring-tray/rt2.jpg";
import rt3 from "@/assets/ring-tray/rt3.jpg";
import rt4 from "@/assets/ring-tray/rt4.jpg";

import sub1 from "@/assets/subscription/sub1.jpg";
import sub2 from "@/assets/subscription/sub2.jpg";
import sub3 from "@/assets/subscription/sub3.jpg";
import sub4 from "@/assets/subscription/sub4.png";
import sub5 from "@/assets/subscription/sub5.jpg";
import sub6 from "@/assets/subscription/sub6.jpg";
import sub7 from "@/assets/subscription/sub7.jpg";

const services = [
  {
    title: "Custom Bouquets",
    description:
      "Bouquets designed to match your style, colors, and occasion. Each one made with intention, never from a template.",
    images: [cb1, cb2, cb3, cb4, cb5, cb6, cb7, cb8],
  },
  {
    title: "Wedding Florals & Bridal Bouquets",
    description:
      "Bridal bouquets, bridesmaids bouquets, table styling, ceremony aisle florals, backdrops, and custom centerpieces.",
    images: [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6, wedding7, wedding8],
  },
  {
    title: "Event Floral Design",
    description:
      "From engagement parties to corporate events — we transform ordinary spaces into warm, beautiful settings filled with life.",
    images: [event1, event2,  event4, event5, event6, event7 /* event3, event8, event9 are removed due to quality issues */],
  },
  {
    title: "Bloom Bar",
    description:
      "An interactive floral station where guests choose their favorite blooms and create their own mini bouquet. Elegant, unique, and always a favorite.",
    images: [bloombar1, bloombar2, bloombar3, bloombar4, bloombar5, bloombar6, bloombar7, bloombar8],
  },
  {
    title: "Floral Workshops",
    description:
      "Hands-on workshops perfect for girls' gatherings, bridal parties, and team-building events. A creative experience filled with positive energy.",
    images: [ws1, ws2, ws3, ws6, ws8, /* ws4, ws5, ws7 are removed due to quality issues */],
  },
  {
    title: "Ring Trays",
    description:
      "Ring trays designed for engagements and wedding ceremonies. A delicate detail that becomes part of your forever memories.",
    images: [rt1, rt2, rt3, rt4],
  },
  {
    title: "Monthly Subscriptions",
    description:
      "Weekly or monthly seasonal arrangements delivered to your home or office. Fresh flowers, fresh energy.",
    images: [sub1, sub2, sub3, sub4, sub5, sub6, sub7],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6">
    <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-coral font-sans mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl font-serif text-foreground">Our Services</h2>
        </div>
      </AnimatedSection>

      {/* Added grid-cols-1 here for mobile clarity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          /* Wrapped AnimatedSection in a div with min-w-0 w-full to prevent grid blowout */
          <div key={service.title} className="min-w-0 w-full">
            <AnimatedSection delay={i * 0.1}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/50 flex flex-col h-full">
                {/* Swiper Container */}
                <div className="aspect-[4/4] overflow-hidden relative w-full">
                  <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                    className="w-full h-full">
                    {service.images.map((imgSrc, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={imgSrc}
                          alt={`${service.title} - view ${index + 1}`}
                          /* Removed the hover scale effect specifically from mobile so it doesn't stick after swiping */
                          className="w-full h-full object-cover object-center sm:group-hover:scale-105 transition-transform duration-500"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-serif text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
