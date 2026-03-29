import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sina Hajeb — Full-Stack Developer",
  description:
    "Computer Science student at UBC Okanagan. Full-stack developer, ML engineer, and cybersecurity learner based in Vancouver, Canada.",
  keywords: [
    "Sina Hajeb",
    "Full Stack Developer",
    "React",
    "Python",
    "FastAPI",
    "Machine Learning",
    "Vancouver",
    "UBC",
    "Portfolio",
  ],
  authors: [{ name: "Sina Hajeb" }],
  openGraph: {
    title: "Sina Hajeb — Full-Stack Developer",
    description:
      "CS student at UBC Okanagan. Building production-grade apps from ML prediction engines to full-stack platforms.",
    url: "https://sinahajeb.com",
    siteName: "Sina Hajeb Portfolio",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sina Hajeb — Full-Stack Developer",
    description:
      "CS student at UBC Okanagan building production-grade full-stack and ML apps.",
  },
  metadataBase: new URL("https://sinahajeb.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
