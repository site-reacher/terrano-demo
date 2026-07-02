import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

export default function FreeEstimate() {
  return (
    <>
      <PageHero
        eyebrow="Free Estimate"
        title="Get a Free Estimate"
        intro="Tell us about your project and we will get back to you. Fill out the form below or call us directly — we are available 24/7 for emergencies."
      />
      <ContactForm />
    </>
  );
}
