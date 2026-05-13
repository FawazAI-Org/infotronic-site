import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { Services } from '@/components/services';
import { ClientsServed } from '@/components/clients-served';
import { About } from '@/components/about';
import { WhyWorkWithUs } from '@/components/why-work-with-us';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Infotronic',
    description:
      'Contract software engineering and IT consulting support for recruiters and hiring teams.',
    areaServed: 'United States',
    email: 'contact@infotronic.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Naperville',
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    serviceType: [
      'Contract Software Engineering',
      'Frontend and Backend Development',
      'Cloud and DevOps Consulting',
      'Team Augmentation',
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Section
        id="services"
        title="Contract Focus"
        description="Clear, recruiter-friendly overview of contract-ready capabilities, engagement types, and how we support teams fast."
        muted
      >
        <Services />
      </Section>
      <Section
        id="clients"
        title="Clients Served"
        description="Representative client profiles and contract engagement types across industries."
      >
        <ClientsServed />
      </Section>
      <Section
        id="about"
        title="About"
        description="Who we are, how we work, and why recruiters trust us for contract software roles."
        muted
      >
        <About />
      </Section>
      <Section
        id="why-us"
        title="Recruiter Highlights"
        description="What makes engagement smooth for recruiters and hiring managers in contract scenarios."
      >
        <WhyWorkWithUs />
      </Section>
      <Section
        id="contact"
        title="Engage"
        description="Share the role, timeline, and tech stack, and we will respond quickly with fit, availability, and next steps."
      >
        <Contact />
      </Section>
      <Footer />
    </main>
  );
}
