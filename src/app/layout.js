import "./globals.css";

export const metadata = {
  title: "SCAR — Safety & Compliance Report",
  description: "Simplify incident tracking, corrective actions, and compliance in one dashboard.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "SCAR — Safety & Compliance Report",
    description: "Proactive safety. Clear accountability. Real-time insight.",
    images: ["/og.png"], // add later
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