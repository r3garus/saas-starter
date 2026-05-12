import { Check } from 'lucide-react';

export const revalidate = 3600;

type Plan = {
  name: string;
  priceText: string;
  trialText: string;
  features: string[];
  cta: string;
};

const plans: Plan[] = [
  {
    name: 'Base',
    priceText: '$19 / user / month',
    trialText: '14 gün ücretsiz deneme',
    features: ['Basic analytics', 'Up to 5 team members', 'Email support'],
    cta: 'Yakında',
  },
  {
    name: 'Plus',
    priceText: '$49 / user / month',
    trialText: '14 gün ücretsiz deneme',
    features: ['Advanced analytics', 'Unlimited team members', 'Priority support'],
    cta: 'Yakında',
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Ödeme altyapısı hazırlanıyor. Şimdilik planları inceleyebilirsiniz.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border p-6">
            <h2 className="text-xl font-medium">{plan.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{plan.trialText}</p>
            <p className="mt-4 text-2xl font-semibold">{plan.priceText}</p>

            <ul className="mt-5 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              disabled
              className="mt-6 w-full rounded-md border px-4 py-2 text-sm opacity-70"
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
