import {
  ImageIcon,
  Users,
  Download,
  Globe,
  Zap,
  Shield,
  Sparkles,
  Camera,
  Search,
  Heart,
} from "lucide-react";

export const categories = [
  {
    label: "Nature",
    color: "bg-green-100 text-green-600 border-green-200",
  },
  {
    label: "Architecture",
    color: "bg-blue-100 text-blue-600 border-blue-200",
  },
  {
    label: "Travel",
    color: "bg-purple-100 text-purple-600 border-purple-200",
  },
  {
    label: "Food",
    color: "bg-orange-100 text-orange-600 border-orange-200",
  },
  {
    label: "Technology",
    color: "bg-indigo-100 text-indigo-600 border-indigo-200",
  },
  {
    label: "Animals",
    color: "bg-amber-100 text-amber-600 border-amber-200",
  },
  {
    label: "City",
    color: "bg-slate-100 text-slate-600 border-slate-200",
  },
  {
    label: "Ocean",
    color: "bg-cyan-100 text-cyan-600 border-cyan-200",
  },
];

export const stats = [
  {
    icon: ImageIcon,
    label: "Photos Available",
    value: "5M+",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Users,
    label: "Active Users",
    value: "2.4M+",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Download,
    label: "Downloads Daily",
    value: "98K+",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Globe,
    label: "Countries",
    value: "190+",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Instant results powered by Unsplash API with real-time search.",
    color: "text-yellow-800",
    bg: "bg-yellow-100",
    border: "border-yellow-500",
  },
  {
    icon: Shield,
    title: "Free to Use",
    desc: "All photos are free for personal and commercial use.",
    color: "text-emerald-800",
    bg: "bg-emerald-100",
    border: "border-emerald-500",
  },
  {
    icon: Sparkles,
    title: "High Quality",
    desc: "Curated collection of professional-grade photographs.",
    color: "text-blue-800",
    bg: "bg-blue-100",
    border: "border-blue-500",
  },
];

export const heroIcons = [
  { icon: Camera, label: "Capture" },
  { icon: Search, label: "Discover" },
  { icon: Heart, label: "Inspire" },
];
