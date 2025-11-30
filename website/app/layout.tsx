import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Auto Serwis COSTA – Mechanik i Klimatyzacja Rzeszów | ★4.8/5",
  description:
    "Profesjonalny serwis samochodowy i klimatyzacji w Rzeszowie. Uczciwe ceny, fachowa diagnoza, 55 opinii 4.8/5 ★. Zadzwoń: 880 378 675.",
  keywords:
    "mechanik Rzeszów, serwis klimatyzacji Rzeszów, naprawa samochodów Rzeszów, auto serwis Rzeszów, diagnostyka komputerowa",
  authors: [{ name: "AUTO SERVICE COSTA" }],
  openGraph: {
    title: "AUTO SERVICE COSTA – Mechanik i Klimatyzacja Rzeszów",
    description: "Profesjonalny serwis samochodowy w Rzeszowie. Ocena 4.8/5 ★",
    type: "website",
    locale: "pl_PL",
    url: "https://autocosta.pl",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="PL-PK" />
        <meta name="geo.placename" content="Rzeszów" />
        <meta name="geo.position" content="50.0520;22.0335" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
