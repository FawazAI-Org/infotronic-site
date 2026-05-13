import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="section-shell py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Image
            src="/infotronic-logo.png"
            alt="Infotronic Systems Inc logo"
            width={360}
            height={148}
            priority
            className="mx-auto h-auto w-72 bg-transparent mix-blend-multiply md:w-80"
          />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Infotronic Contract Engineering</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Software Engineering Contractors for Product and Platform Teams
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We help recruiters and hiring managers place contract engineers quickly for frontend, backend, cloud, and modernization work with clear communication and dependable delivery.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500">
            Fast onboarding • Flexible engagement models • Production-ready handoff
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#contact" className="rounded-xl bg-accent px-6 py-3 text-center font-medium text-white transition hover:bg-accentdark">
              Share a Role
            </a>
            <a href="#services" className="rounded-xl border border-slate-300 px-6 py-3 text-center font-medium text-ink transition hover:border-slate-400 hover:bg-slate-50">
              Contract Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
