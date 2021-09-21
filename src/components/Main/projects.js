import uuid from "react-uuid"
import imgProject_one from "../../assets/images/screenOne.png"
import imgProject_two from "../../assets/images/screenTwo.png"
import imgProject_three from "../../assets/images/imgProject_three.png"
import Pwd from "../../assets/images/password-keychain.jpeg"
import bikeImg from "../../assets/images/bike_rental.png"
import carParkImg from "../../assets/images/car_park.png"

export const Projects = [{
        id: uuid(),
        title: "WeDev App",
        description: "Une application qui permet d'accompagner les développeurs dans leur projet",
        screen: imgProject_one,
        link: "https://app-wedev.herokuapp.com/",
        stacks: ["React", "NodeJs", "MySQL", "Rest"],
        githubLink: "https://github.com/Floran-mtte/wedev-back",
    },
    {
        id: uuid(),
        title: "E-Shop",
        description: " Le site e-commerce de vente des meubles à des prix exceptionnels",
        screen: imgProject_two,
        link: "https://eshop-mobelia.netlify.app/",
        stacks: ["React/Gastby", "GraphQL", "Netlify"],
        githubLink: "https://github.com/cedricdollars/eshop",
    },
    {
        id: uuid(),
        title: "Password generator",
        description: "Algorithme de génération de mot de passe",
        screen: Pwd,
        link: "https://password-app-generator.herokuapp.com/",
        stacks: ["Javascript ", "Css3", "Html"],
        githubLink: "https://github.com/cedricdollars/password-generator",
    },
    {
        id: uuid(),
        title: "Delivery Eat",
        description: "Delivery Eat est une application  de commande ",
        screen: imgProject_three,
        link: "",
        stacks: ["VueJs", "Css"],
        githubLink: "https://github.com/cedricdollars/vueJs-mini-app",
    },
    {
        id: uuid(),
        title: "Location de vélos",
        description: "Application permettant de trouver des vélos disponibles à proximité",
        screen: bikeImg,
        link: "https://bike-react.netlify.app/",
        stacks: ["Redux/React", "MongoDB", "NodeJS"],
        githubLink: "",
    },
    {
        id: uuid(),
        title: "Gestion de parking",
        description: "Système de gestion et facturation du temps de stationnement dans un parking",
        screen: carParkImg,
        link: "",
        stacks: ["NodeJS", "JWT", "MySQL"],
        githubLink: "https://github.com/cedricdollars/Node.js-API-MVC",
    },
]
