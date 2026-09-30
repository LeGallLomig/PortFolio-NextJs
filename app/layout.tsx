import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title : "Lomig Le Gall - Portfolio",
  description :"Mon parcours, mes projets et mes compétences.",
};

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <NavBar />
        <main className="mx-auto max-w-4x1 px-6 py-12">{children}</main>
      </body>
    </html>
  )
}
