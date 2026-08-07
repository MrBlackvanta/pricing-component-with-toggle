export default function BillingToggle() {
  return (
    <div className="mt-10 flex items-center justify-center gap-6">
      <span>Annually</span>

      <label className="v-toggle">
        <input
          type="checkbox"
          role="switch"
          aria-label="Bill annually"
          className="peer sr-only"
        />
        <span className="v-toggle-knob" />
      </label>

      <span>Monthly</span>
    </div>
  );
}
