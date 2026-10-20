const GITHUB_USERNAME = "LeGallLomig";

export type GithubRepo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    pushed_at: string;
    fork: boolean;
}

export async function getRepos(): Promise<GithubRepo[]> {
    try{
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=10`,
            {
                headers : { Accept: "application/vnd.github+json"},
                next: { revalidate: 3600},
            }
        );

        if(!res.ok){
            throw new Error('Gihub a répondu ${res.status}');
        }

        const repos: GithubRepo[] = await res.json();
        return repos.filter((repo) =>!repo.fork).slice(0, 6);
    }catch (error) {
        console.error("Impossible de récupérer les dépôts GitHub :", error);
        return [];
    }
}