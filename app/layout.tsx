import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astra Sales India | Healthcare Procurement & Medical Distribution",
  description: "Established in 2005, Astra Sales India provides single-point procurement across 18+ surgical, diagnostic, PPE, pharma, furniture and ICU categories.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
