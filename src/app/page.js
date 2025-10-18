import Section from "./components/Section";
import LeadForm from "./components/LeadForm";
import { FeatureCard } from "./components/FeatureCard";
import { ShieldCheck, ClipboardList, Activity, CheckCircle2, BrainCircuit } from "lucide-react";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">SCAR — Safety & Compliance Report</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          One dashboard for incident reporting, corrective actions, risk assessments, and training compliance.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a className="inline-block rounded-md border px-4 py-2" href="#how-it-works">See how it works</a>
          <a className="inline-block rounded-md bg-black text-white px-4 py-2" href="#early-access">Request early access</a>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section id="how-it-works">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p className="mt-3 text-muted-foreground">
          Safety data lives in spreadsheets, inboxes, and PDFs. Follow-ups get lost. Visibility is low. Culture suffers.
          SCAR brings clarity: one place to capture events, act on them, and prove compliance.
        </p>
      </Section>

      {/* FEATURES */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <FeatureCard title="Incident Reporting" icon={<Activity />}>
            Report in minutes, attach evidence, track status, and notify stakeholders automatically.
          </FeatureCard>
          <FeatureCard title="Corrective Actions" icon={<CheckCircle2 />}>
            Assign owners, due dates, and verification. Nothing slips through the cracks.
          </FeatureCard>
          <FeatureCard title="Training Tracker" icon={<ClipboardList />}>
            Keep training records current, auto-remind refreshers, and export for audits.
          </FeatureCard>
          <FeatureCard title="Risk Assessments" icon={<ShieldCheck />}>
            Identify hazards, controls, and residual risk. Keep assessments alive, not shelved.
          </FeatureCard>
          <FeatureCard title="Zayn (AI Assistant)" icon={<BrainCircuit />}>
            Draft reports, suggest corrective measures, and surface insights from your data.
          </FeatureCard>
        </div>
      </Section>

      {/* GALLERY */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">Preview Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {/* Placeholder gallery items - replace with actual screenshots later */}
          {["1","2","3","4","5","6"].map(n => (
            <div key={n} className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm">Screenshot {n}</div>
                <div className="text-xs">Coming Soon</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FOUNDER NOTE */}
      <Section>
        <h2 className="text-2xl font-semibold mb-2">Why I’m Building SCAR</h2>
        <p className="text-muted-foreground">
          I’ve seen how safety tools focus on ticking boxes instead of building culture. SCAR flips that—clear workflows,
          visible ownership, and real-time feedback so teams learn and improve together.
        </p>
      </Section>

      {/* CTA / FORM */}
      <Section id="early-access" className="border-t">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold">Request Early Access</h2>
            <p className="mt-2 text-muted-foreground">
              Interested in piloting SCAR or seeing a walkthrough? Share a few details and I’ll reach out.
            </p>
          </div>
          <LeadForm />
        </div>
      </Section>

      <Section className="pt-0">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SCAR by Chikwado “Val” Ani</p>
      </Section>
    </>
  );
}