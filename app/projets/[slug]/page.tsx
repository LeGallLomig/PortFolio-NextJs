import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projets } from "@/data/projets";

export function generateStaticParams(){
    return projets.map((projet) => ({ slug : projet.slug}));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string}>;    
}): Promise<Metadata> {
    const {slug} = await params;
    const projet = projets.find((p) => p.slug === slug);

    return {title: projet ? '${projet.titre} - Lomig Le Gall ' : "Projet introuvable"};
}

export default async function ProjetPage({
    params,
}: {
    params: Promise<{ slug: string}>;
}) {
    const { slug } = await params;
    const projet = projets.find((p) => p.slug === slug);

    if(!projet) {
        notFound();
    }
    
    return (
        <article className="space-y-6">
            <Link href="/projets" className= "text-sm text-sky-400">
                ← Retour aux projets
            </Link>
            <h1 className="text-3x1 font-bold"> {projet.titre}</h1>
            <ul className="flex flex-wrap gap-2">
                {projet.stack.map((tech) => (
                <li key= {tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    {tech}
                </li>
            ))}
            </ul>
            <p className="text-slate-300"> {projet.description}</p>
            <div className ="flex gap-4 text-sm">
                {projet.lienDemo && (
                    <a href={projet.lienDemo} target="_blank" rel="norereffer" className="text-sky-400 hover:underline">
                        Voir la démo
                    </a>
                )}
                {projet.lienGithub && (
                    <a href={projet.lienGithub} target="_blank" rel="norereffer" className="text-sky-400 hover:underline">
                        Voir le code
                    </a>
                )}
            </div>
        </article>
    );
}