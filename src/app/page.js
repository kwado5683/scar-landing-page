import Link from "next/link";
import Section from "./components/Section";
import SectionDivider from "./components/SectionDivider";
import SmoothScrollButton from "./components/SmoothScrollButton";
import DataFlowParticles from "./components/DataFlowParticles";
import CarouselSlider from "./components/CarouselSlider";
import { FeatureCard } from "./components/FeatureCard";
import SiteFooter from "./components/SiteFooter";
import {
  ShieldCheck,
  UserRound,
  CircleCheck,
  TrendingUp,
  Building2,
  Cpu,
} from "lucide-react";

const carouselItems = [
  ["ZaynCare", "Reliable staffing for care services"],
  ["ZaynShift", "Smart rota & shift management"],
  ["SafeStart", "Workplace safety training platform"],
  ["ZaynCare Academy", "Essential care sector training"],
  ["SCAR", "Safety & compliance reporting system"],
  ["Operations-first", "Built from real-world experience"],
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Section
        variant="hero"
        className="text-center relative flex min-h-[100vh] flex-col justify-center overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero-background.jpg")',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#0B1221]/32 via-[#10182F]/22 to-[#182041]/36"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          <DataFlowParticles />
        </div>

        <div className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-[radial-gradient(circle_at_center,_#2B3675_0%,_transparent_60%)] opacity-15"></div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight gradient-text text-center relative z-10 px-2">
          Recruitment &amp; Software Solutions, Built for Real-World Operations
        </h1>
        <p className="mt-4 text-base sm:text-lg text-secondary px-2 max-w-4xl mx-auto">
          Zayn Group combines care staffing and purpose-built software to help
          organisations run safer, more efficient, and better organised operations.
        </p>

        <CarouselSlider>
          {carouselItems.map(([title, sub], i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 px-2 sm:px-4"
            >
              <div className="text-center p-3 sm:p-4 rounded-lg glassmorphic-card h-28 sm:h-32 flex flex-col justify-center">
                <div className="text-xs sm:text-sm font-semibold text-primary">
                  {title}
                </div>
                <div className="text-[10px] sm:text-xs text-muted mt-1">{sub}</div>
              </div>
            </div>
          ))}
          {carouselItems.map(([title, sub], i) => (
            <div
              key={`b-${i}`}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 px-2 sm:px-4"
            >
              <div className="text-center p-3 sm:p-4 rounded-lg glassmorphic-card h-28 sm:h-32 flex flex-col justify-center">
                <div className="text-xs sm:text-sm font-semibold text-primary">
                  {title}
                </div>
                <div className="text-[10px] sm:text-xs text-muted mt-1">{sub}</div>
              </div>
            </div>
          ))}
        </CarouselSlider>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <SmoothScrollButton
            className="inline-block rounded-md glassmorphic-button-red text-white px-4 py-2 focus:outline-none"
            href="#products-and-services"
          >
            Explore Our Products &amp; Services
          </SmoothScrollButton>
          <Link
            href="/contact"
            className="inline-block rounded-md glassmorphic-card px-4 py-2 text-primary hover:glassmorphic-button transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </Section>

      <SectionDivider />

      {/* WHAT WE DO */}
      <Section
        id="what-we-do"
        variant="tall"
        className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden bg-slate-950"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-[1.08] contrast-[1.05]"
          style={{
            backgroundImage: 'url("/images/how-to-build-a-strong-team.jpg")',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#0B1221]/55 via-[#10182F]/45 to-[#182041]/58"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          <DataFlowParticles />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold text-primary">What We Do</h2>
          <p className="mt-3 text-secondary max-w-3xl">
            Zayn Group delivers staffing and software solutions designed to keep
            organisations running smoothly, from supplying reliable care
            professionals to building systems for scheduling, safety management,
            and training.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg glassmorphic-feature-card">
              <h3 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <Building2 className="w-5 h-5 shrink-0" aria-hidden />
                Recruitment &amp; Staffing
              </h3>
              <ul className="text-sm text-secondary space-y-2 list-disc list-inside">
                <li>Care staffing via ZaynCare</li>
                <li>Reliable, compliant support workers</li>
                <li>Focus on care homes and supported living</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg glassmorphic-feature-card">
              <h3 className="font-semibold text-purple-400 mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 shrink-0" aria-hidden />
                Software &amp; Platforms
              </h3>
              <ul className="text-sm text-secondary space-y-2 list-disc list-inside">
                <li>Shift management</li>
                <li>Safety &amp; compliance systems</li>
                <li>Training platforms</li>
                <li>Built from real operational problems</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* PRODUCTS AND SERVICES */}
      <Section
        id="products-and-services"
        variant="default"
        className="relative flex min-h-[100vh] flex-col bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041]"
      >
        <DataFlowParticles />
        <h2 className="text-2xl font-semibold mb-6 text-primary">
          Products and Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder product URLs — replace # when live links are ready */}
          <FeatureCard
            variant="stacked"
            title="ZaynCare"
            highlightColor="blue"
            ctaLabel="Visit Site"
            ctaHref="#"
            cardBackgroundImage="/images/hr-colleagues-brainstorming.jpg"
          >
            Reliable staffing for care homes and supported living services,
            delivered by trained and compliant support workers.
          </FeatureCard>
          <FeatureCard
            variant="stacked"
            title="ZaynShift"
            highlightColor="green"
            ctaLabel="Visit Site"
            ctaHref="#"
            cardBackgroundImage="/images/zaynshift-hero.png"
          >
            Rota and workforce management software built specifically for care
            agencies and staffing providers.
          </FeatureCard>
          <FeatureCard
            variant="stacked"
            title="SafeStart"
            highlightColor="yellow"
            ctaLabel="Visit Site"
            ctaHref="#"
            cardBackgroundImage="/images/safestart-hero.png"
          >
            Online health and safety training platform designed to keep organisations
            compliant and staff protected.
          </FeatureCard>
          <FeatureCard
            variant="stacked"
            title="ZaynCare Academy"
            highlightColor="purple"
            ctaLabel="Visit Site"
            ctaHref="#"
            cardBackgroundImage="/images/zayncare-academy-hero.png"
          >
            Core training courses for care providers and supported living services,
            covering essential certifications.
          </FeatureCard>
          <FeatureCard
            variant="stacked"
            title="SCAR"
            highlightColor="blue"
            ctaLabel="Visit Site"
            ctaHref="#"
            cardBackgroundImage="/images/scar-dashboard-hero.png"
          >
            A safety and compliance management system for reporting, tracking, and
            improving workplace standards.
          </FeatureCard>
        </div>
      </Section>

      <SectionDivider />

      {/* WHY ZAYN GROUP */}
      <Section
        variant="default"
        className="relative flex min-h-[100vh] flex-col bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041]"
      >
        <DataFlowParticles />
        <h2 className="text-2xl font-semibold mb-6 text-primary">Why Zayn Group</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <FeatureCard title="Built from frontline experience" icon={<UserRound />} highlightColor="blue">
            Shaped by real shifts, real incidents, and real operational pressure.
          </FeatureCard>
          <FeatureCard title="Focused on safety and compliance" icon={<ShieldCheck />} highlightColor="yellow">
            Everything we build and deliver is grounded in safe practice and
            regulatory awareness.
          </FeatureCard>
          <FeatureCard title="Practical, no-nonsense solutions" icon={<CircleCheck />} highlightColor="green">
            Simple systems and services that work without unnecessary complexity.
          </FeatureCard>
          <FeatureCard title="Designed to scale with organisations" icon={<TrendingUp />} highlightColor="purple">
            From single services to multi-site operations, our solutions grow with
            you.
          </FeatureCard>
        </div>
      </Section>

      <SectionDivider />

      {/* FINAL CTA */}
      <Section
        id="work-with-us"
        variant="default"
        className="relative flex min-h-[100vh] flex-col justify-center bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041]"
      >
        <DataFlowParticles />
        <div className="text-center max-w-2xl mx-auto glassmorphic-card p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-primary">Work With Zayn Group</h2>
          <p className="mt-3 text-secondary">
            Whether you need staffing support, operational systems, or both, Zayn
            Group brings together the people and tools to help your organisation run
            more effectively.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md glassmorphic-button-red text-white px-6 py-3 font-medium hover:shadow-lg transition-all duration-300 focus:outline-none"
          >
            Contact Us
          </Link>
        </div>
      </Section>

      <SiteFooter />
    </>
  );
}
