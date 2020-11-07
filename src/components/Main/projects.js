import uuid from "react-uuid"
import imgProject_one from "../../assets/images/screenOne.png"
import imgProject_two from "../../assets/images/screenTwo.png"
import imgProject_three from "../../assets/images/imgProject_three.png"

export const Projects = [{
        id: uuid(),
        title: "WeDev App",
        description: "Accompagnez les freelances et particuliers sur leur projet de A à Z",

        screen: imgProject_one,

        link: "https://app-wedev.herokuapp.com/",
        stacks: ["React", "Node", "MySQL", "Rest"],
        githubLink: "",
    },
    {
        id: uuid(),
        title: "e-Shop",
        description: "Vous voulez les meubles dans votre appartement? Visitez ce site 👉🏾",

        screen: imgProject_two,
        link: "https://eshop-mobelia.netlify.app/",
        stacks: ["React/Gastby", "Headless CMS", "GraphQL", "Sass"],
        githubLink: "https://github.com/cedricdollars/eshop",
    },
    {
        id: uuid(),
        title: "Password generator",
        description: "Algorithme de génération de mot de passe",
        screen: "",

        link: "https://password-app-generator.herokuapp.com/",
        stacks: ["Javascript Vanilla", "Css3", "Html"],
        githubLink: "https://github.com/cedricdollars/password-generator",
    },
    {
        id: uuid(),
        title: "Delivery Eat",
        description: "Petite application de repas et de commandes",
        screen: imgProject_three,
        link: "",
        stacks: ["VueJs", "Css"],
        githubLink: "https://github.com/cedricdollars/vueJs-mini-app",
    },
]