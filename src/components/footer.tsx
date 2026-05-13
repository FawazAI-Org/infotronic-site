import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-shell flex flex-col gap-3 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src="/infotronic-logo.png"
            alt="Infotronic Systems Inc logo"
            width={220}
            height={60}
            className="h-auto w-44"
          />
          <p className="font-semibold text-ink">Infotronic</p>
          <p>Contract Software Engineering & Delivery</p>
        </div>
        <div className="text-left md:text-right">
          <p>Naperville, IL</p>
          <p>contact@infotronic.com</p>
        </div>
      </div>
    </footer>
  );
}
