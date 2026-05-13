const reasons = [
  'Fast ramp-up for contract timelines',
  'Clear weekly status and risk flags',
  'Flexible terms (W2, C2C, 1099)',
  'Remote-first with onsite options',
  'Clean handoffs and documentation',
  'Recruiter-friendly interview and onboarding process',
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
