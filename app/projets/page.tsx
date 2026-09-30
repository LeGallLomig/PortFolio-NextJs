import type {Metadata} from "next";
import { projets } from "@/data/projets";
import ProjectCard from "@/components/ProjectCard";

export const metadata : Metadata = {
    title: "Projets - Lomig Le Gall",
};

export default function ProjetsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3x1 font-bold">Mes projets</h1>
            <div className="grid gap-6 sm:grid-cols-2">
                {projets.map((projet) => (
                    <ProjectCard key={projet.id} projet={projet} />
                ))}
            </div>
        </div>
    );
}