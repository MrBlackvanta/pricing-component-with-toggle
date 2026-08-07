import type { Plan } from "@/data";
import { cn } from "@/lib";

export default function PlanCard({ name, price, features, featured }: Plan) {
  return (
    <li
      className={cn("v-card", {
        "v-card-plain": !featured,
        "v-card-featured": featured,
      })}
    >
      <h2 className="text-plan">{name}</h2>

      <p
        className={cn(
          "mt-6 flex items-center justify-center gap-2 text-dark-grayish-blue",
          { "text-white": featured },
        )}
      >
        <span className="text-currency">$</span>
        <span className="text-price group-has-checked:hidden">
          {price.monthly.toFixed(2)}
        </span>
        <span className="hidden text-price group-has-checked:inline">
          {price.annually.toFixed(2)}
        </span>
        <span className="sr-only group-has-checked:hidden"> per month</span>
        <span className="sr-only hidden group-has-checked:inline">
          {" "}
          per year
        </span>
      </p>

      <ul role="list" className="v-features">
        {features.map((feature) => (
          <li key={feature} className="py-3">
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={cn("v-btn", {
          "v-btn-plain": !featured,
          "v-btn-featured": featured,
        })}
      >
        Learn More<span className="sr-only"> about {name}</span>
      </a>
    </li>
  );
}
