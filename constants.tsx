import { 
  ShieldCheck, 
  Users, 
  Heart, 
  Scale, 
  FileSearch, 
  MapPin, 
  Stethoscope, 
  Activity, 
  Bed, 
  Truck, 
  DollarSign, 
  Thermometer, 
  Pill, 
  Syringe, 
  Microscope, 
  Baby, 
  TrendingUp, 
  Building2, 
  Banknote, 
  Calendar, 
  Shield 
} from 'lucide-react';
import { ChartData, FeatureItem, Testimonial, PlanItem } from './types';

export const HERO_OBJECTIONS = [
  "It's too expensive",
  "I don't think it's important right now",
  "I don't understand how it works",
  "I'm still young and healthy",
  "The terms are too complicated"
];

export const PAIN_POINTS = [
  { 
    title: "Healthcare Is Getting More Expensive", 
    description: "Medical inflation is rising every year, outpacing average income growth.",
    icon: TrendingUp,
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  { 
    title: "Private Hospitals Are Too Expensive", 
    description: "A simple procedure can cost thousands, draining your life savings instantly.",
    icon: DollarSign,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  { 
    title: "Government Hospitals are Overcrowded", 
    description: "Long waiting times can worsen conditions that need immediate attention.",
    icon: Building2,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  { 
    title: "Many Children Have No Protection", 
    description: "Many families leave their kids unprotected due to high insurance premiums.",
    icon: Baby,
    color: "text-rose-500",
    bgColor: "bg-rose-50"
  }
];

export const FEATURES: FeatureItem[] = [
  { title: "Transparency You Can See", description: "Every sen shared is shown in your Monthly Sharing Report.", icon: FileSearch },
  { title: "Affordable for Everyone", description: "Your medical sharing is capped at RM50 a month.", icon: DollarSign },
  { title: "Pure Intention", description: "NO hidden charades or profit margins. Every sen supports real cases.", icon: Heart },
  { title: "Fair for All Ages", description: "Everyone shares the same rate, regardless of age.", icon: Scale },
  { title: "Accountability You Can See", description: "Your sharing is used only for medical sharing. No investments or profit-taking.", icon: ShieldCheck },
  { title: "Wide Access Nationwide", description: "Access to 250+ panel hospitals and 4000+ clinics.", icon: MapPin },
];

export const COVERAGE_ITEMS = [
  { name: "Hospitalization & Surgery", icon: Shield },
  { name: "Room & Board", icon: Bed },
  { name: "Intensive Care Unit (ICU)", icon: Activity },
  { name: "Daily Cash Allowance (Gov. Hospital)", icon: Banknote },
  { name: "Pre & Post Diagnostic Tests", icon: Microscope },
  { name: "Post-Hospital Follow-Up Treatment", icon: Calendar },
  { name: "Accidental Injury Treatment", icon: Truck },
  { name: "Bereavement Support", icon: Heart },
  { name: "Outpatient Cancer Treatment", icon: FileSearch },
  { name: "RM10 Conditional Outpatient Benefit (COB)", icon: Stethoscope },
];

export const CO_PAYMENT_CONDITIONS = [
  "Fever & flu",
  "Gastric issues",
  "Sinus/ENT infections",
  "Bronchitis",
  "Minor wounds & sprains"
];

export const CO_PAYMENT_COVERED = [
  "Consultation Fee",
  "Anaesthetic Fee",
  "Medical Supplies & Services (Equipment, Medicines, Laboratory Test)"
];

export const CO_PAYMENT_NOT_COVERED = [
  "Non-medically necessary treatment",
  "Non-prescribed medical supplies & equipment",
  "Personal Comfort Items",
  "Supplements"
];

export const CHART_DATA: ChartData[] = [
  { month: 'Jan', amount: 39.91 },
  { month: 'Feb', amount: 44.73 },
  { month: 'Mar', amount: 43.77 },
  { month: 'Apr', amount: 22.71 },
  { month: 'May', amount: 46.35 },
  { month: 'Jun', amount: 43.48 },
  { month: 'Jul', amount: 18.56 },
  { month: 'Aug', amount: 31.72 },
  { month: 'Sep', amount: 47.69 },
  { month: 'Oct', amount: 46.84 },
  { month: 'Nov', amount: 48.81 },
  { month: 'Dec', amount: 49.37 },
];

export const MEMBERSHIP_PLANS: PlanItem[] = [
  { name: "Monthly", price: "RM40", period: "/month", details: "Truly Affordable Protection. Costs less than a single cafe outing per month, giving you full access and ultimate flexibility." },
  { name: "Quarterly", price: "RM100", period: "/quarter", details: "Smart saver choice. Save RM80 every year compared to the monthly plan." },
  { name: "Yearly", price: "RM360", period: "/year", details: "Best Value Deal! Save RM120 instantly—that's 3 months of protection for FREE.", highlight: true },
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    name: "Muhammad Hanif", 
    role: "Kelantan", 
    quote: "My RM75 clinic bill dropped to just RM10! That's the power of sharing—real financial relief every time I visit the doctor.",
    receipt: true,
    image: "image23.jpg"
  },
  { 
    name: "Xin Min", 
    role: "19, Perak", 
    quote: "The RM15,000 surgery I desperately needed was made possible by WeKongsi. It lifted a massive financial burden off my parents—the community really had my back.",
    videoUrl: "https://www.youtube.com/watch?v=u2ZxoJHv0oc&t=6s",
    image: "image24.jpg"
  },
  { 
    name: "Honey", 
    role: "27, Perak", 
    quote: "My RM45,000 surgery? Fully covered! It was total peace of mind for paying just RM50 a month, which is a fraction of my old insurance premium.",
    videoUrl: "https://www.youtube.com/watch?v=L8HD1zJEHjc",
    image: "image25.jpg"
  },
  { 
    name: "Niena", 
    role: "26, Johor", 
    quote: "Facing a RM39,000 accident bill was terrifying, but WeKongsi handled everything so smoothly. Zero stress, total peace of mind.",
    videoUrl: "https://www.youtube.com/watch?v=FLR8F-Ohuj8&t=237s",
    image: "image26.jpg"
  },
  { 
    name: "Syafiq", 
    role: "29, Kelantan", 
    quote: "I switched from expensive insurance, and when I needed it, my RM42,000 ankle surgery was fully supported. WeKongsi gave me better value and total support.",
    videoUrl: "https://www.youtube.com/watch?v=u_IKmL7MA5E&t=11s",
    image: "image27.jpg"
  },
  { 
    name: "Ainul & Abdul", 
    role: "35 & 42", 
    quote: "We were skeptical at first, but when our child was admitted, the Guarantee Letter came through fast. Our doubts turned into complete confidence!",
    videoUrl: "https://www.youtube.com/watch?v=9u0jeksr9Ew&t=10s",
    image: "image28.jpg"
  },
  { 
    name: "Mohd Hizam", 
    role: "Referrer", 
    quote: "My member was admitted for severe food poisoning, and the support was immediate. Seeing the claim handled fast proves that WeKongsi delivers real value for my community.",
    image: "image29.jpg"
  },
  { 
    name: "Puan Maslina", 
    role: "Member", 
    quote: "My child was in a motor accident, but because our family of 8 is protected, they got comfortable, fast treatment at a private hospital. We Kongsi covered it all—we are so grateful!",
    image: "image30.jpg"
  }
];