import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="section-shell py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Image
            src="/infotronic-logo.png"
            alt="Infotronic Systems Inc logo"
            width={360}
            height={148}
            priority
            className="mx-auto h-auto w-56 bg-transparent mix-blend-multiply sm:w-64 md:w-80"
          />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">Infotronic Contract Engineering</p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-5xl md:mt-6 md:text-6xl">
            Software Engineering Contractors for Product and Platform Teams
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            We help recruiters and hiring managers place contract engineers quickly for frontend, backend, cloud, and modernization work with clear communication and dependable delivery.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm">
            Fast onboarding • Flexible engagement models • Production-ready handoff
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#contact" className="w-full rounded-xl bg-accent px-6 py-3 text-center font-medium text-white transition hover:bg-accentdark sm:w-auto">
              Share a Role
            </a>
            <a href="#services" className="w-full rounded-xl border border-slate-300 px-6 py-3 text-center font-medium text-ink transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto">
              Contract Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
