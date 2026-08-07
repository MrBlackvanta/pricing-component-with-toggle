import { BillingToggle, PlanCard } from "@/components";
import { plans } from "@/data";

export default function Home() {
  return (
    <main className="group flex-1 px-6 pt-16 pb-12 text-center lg:pt-18 lg:pb-6">
      <h1 className="text-heading">Our Pricing</h1>

      <BillingToggle />

      <ul role="list" className="v-plans mt-20 lg:mt-16">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </ul>
    </main>
  );
}
