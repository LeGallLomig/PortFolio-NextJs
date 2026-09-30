export type ParcoursItem ={
    id: number;
    periode: string;
    titre: string;
    lieu: string;
    description: string;
    categorie: "formation" | "experience";
};

export const parcours: ParcoursItem[] = [
    {
        id: 1,
        periode: "2022 - 2024",
        titre: "BTS SIO (Services Informatiques aux Organisations)",
        lieu: "Lycée Jean-Chaptal, Quimper",
        description: "Brevet de technicien Supérieur, option SLAM (Solutions Logicielles et Applications Métiers). Initiation au développement web et à la programmation orientée objet.",
        categorie: "formation",
    },
    {
        id: 2,
        periode: "24/05/2023 - 30/06/2023",
        titre: "Stage Technicien de Niveau 1",
        lieu: "GMVA (Golfe du Morbihan - Vannes Agglomération), Vannes",
        description: "Stage de technicien de niveau 1 dans le service informatique de l'agglomération de Vannes. Maintenance et dépannage des postes informatiques, installation de logiciels, gestion des tickets d'incidents.",
        categorie: "experience",
    }

]
