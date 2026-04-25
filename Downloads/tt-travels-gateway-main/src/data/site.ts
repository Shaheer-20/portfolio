import santorini from "@/assets/dest-santorini.jpg";
import kyoto from "@/assets/dest-kyoto.jpg";
import marrakech from "@/assets/dest-marrakech.jpg";
import norway from "@/assets/dest-norway.jpg";
import tuscany from "@/assets/dest-tuscany.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export type Vehicle = {
  slug: string;
  name: string;
  type: "SUV" | "Sedan" | "Van" | "Bus" | "Luxury";
  capacity: string;
  image: string;
  tagline: string;
  description: string;
  driver: {
    name: string;
    phone: string;
    experience: string;
    image: string;
  };
};

export const vehicles: Vehicle[] = [
  {
    slug: "luxury-suv",
    name: "Range Rover Autobiography",
    type: "SUV",
    capacity: "4 Passengers",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    tagline: "Unmatched comfort for long journeys.",
    description:
      "A premium SUV offering a serene and luxurious ride. Perfect for mountain retreats and coastal drives.",
    driver: {
      name: "Marcus Vale",
      phone: "+1 (555) 019-2837",
      experience: "10 years",
      image: team2,
    },
  },
  {
    slug: "executive-sedan",
    name: "Mercedes-Benz S-Class",
    type: "Sedan",
    capacity: "3 Passengers",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
    tagline: "The standard for executive travel.",
    description:
      "Smooth, quiet, and elegantly appointed. Ideal for city transfers and business travel.",
    driver: {
      name: "Iris Caldera",
      phone: "+1 (555) 928-1736",
      experience: "8 years",
      image: team3,
    },
  },
  {
    slug: "touring-van",
    name: "Mercedes-Benz Sprinter",
    type: "Van",
    capacity: "12 Passengers",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
    tagline: "Spacious travel for groups.",
    description:
      "Custom-fitted for group tours with panoramic windows and captain's chairs for ultimate comfort.",
    driver: {
      name: "David Chen",
      phone: "+1 (555) 283-9102",
      experience: "15 years",
      image: team1,
    },
  },
];

export type Package = {
  slug: string;
  name: string;
  destination: string;
  duration: string;
  nights: number;
  priceFrom: number;
  category: "Coastal" | "Cultural" | "Adventure" | "Wellness";
  image: string;
  summary: string;
  inclusions: string[];
};

export const packages: Package[] = [
  {
    slug: "amalfi-coast-tour",
    name: "The Amalfi Coastal Drive",
    destination: "Italy",
    duration: "7 days",
    nights: 7,
    priceFrom: 4800,
    category: "Coastal",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A private chauffeur-driven journey along the stunning Amalfi coast, with stays in premium hotels.",
    inclusions: [
      "Dedicated luxury SUV and driver",
      "Premium hotel accommodations",
      "Guided coastal tours",
      "Airport transfers",
    ],
  },
  {
    slug: "kyoto-cultural-tour",
    name: "Kyoto Heritage Tour",
    destination: "Japan",
    duration: "9 days",
    nights: 9,
    priceFrom: 6200,
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Explore the ancient capital in comfort with a knowledgeable local driver and guide.",
    inclusions: [
      "Executive sedan transportation",
      "English-speaking driver-guide",
      "Temple and shrine entry fees",
      "Traditional ryokan stays",
    ],
  },
  {
    slug: "atlas-adventure",
    name: "Atlas Mountains 4x4",
    destination: "Morocco",
    duration: "8 days",
    nights: 8,
    priceFrom: 4200,
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&w=1200&q=80",
    summary:
      "An off-road adventure through the Atlas Mountains in a rugged yet luxurious 4x4 vehicle.",
    inclusions: [
      "Fully equipped 4x4 vehicle",
      "Expert desert driver",
      "Luxury desert camp stays",
      "All off-road permits",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "The vehicle was immaculate and our driver was incredibly knowledgeable. The best travel experience we've had.",
    author: "Eleanor & James M.",
    location: "London",
  },
  {
    quote:
      "Having a dedicated driver completely changed how we experienced the country. Zero stress, pure enjoyment.",
    author: "Hiroshi K.",
    location: "Tokyo",
  },
];

export const team = [
  { name: "Tessa Thorne", role: "Transport Director", image: team1 },
  { name: "Marcus Vale", role: "Head Chauffeur", image: team2 },
  { name: "Iris Caldera", role: "Fleet Manager", image: team3 },
];
