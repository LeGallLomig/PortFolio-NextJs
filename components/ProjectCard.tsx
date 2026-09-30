import Link from "next/link";
import type {Projet} from "@/data/projets";

export default function ProjectCard({ projet }: { projet: Projet}) {
    return (
        <Link
            href={'/projets/${projet.slug}'}
            className="block rounded-lg border-slate-800 p-5 transition hover:border-sky-400"
        >
            <h3 className="text-lg font-semibold">{projet.titre}</h3>
            <p className="mt-2 text-sm text-slate-300">{projet.resume}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
                {projet.stack.map((tech) => (
                    <li key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                        {tech}
                    </li>
                ))}
            </ul>
        </Link>
    )
} 