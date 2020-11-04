import uuid from "react-uuid"

export const Projects = [{
        id: uuid(),
        title: "WeDev App",
        description: "Accompagnez les freelances et particuliers sur leur projet de A à Z",
        screen: "",
        link: "https://app-wedev.herokuapp.com/",
        stacks: ["React", "Node", "MySQL", "Rest"],
        githubLink: "",
    },
    {
        id: uuid(),
        title: "e-Shop",
        description: "Vous voulez les meubles dans votre appartement? Visitez ce site 👉🏾",
        screen: "",
        link: "https://eshop-mobelia.netlify.app/",
        stacks: ["React/Gastby", "Headless CMS", "GraphQL", "Sass"],
        githubLink: "",
    },
    {
        id: uuid(),
        title: "Password generator",
        description: "Algorithme de génération de mot de passe",
        screen: "",
        stacks: ["Javascript Vanilla", "Css3", "Html"],
        githubLink: "",
    },
    {
        id: uuid(),
        title: "Movie App",
        description: "J'utilise l'API des films pour récupérer les films",
        screen: "",
        stacks: ["React", "Redux", "Css"],
        githubLink: "",
    },
]