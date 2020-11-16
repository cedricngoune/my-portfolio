import React from "react"
import { Chrono } from "react-chrono"

const Courses = [{
    title: "Mai 2021",
    contentTitle: "Ynov Campus Paris",
    contentText: "Diplôme de RNCP MASTÈRE Expert développement web",
    contentDetailedText: "Préparation du diplôme  de fin d'étude pour Bac + 5",
},
{
    title: "Mai 2020",
    contentTitle: "Ynov Campus Paris",
    contentText: " Mastère 1 en développement web",
    contentDetailedText: "Titulaire et de mon Mastère I en informatique spécialité développement" +
        "web du diplôme  de fin d'étude pour Bac + 5",
},
{
    title: "Mai 2019",
    contentTitle: "3Il",
    contentText: "Mastère en Management des Systèmes d'informations",
    contentDetailedText: "Mastère en management des Systèmes d'informations du diplôme " +
        " de fin d'étude pour Bac + 5",
},
]

const Timeline = () => {
    return (
        <>
             <div style={{ width: "500px", height: "400px" }}>
                <Chrono mode="HORIZONTAL" data={Courses} />
            </div>
        </>
    )
}
export default Timeline
