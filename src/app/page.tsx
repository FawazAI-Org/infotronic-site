import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { WhyWorkWithUs } from '@/components/why-work-with-us';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main>
      <Hero />
      <Section
        id="services"
        title="Services"
        description="Infotronic supports organizations with practical technology consulting across engineering, infrastructure, delivery, and operational execution."
        muted
      >
        <Services />
      </Section>
      <Section
        id="about"
        title="About"
        description="A Naperville-based consulting company helping businesses execute software and infrastructure work with reliability and professionalism."
      >
        <About />
      </Section>
      <Section
        id="why-us"
        title="Why Work With Us"
        description="Infotronic is built around practical delivery, enterprise-aligned communication, and dependable technical execution."
        muted
      >
        <WhyWorkWithUs />
      </Section>
      <Section
        id="contact"
        title="Contact"
        description="Reach out to discuss consulting support, staffing needs, or technology delivery work."
      >
        <Contact />
      </Section>
      <Footer />
    </main>
  );
}
