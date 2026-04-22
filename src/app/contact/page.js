import Section from "../components/Section";
import LeadForm from "../components/LeadForm";
import DataFlowParticles from "../components/DataFlowParticles";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Contact — Zayn Group",
  description:
    "Get in touch with Zayn Group about staffing, software, or training.",
};

export default function ContactPage() {
  return (
    <>
      <Section
        variant="default"
        constrained
        className="bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041] relative min-h-[60vh]"
      >
        <DataFlowParticles />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-primary">
              Contact Zayn Group
            </h1>
            <p className="mt-3 text-secondary">
              Share a few details about your requirements, and we&apos;ll be in
              touch to discuss how we can support your organisation.
            </p>
          </div>
          <LeadForm />
        </div>
      </Section>

      <SiteFooter />
    </>
  );
}
