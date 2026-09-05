import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guitar Kids Brasil | Escola Especializada de Música",
  description: "Escola Especializada no Ensino de música para adultos, crianças e adolescentes. Cursos de Violão, Guitarra, Canto, Piano e mais. Agende sua aula experimental gratuita!",
  keywords: ["escola de música", "aula de violão", "aula de guitarra", "vila mariana", "guitar brasil", "guitar kids", "iniciação musical"],
  openGraph: {
    title: "Guitar Kids Brasil | Aula Experimental Gratuita",
    description: "Metodologia com aprendizagem acelerada: 70% prático e 30% teórico. Conheça nossos cursos na Vila Mariana.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}