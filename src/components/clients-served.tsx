const clients = [
  {
    name: 'Healthcare SaaS Company',
    engagement: 'Frontend modernization contract',
    scope: 'React migration, UI cleanup, and release support',
  },
  {
    name: 'Logistics Technology Firm',
    engagement: 'Platform engineering engagement',
    scope: 'Internal tools, API integrations, and deployment automation',
  },
  {
    name: 'Fintech Product Team',
    engagement: 'Full-stack contractor role',
    scope: 'Feature delivery in Next.js and Node.js with production support',
  },
  {
    name: 'Manufacturing Enterprise',
    engagement: 'Systems integration consulting',
    scope: 'Data workflows, reporting improvements, and process reliability',
  },
  {
    name: 'B2B Services Startup',
    engagement: 'Team augmentation engagement',
    scope: 'Rapid sprint support, bug reduction, and backlog execution',
  },
  {
    name: 'Professional Services Organization',
    engagement: 'Cloud and DevOps advisory',
    scope: 'CI/CD setup, environment standardization, and handoff docs',
  },
];

export function ClientsServed() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {clients.map((client) => (
        <article key={client.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-ink">{client.name}</h3>
          <p className="mt-3 text-sm font-medium text-accent">{client.engagement}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{client.scope}</p>
        </article>
      ))}
    </div>
  );
}
