import type { Plan } from "./data.types";

export const plans: Plan[] = [
  {
    name: "Basic",
    price: { monthly: 19.99, annually: 199.99 },
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    featured: false,
  },
  {
    name: "Professional",
    price: { monthly: 24.99, annually: 249.99 },
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    featured: true,
  },
  {
    name: "Master",
    price: { monthly: 39.99, annually: 399.99 },
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    featured: false,
  },
];
