import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
};

export function Lightbox({ images, index, onClose, onNavigate }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, images.length, onClose, onNavigate]);

  const current = images[index];

  return (
    <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-6 animate-fade-in">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-6 right-6 text-linen p-2 hover:text-accent transition-colors"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        aria-label="Previous"
        onClick={() => onNavigate((index - 1 + images.length) % images.length)}
        className="absolute left-6 text-linen p-2 hover:text-accent transition-colors"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <img
        src={current.src}
        alt={current.alt}
        className="max-h-[85vh] max-w-[90vw] object-contain shadow-elegant"
      />
      <button
        aria-label="Next"
        onClick={() => onNavigate((index + 1) % images.length)}
        className="absolute right-6 text-linen p-2 hover:text-accent transition-colors"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.22em] text-linen/60">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>
    </div>
  );
}
