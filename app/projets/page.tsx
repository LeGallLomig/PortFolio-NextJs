import type {Metadata} from "next";
import { projets } from "@/data/projets";
import ProjectCard from "@/components/ProjectCard";
import GithubRepos from "@/components/GithubRepos";

export const metadata : Metadata = {
    title: "Projets - Lomig Le Gall",
};

export default function ProjetsPage() {
    return (
        <div className="space-y-8">
            <section className="space-y-8">
                <h1 className="text-3x1 font-bold">Mes projets</h1>
                <div className="grid gap-6 sm:grid-cols-2">
                    {projets.map((projet) => (
                        <ProjectCard key={projet.id} projet={projet} />
                    ))}
                </div>
            </section> 

            <section className ="space-y-4">
                <h2 className = "text-x1 font-semibold text-sky-400">
                    Derniers dépôts Github
                </h2>
                <GithubRepos/>
            </section>
        </div>
    );
}