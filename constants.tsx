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
    name: "Honey", 
    role: "27, Perak", 
    quote: "I used to pay RM200-300 for insurance, but with WeKongsi, I paid less than RM50/month and my RM45,000 surgery was fully covered!" 
  },
  { 
    name: "Muhammad Hanif", 
    role: "Kelantan", 
    quote: "The RM10 clinic visits have been a lifesaver for my family's common flu. My RM75 bill was reduced to just RM10—you can't beat that affordability!",
    receipt: true
  },
  { 
    name: "Syafiq", 
    role: "29, Kelantan", 
    quote: "I canceled my expensive insurance years ago, and I'm so glad I did. When my RM42,000 ankle surgery happened, WeKongsi gave me full support without the overwhelming monthly premiums." 
  },
  { 
    name: "Niena", 
    role: "26, Johor", 
    quote: "My accident bill was RM39,000, and I was so scared it wouldn't be fully covered. WeKongsi handled everything so smoothly—it was total peace of mind for the cost of a few movie tickets a month!" 
  }
];