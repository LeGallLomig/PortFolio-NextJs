import { getRepos } from "@/app/lib/github";

export default async function GithubRepos(){
    const repos = await getRepos();

    if(repos.length === 0){
        return (
            <p className= "text-sm text-slate-400">
                Les dépôts Github sont momentanément indisponibles.
            </p>
        );
    }

    return (
        <ul className = "grid gap-4 sm:grid-cols-2">
            {repos.map((repo) =>(
                <li key={repo.id}>
                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="block h-full rounded-lg border border-slate-800 p-4 transition">
                            <h3 className="font-semibold">{repo.name}</h3>
                            <p className="mt-1 text-sm text-slate-300">
                                {repo.description ??"Pas de description."}
                            </p>
                            <p className="mt-3 text-xs text-slate-400">
                                {repo.language ??"—"}· ★ {repo.stargazers_count} ·mis à jour le{" "}
                                {new Date(repo.pushed_at).toLocaleDateString("fr-FR")}
                            </p>
                    </a>
                </li>
            ))}
        </ul>
    )
}