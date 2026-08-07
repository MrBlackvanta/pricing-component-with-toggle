export type Plan = {
  name: string;
  price: { monthly: number; annually: number };
  features: string[];
  featured: boolean;
};
