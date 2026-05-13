export function Contact() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h3 className="text-2xl font-semibold text-ink">Send contract role details</h3>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Share the role, start date, duration, stack, and interview steps. We will respond quickly with fit, availability, and the right engagement model.
        </p>
        <div className="mt-8 space-y-2 text-sm text-slate-600">
          <p><span className="font-medium text-ink">Location:</span> Naperville, Illinois</p>
          <p><span className="font-medium text-ink">Availability:</span> Contract roles, immediate or scheduled start</p>
          <p><span className="font-medium text-ink">Email:</span> contact@infotronic.com</p>
        </div>
      </div>

      <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Name" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Company / Agency" name="company" className="md:col-span-2" />
          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">Message</label>
            <textarea id="message" name="message" rows={6} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-emerald-100" />
          </div>
        </div>
        <button type="button" className="mt-6 w-full rounded-xl bg-accent px-5 py-3 font-medium text-white transition hover:bg-accentdark sm:w-auto">
          Send Message
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, type = 'text', className = '' }: { label: string; name: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">{label}</label>
      <input id={name} name={name} type={type} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-emerald-100" />
    </div>
  );
}
