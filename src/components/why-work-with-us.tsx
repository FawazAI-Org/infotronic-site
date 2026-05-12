const reasons = [
  'Enterprise-focused delivery',
  'Cloud and infrastructure experience',
  'Flexible consulting support',
  'Reliable communication',
  'Practical engineering solutions',
];

export function WhyWorkWithUs() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {reasons.map((reason) => (
        <div key={reason} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <p className="font-medium text-ink">{reason}</p>
        </div>
      ))}
    </div>
  );
}
