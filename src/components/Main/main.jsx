import React from "react"
import { Projects } from "./projects"
import "./main.scss"
import {languages} from "./languages";



const Main = () => {
    return (
        <section className="section">
            <div className="wrapper">
                <div className="container-fluid ">
                    <h1 className="title-hero">compétences</h1>
                    <div className="wrapper-skills">
                        <p className="text-skill">Ma boîte à outils de développeur web </p>
                        <div className="content-skills">
                            <div className="content-illustration">
                                <img className="illustration-img" src="https://static.wixstatic.com/media/07893b_a9bbe4b5116647259e1c41b2100f1443~mv2.gif" alt="illustration" />
                            </div>
                            <div className="content-languages-slider">
                                {languages.map((language, index) => (
                                    <img key={index} src={language.image} className="item-img" title={language.title} alt={language.title}/>

                                ))}
                            </div>
                        </div>
                        <div className="content-soft-skills">
                            <p className="text-soft-skill">Compétences annexes</p>
                            <div className="content-element">
                                <span className="circle"/> <p className="skill-item">Résolution de problème</p>
                                <span className="circle"/> <p className="skill-item">Travail d'équipe</p>
                                <span className="circle"/> <p className="skill-item">Prise d'initiative</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper-projects">
                    <h1 className="title-hero">
                        RÉALISATIONS
                    </h1>
                    <div className="container-project">
                        {Projects.map((project) => {
                            return (
                                <div key={project.id} className="card-project">
                                    <div className="card-project-content">
                                        <div className="card-header">
                                            <figure>
                                                <img
                                                    alt={project.title}
                                                    src={
                                                        project.screen
                                                            ? project.screen
                                                            : "no screen"
                                                    }
                                                />
                                            </figure>
                                        </div>
                                        <div className="slide">
                                            <div className="card-body">
                                                <h3 className="title-project">
                                                    {project.title}
                                                </h3>
                                                <h4>{project.description} </h4>
                                                <div className="btn-link">
                                                    <span
                                                        onClick={() =>
                                                            window.open(
                                                                project.githubLink
                                                            )
                                                        }
                                                    >
                                                        Code source
                                                    </span>
                                                    {project.link !== "" ? (
                                                        <span
                                                            onClick={() =>
                                                                window.open(
                                                                    project.link
                                                                )
                                                            }
                                                        >
                                                            Voir le projet
                                                        </span>
                                                    ) : (
                                                        <div/>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Main
