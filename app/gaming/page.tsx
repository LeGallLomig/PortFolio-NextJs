import type { Metadata } from "next";
import { lolProfile } from "@/data/gaming";

export const metaData : Metadata = {
    title: "Gaming - Lomig Le Gall",
}

export default function GamingPage(){
    return(
        <div className= "space-y-8">
            <h1 className= "text-3xl font-bold">Gaming</h1>
            <p className= "max-w-x1 text-slate-300">
                Je joue à <strong> League of Legends</strong> depuis beaucoup trop longtemps maintenant...
            </p>
            <div className= "rounded-lg border border-slate-800 p-6">
                <p className= "text-sm text-slate-400">
                    Classé Solo/Duo · {lolProfile.serveur}
                </p>
                <p className= "mt-1 text-3xl font-bold text-sky-400">{lolProfile.rang}</p>
                <p className= "mt-1 text-sm text-slate-400">
                    {lolProfile.pseudo} · mis à jour en {lolProfile.misAJour}
                </p>
                <ul className= "mt-4 flex gap-4 text-sm">
                    {lolProfile.liens.map((lien) =>(
                        <li key= {lien.label}>
                            <a
                                href={lien.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sky-400 hover:underline"
                                >
                                    Voir sur {lien.label} →
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}