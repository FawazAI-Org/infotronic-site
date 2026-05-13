const services = [
  'Full-Stack Product Delivery',
  'Frontend Engineering (React, Next.js)',
  'Backend APIs (Node.js, REST)',
  'Cloud & DevOps Enablement',
  'Data Integrations & Pipelines',
  'Contract Team Augmentation',
];

export function Services() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <div key={service} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-ink">{service}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Outcome-focused consulting support designed for contract roles with quick ramp-up, ownership of deliverables, and clean transitions back to internal teams.
          </p>
        </div>
      ))}
    </div>
  );
}
