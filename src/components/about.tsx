export function About() {
  const highlights = [
    'Contract engagements: short-term delivery, staff augmentation, and project rescue',
    'Primary stack: React, Next.js, TypeScript, Node.js, cloud platforms, and DevOps workflows',
    'Working style: async-friendly communication, weekly updates, clear milestones, and documentation',
    'Location: Naperville, IL (remote-first with onsite flexibility)',
  ];

  return (
    <div className="max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-base leading-8 text-slate-700">
        Infotronic is a contract-focused engineering studio that helps recruiters and hiring managers place experienced talent quickly and confidently.
      </p>
      <p className="mt-4 text-base leading-8 text-slate-700">
        We integrate into existing teams fast, deliver production-grade work, and maintain clean handoffs so projects continue smoothly after contract transitions.
      </p>
      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
        {highlights.map((item) => (
          <li key={item} className="rounded-xl bg-slate-50 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
