import Section from "./components/Section";
import LeadForm from "./components/LeadForm";
import { FeatureCard } from "./components/FeatureCard";
import SmoothScrollButton from "./components/SmoothScrollButton";
import DataFlowParticles from "./components/DataFlowParticles";
import { ShieldCheck, ClipboardList, Activity, CheckCircle2, BrainCircuit } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      
      {/* HERO */}
      <Section variant="hero" className="text-center relative bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041]">
        {/* Data Flow Particles */}
        <DataFlowParticles />
        
        {/* Radial spotlight behind SCAR title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-[radial-gradient(circle_at_center,_#2B3675_0%,_transparent_60%)] opacity-30"></div>
        </div>
        
        {/* SCAR Logo - positioned in top left corner with mobile optimization */}
        <div className="absolute top-4 left-4 z-10">
          <Image 
            src="/scarlogo.png" 
            alt="SCAR Logo" 
            width={160}
            height={160}
            className="scar-logo w-25 h-25 sm:w-30 sm:h-30 md:w-40 md:h-40 object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text text-center relative z-10">
          <div>SCAR</div>
          <div className="text-2xl md:text-3xl font-normal mt-2">Safety & Compliance Report</div>
        </h1>
        <p className="mt-4 text-lg text-secondary">
        A smart, all-in-one platform that helps organizations simplify safety management, streamline incident reporting, and stay compliant with confidence. SCAR connects teams, tracks actions, and turns safety data into meaningful insight all from one intuitive dashboard.
        </p>
        <div className="mt-8 relative overflow-hidden w-full">
          <div className="flex animate-slide-right-to-left touch-pan-x">
            {/* Slide 1: Real-time Analytics */}
            <div className="flex-shrink-0 w-72 sm:w-80 px-4">
              <div className="text-center p-4 rounded-lg glassmorphic-card h-32 flex flex-col justify-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">📊</div>
                <div className="text-sm font-semibold text-primary">Real-time Analytics</div>
                <div className="text-xs text-muted">Live KPIs and safety metrics</div>
              </div>
            </div>
            
            {/* Slide 2: Mobile Reporting */}
            <div className="flex-shrink-0 w-72 sm:w-80 px-4">
              <div className="text-center p-4 rounded-lg glassmorphic-card h-32 flex flex-col justify-center">
                <div className="text-2xl font-bold text-green-400 mb-2">📱</div>
                <div className="text-sm font-semibold text-primary">Mobile Reporting</div>
                <div className="text-xs text-muted">Report incidents instantly</div>
              </div>
            </div>
            
            {/* Slide 3: Risk Assessment */}
            <div className="flex-shrink-0 w-72 sm:w-80 px-4">
              <div className="text-center p-4 rounded-lg glassmorphic-card h-32 flex flex-col justify-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">⚠️</div>
                <div className="text-sm font-semibold text-primary">Risk Assessment</div>
                <div className="text-xs text-muted">5-step evaluation process</div>
              </div>
            </div>
            
            {/* Slide 4: Training Management */}
            <div className="flex-shrink-0 w-72 sm:w-80 px-4">
              <div className="text-center p-4 rounded-lg glassmorphic-card h-32 flex flex-col justify-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">🎓</div>
                <div className="text-sm font-semibold text-primary">Training Management</div>
                <div className="text-xs text-muted">Track compliance records</div>
              </div>
            </div>
            
            {/* Slide 5: Dynamic Inspections */}
            <div className="flex-shrink-0 w-72 sm:w-80 px-4">
              <div className="text-center p-4 rounded-lg glassmorphic-card h-32 flex flex-col justify-center">
                <div className="text-2xl font-bold text-red-400 mb-2">🔍</div>
                <div className="text-sm font-semibold text-primary">Dynamic Inspections</div>
                <div className="text-xs text-muted">Custom checklists</div>
              </div>
            </div>
            
            {/* Slide 6: Progressive Web App */}
            <div className="flex-shrink-0 w-72 sm:w-80 px-4">
              <div className="text-center p-4 rounded-lg glassmorphic-card h-32 flex flex-col justify-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">⚡</div>
                <div className="text-sm font-semibold text-primary">Progressive Web App</div>
                <div className="text-xs text-muted">Works offline</div>
              </div>
            </div>
            
            {/* Duplicate slides for seamless loop */}
            <div className="flex-shrink-0 w-72 sm:w-80 px-4">
              <div className="text-center p-4 rounded-lg glassmorphic-card h-32 flex flex-col justify-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">📊</div>
                <div className="text-sm font-semibold text-primary">Real-time Analytics</div>
                <div className="text-xs text-muted">Live KPIs and safety metrics</div>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-72 sm:w-80 px-4">
              <div className="text-center p-4 rounded-lg glassmorphic-card h-32 flex flex-col justify-center">
                <div className="text-2xl font-bold text-green-400 mb-2">📱</div>
                <div className="text-sm font-semibold text-primary">Mobile Reporting</div>
                <div className="text-xs text-muted">Report incidents instantly</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {/* <a className="inline-block rounded-md glassmorphic-card px-4 py-2 text-primary hover:glassmorphic-button transition-all duration-300" href="#how-it-works">See how it works</a> */}
          <SmoothScrollButton 
            className="inline-block rounded-md glassmorphic-button text-white px-4 py-2 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" 
            href="#early-access"
          >
            Request early access
          </SmoothScrollButton>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section id="how-it-works" variant="default" className="bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041] relative">
        <DataFlowParticles />
        <h2 className="text-2xl font-semibold text-primary">The Problem</h2>
        <p className="mt-3 text-secondary">
        Across many organizations, safety management is still fragmented, buried in spreadsheets, endless email threads, and stacks of paper. Important details get lost, incidents are not reported, follow-ups are missed, and teams spend more time chasing updates than solving problems. Without mobile-friendly tools, capturing incidents as they happen becomes almost impossible.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg glassmorphic-feature-card">
            <h3 className="font-semibold text-red-400 mb-2">📊 Scattered Data</h3>
            <p className="text-sm text-secondary">Safety data spread across multiple systems with no single source of truth</p>
          </div>
          <div className="p-4 rounded-lg glassmorphic-feature-card">
            <h3 className="font-semibold text-yellow-400 mb-2">📱 Mobile Limitations</h3>
            <p className="text-sm text-secondary">Desktop-only systems that don&apos;t work in the field where incidents happen</p>
          </div>
          <div className="p-4 rounded-lg glassmorphic-feature-card">
            <h3 className="font-semibold text-blue-400 mb-2">🔍 Poor Visibility</h3>
            <p className="text-sm text-secondary">No real-time insights into safety performance and compliance status</p>
          </div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section variant="default" className="bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041] relative">
        <DataFlowParticles />
        <h2 className="text-2xl font-semibold mb-6 text-primary">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <FeatureCard title="Real-time Dashboard" icon={<Activity />} highlightColor="blue">
            Live KPIs, incident trends, department rankings, and compliance metrics with interactive charts and analytics.
          </FeatureCard>
          <FeatureCard title="Mobile Incident Reporting" icon={<CheckCircle2 />} highlightColor="blue">
            Report incidents instantly with photo evidence, GPS location, and automatic notifications to stakeholders.
          </FeatureCard>
          <FeatureCard title="Training Management" icon={<ClipboardList />} highlightColor="green">
            Track training records, upload certificates, set expiration reminders, and maintain compliance records.
          </FeatureCard>
          <FeatureCard title="Risk Assessment System" icon={<ShieldCheck />} highlightColor="yellow">
            5-step risk evaluation process with hazard identification, control measures, and residual risk analysis.
          </FeatureCard>
          <FeatureCard title="Dynamic Inspections" icon={<BrainCircuit />} highlightColor="purple">
            Create custom inspection checklists, conduct mobile inspections, and generate compliance reports.
          </FeatureCard>
          <FeatureCard title="Progressive Web App" icon={<ShieldCheck />} highlightColor="blue">
            Works offline, push notifications, haptic feedback, and native app experience on any device.
          </FeatureCard>
        </div>
      </Section>

      {/* DASHBOARD PREVIEW */}
      <Section variant="default" className="bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041] relative">
        <DataFlowParticles />
        <h2 className="text-2xl font-semibold mb-6 text-primary">Live Dashboard Preview</h2>
        <div className="max-w-6xl mx-auto">
          {/* Single large dashboard card */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
            {/* Browser chrome */}
            <div className="p-4 border-b border-slate-700 bg-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-xs text-slate-400">safety-mgt.vercel.app</div>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6 flex-1 h-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-xl font-semibold">Safety Dashboard</h3>
                <div className="text-xs text-slate-400">Last updated: 2 minutes ago</div>
              </div>
              
              {/* Main KPIs grid */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-red-500/20 rounded-lg p-4 text-center border border-red-500/30">
                  <div className="text-red-400 text-2xl font-bold">12</div>
                  <div className="text-xs text-red-300 mt-1">Incidents This Month</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 text-center border border-blue-500/30">
                  <div className="text-blue-400 text-2xl font-bold">88%</div>
                  <div className="text-xs text-blue-300 mt-1">Training Compliance</div>
                </div>
                <div className="bg-yellow-500/20 rounded-lg p-4 text-center border border-yellow-500/30">
                  <div className="text-yellow-400 text-2xl font-bold">8</div>
                  <div className="text-xs text-yellow-300 mt-1">Open Actions</div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4 text-center border border-purple-500/30">
                  <div className="text-purple-400 text-2xl font-bold">5</div>
                  <div className="text-xs text-purple-300 mt-1">Upcoming Inspections</div>
                </div>
              </div>
              
              {/* Charts and analytics section */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left side - Incident trends */}
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h4 className="text-white text-sm font-medium mb-3">Incident Trends</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">January</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-blue-500 rounded"></div>
                        <span className="text-xs text-white">8</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">February</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-red-500 rounded"></div>
                        <span className="text-xs text-white">12</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">March</span>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-2 bg-green-500 rounded"></div>
                        <span className="text-xs text-white">6</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Department rankings */}
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h4 className="text-white text-sm font-medium mb-3">Department Rankings</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">Production</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-green-500 rounded"></div>
                        <span className="text-xs text-green-400">95%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">Maintenance</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-blue-500 rounded"></div>
                        <span className="text-xs text-blue-400">88%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">Quality Control</span>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-2 bg-yellow-500 rounded"></div>
                        <span className="text-xs text-yellow-400">72%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom section - Recent activity */}
              <div className="mt-4 bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                <h4 className="text-white text-sm font-medium mb-3">Recent Activity</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-slate-300">New incident reported: Slip hazard in Warehouse A</span>
                    <span className="text-slate-500 ml-auto">2 min ago</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-300">Training completed: Safety Protocol Update</span>
                    <span className="text-slate-500 ml-auto">15 min ago</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-300">Risk assessment updated: Electrical Panel B</span>
                    <span className="text-slate-500 ml-auto">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-secondary">
            <strong className="text-primary">Live Demo:</strong> Experience the full SCAR application at{" "}
            <a href="https://safety-mgt.vercel.app" className="text-blue-400 underline hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
              safety-mgt.vercel.app
            </a>
          </p>
        </div>
      </Section>

      {/* FOUNDER NOTE */}
      <Section variant="default" className="bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041] relative">
        <DataFlowParticles />
        <h2 className="text-2xl font-semibold mb-6 text-primary">Founder's Note</h2>
        
        {/* Founder's personal message with enhanced styling */}
        <div className="glassmorphic-card p-8 rounded-xl mb-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <Image 
                src="/founder-photo.JPG" 
                alt="Chikwado Ani - SCAR Founder" 
                width={112}
                height={112}
                className="founder-photo w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-blue-400/20"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className=" text-lg leading-relaxed text-secondary mb-4 italic">
                After years managing safety across complex industries, one truth became clear to me: safety management shouldn&apos;t be complicated.
                <br /><br />
                SCAR was built around that belief — a platform where reporting is instant, actions are clear, and everyone from workers to management plays an active role. It transforms compliance into a living culture of safety.
              </div>
              <div className="founder-signature pt-4">
                <p className="text-primary font-semibold text-lg">— Chikwado Valentine Ani</p>
                {/* <p className="text-sm text-muted">Founder & CEO, SCAR</p> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Live demo information */}
        {/* <div className="p-4 rounded-lg glassmorphic-card">
          <p className="text-sm text-secondary">
            <strong className="text-primary">Live Demo:</strong> SCAR is already deployed at <a href="https://safety-mgt.vercel.app" className="text-blue-400 underline hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">safety-mgt.vercel.app</a> with full authentication, database integration, and mobile PWA capabilities.
          </p>
        </div> */}
      </Section>

      {/* TECHNICAL SPECS */}
      <Section variant="default" className="bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041] relative">
        <DataFlowParticles />
        <h2 className="text-2xl font-semibold mb-6 text-primary">Technical Specifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glassmorphic-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-primary">🏗️ Built With Modern Tech</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-secondary">Next.js 15 with React 19</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-secondary">Supabase PostgreSQL Database</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-secondary">Clerk Authentication & Role Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-secondary">Progressive Web App (PWA) with Offline Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-sm text-secondary">30+ API Endpoints for Complete Safety Management</span>
              </div>
            </div>
          </div>
          <div className="glassmorphic-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-primary">📱 Mobile-First Features</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-secondary">Haptic Feedback for Touch Interactions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-secondary">Push Notifications for Real-time Alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-secondary">Offline Mode for Field Work</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-secondary">Photo Evidence with GPS Location</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-sm text-secondary">Native App Installation</span>
              </div> */}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA / FORM */}
      <Section id="early-access" variant="default" className="border-t border-slate-700/30 bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041] relative">
        <DataFlowParticles />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary">Request Early Access</h2>
            <p className="mt-2 text-secondary">
              SCAR is already live and fully functional. Request access to the production system or schedule a personalized demo to see how it can transform your safety management.
            </p>
            <div className="mt-4 p-4 rounded-lg glassmorphic-card">
              <p className="text-sm text-secondary">
                <strong className="text-primary">✅ Production Ready:</strong> SCAR is deployed with full authentication, database integration, and mobile PWA capabilities. No waiting for development!
              </p>
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>

      <Section variant="footer" className="pt-0 bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041] relative">
        <DataFlowParticles />
        <p className="text-xs text-muted">© {new Date().getFullYear()} SCAR by Chikwado &quot;Val&quot; Ani</p>
      </Section>
    </>
  );
}