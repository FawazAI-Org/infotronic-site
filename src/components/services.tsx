const services = [
  'Cloud Consulting',
  'DevOps & CI/CD',
  'Infrastructure Automation',
  'Software Engineering',
  'System Integration',
  'Technical Staffing / Consulting Support',
];

export function Services() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <div key={service} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-ink">{service}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Practical consulting support designed to help teams deliver reliable systems, improve operations, and execute technology initiatives with clarity.
          </p>
        </div>
      ))}
    </div>
  );
}
