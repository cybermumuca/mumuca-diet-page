import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mumuca Diet - Transforme sua saúde com nossa plataforma gratuita",
  description:
    "Controle sua dieta, macronutrientes, água e muito mais com o Mumuca Diet. 100% gratuito e personalizado para suas necessidades.",
  keywords: [
    "dieta",
    "nutrição",
    "saúde",
    "controle de peso",
    "macronutrientes",
    "plano alimentar",
  ],
  openGraph: {
    type: "website",
    title: "Mumuca Diet - Sua jornada para uma vida mais saudável começa aqui",
    description:
      "Transforme sua relação com a comida. Controle macronutrientes, água, calorias e mais. 100% gratuito!",
    url: "https://www.mumucadiet.com",
    siteName: "Mumuca Diet",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mumuca Diet - Não sobreviva para comer, coma para viver",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumuca Diet - Controle sua dieta gratuitamente",
    description:
      "Gerencie sua nutrição, hidratação e progresso com nossa plataforma completa e gratuita.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
