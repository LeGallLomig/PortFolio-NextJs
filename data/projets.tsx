export type Projet = {
    id : number;
    slug : string;
    titre : string;
    resume : string;
    description : string;
    stack : string[];
    lienDemo : string;
    lienGithub : string;
};

export const projets: Projet[] = [
    {
        id: 1,
        slug: "portfolio-nextjs",
        titre: "Password Analyzer",
        resume : "Page frontEnd réalisé pour analyser un mdp",
        description : 
            "Un petit projet HTML/CSS, JS en cru (sans framework) pour se rappeler les bases de la programmation",
        stack : ["HTML5", "JavaScript", "CSS3"],
        lienGithub : "https://github.com/LeGallLomig/Password-Analyzer",
    },
    {
        id: 2,
    slug: "portfolio-nextjs",
    titre: "Ce portfolio",
    resume: "PortFolio personnel, pour avoir une visualisation plus globale sur mon parcours",
    description:
      "Un portfolio construit avec Next.js et Tailwind CSS, pour présenter mon parcours et mes projets. Connecté à l'API GitHub et à l'API Riot Games.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    lienGithub: "https://github.com/ton-pseudo/mon-portfolio",
    }

