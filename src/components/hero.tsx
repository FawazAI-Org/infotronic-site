export function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="section-shell py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Infotronic</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Technology Consulting for Modern Business Systems
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Infotronic provides software engineering, cloud infrastructure, DevOps, and enterprise technology consulting services.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="rounded-xl bg-accent px-6 py-3 text-center font-medium text-white transition hover:bg-blue-700">
              Contact Us
            </a>
            <a href="#services" className="rounded-xl border border-slate-300 px-6 py-3 text-center font-medium text-ink transition hover:border-slate-400 hover:bg-slate-50">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
