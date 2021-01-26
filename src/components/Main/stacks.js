import codeIcon from "../../assets/icons/code.png"
import databaseIcon from "../../assets/icons/database.png"
import modelisationIcon from "../../assets/icons/modelisation.png"
import archiIcon from "../../assets/icons/archi.png"
import testingIcon from "../../assets/icons/testing.png"
import cloudIcon from "../../assets/icons/cloud.png"
import devopsIcon from "../../assets/icons/devops.png"
export const Stacks = [{
        title: "Développement web",
        description: "J'aime réaliser des applications intuitives, avec des idées bien établies",
        langages: [
            "Javascript",
            "Typescript",
            "Python",
            "HTML5",
            "CSS3",
            "PhP",
        ],
        class: "text-skill",
        icon: codeIcon,
    },
    {
        title: "Bases de données",
        description: "J'accorde beaucoup d'importance à la sécurité des données et à leurs disponibilités",
        langages: ["MYSQL", "Postgres", "MongoDB"],
        class: "text-skill",
        icon: databaseIcon,
    },
    {
        title: "Microservices",
        description: "J'aime travailler sur des données exploitables via des API",
        langages: ["GraphQL", "REST"],
        class: "text-skill",
        icon: modelisationIcon,
    },
    {
        title: "Architecture logicielle",
        description: "Je suis très friand des bonnes pratiques de conception logicielle",
        langages: ["Clean architecture", "MVC", "MVVM"],
        class: "text-skill",
        icon: archiIcon,
    },
    {
        title: "Testing",
        description: "J'aime m'assurer que les fonctionnalités attendues ont été réalisé sans bugs",
        langages: ["Mocha/Chai", "PhPUnit"],
        class: "text-skill",
        icon: testingIcon,
    },
    {
        title: "DevOPS",
        description: "Nécessaire pour assurer le cycle de vie de mes applications",
        langages: ["Docker", "Git", "Jenkins"],
        class: "text-skill",
        icon: devopsIcon,
    },
    {
        title: "Cloud",
        description: "Je prends la peine d'héberger des applications sur des serveurs après leur réalisation",
        langages: ["Netlify", "Aws amplify", "Heroku"],
        class: "text-skill",
        icon: cloudIcon,
    },
]