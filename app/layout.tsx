import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ||
        "https://www.ouvrir-un-restaurant.fr"
    ),

  title: {
    default: "Ouvrir un Restaurant",
    template: "%s | Ouvrir un Restaurant",
  },

  description:
    "Analyse de la concurrence des restaurants et opportunités d’implantation par ville.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
