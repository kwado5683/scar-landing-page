import "./globals.css";
import Navbar from "./components/Navbar";

// Viewport configuration for optimal mobile display (especially iPhone 16 Pro)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// Set NEXT_PUBLIC_SITE_URL in production (e.g. https://zayngroup.com) for correct canonical/OG URLs.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "Zayn Group — Recruitment & Software Solutions",
  description:
    "A recruitment and software solutions company operating across care staffing, workforce management, safety systems, and training platforms.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Zayn Group — Recruitment & Software Solutions",
    description:
      "Care staffing, workforce management, safety systems, and training platforms — built for real-world operations.",
    // Add /public/og image when available
  },
  twitter: {
    card: "summary_large_image",
    title: "Zayn Group",
    description: "Recruitment & Software Solutions",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navbar that persists across all pages */}
        <Navbar />
        
        {/* Main content with padding to account for fixed navbar */}
        <main className="pt-18 sm:pt-21 md:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}