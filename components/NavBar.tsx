import Link from "next/link"; // Utilisé à la place de <a> pour charger la page suivante à l'avance et navigue sans recharger tout le site.//

const links = [
    {href : "/", label: "Accueil"},
    {href : "/parcours", label: "Parcours"},
    {href : "/projets", label: "Projets"},
    {href : "/gaming", label: "Gaming"},
];

export default function NavBar() {
    return (
        <header className="border-b border-slate-800">
            <nav className="mx-auto flex max-w-4x1 items-center justify-between px-6 py-4">
                <span className="font-semibold">Lomig Le Gall</span>
                <ul className="flex gap-6 text-sm">
                    {links.map((link)=>( //transforme chaque élément du tableau en élément <li>//
                        <li key={link.href}> 
                            <Link href={link.href} className="hover:text-sky-400">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}