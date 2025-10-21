import "./globals.css";

// Viewport configuration for optimal mobile display (especially iPhone 16 Pro)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata = {
  title: "SCAR — Safety & Compliance Report",
  description: "Simplify incident tracking, corrective actions, and compliance in one dashboard.",
  metadataBase: new URL("https://scar-landing-page.vercel.app/"),
  openGraph: {
    title: "SCAR — Safety & Compliance Report",
    description: "Proactive safety. Clear accountability. Real-time insight.",
    images: ["/scarlogo.png"], // add later
  },
  twitter: { card: "summary_large_image", title: "SCAR", description: "Safety & Compliance Report" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}