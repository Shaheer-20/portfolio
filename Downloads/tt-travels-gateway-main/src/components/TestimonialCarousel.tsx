import { useEffect, useState } from "react";
import { testimonials } from "@/data/site";

export function TestimonialCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <div className="relative">
      <div key={i} className="animate-fade-in">
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-balance max-w-5xl">
          <span className="text-accent">"</span>
          {t.quote}
          <span className="text-accent">"</span>
        </p>
        <div className="mt-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.22em]">
          <span className="w-12 h-px bg-charcoal/30" />
          <span>{t.author}</span>
          <span className="text-charcoal/40">— {t.location}</span>
        </div>
      </div>
      <div className="mt-12 flex gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Testimonial ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-px transition-all duration-500 ${
              idx === i ? "w-12 bg-charcoal" : "w-6 bg-charcoal/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
