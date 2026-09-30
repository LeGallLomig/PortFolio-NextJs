import type { Metadata } from "next";
import { parcours } from "@/data/parcours";
import TimeLineItem from "@/components/TimeLineItem";

export const metadata: Metadata = {
    title: "Parcours - Lomig Le Gall",
};

export default function ParcoursPage() {
    const formations = parcours.filter((p) => p.categorie ==="formation");
    const experiences = parcours.filter((p) => p.categorie ==="experience");

    return (
        <div className="space-y-12">
            <h1 className="text-3xl font-bold">Mon parcours</h1>

            <section>
                <h2 className="mb-6 text-xl font-semibold text-sky-400">Formations</h2>
                <ol>
                    {formations.map((item) => (
                        <TimeLineItem key={item.id} item={item} />
                    ))}
                </ol>
            </section>

            <section>
                <h2 className="mb-6 text-xl font-semibold text-sky-400">Expériences</h2>
                <ol>
                    {experiences.map((item) => (
                        <TimeLineItem key={item.id} item={item} />
                    ))}
                </ol>
            </section>
        </div>
    );
}   