import { ReactNode } from 'react';

export function Section({ id, title, description, children, muted = false }: {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={muted ? 'bg-slate-50' : 'bg-white'}>
      <div className="section-shell">
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-copy">{description}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
