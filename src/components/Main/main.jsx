import React from "react"
import { Stacks } from "./stacks"
import { Projects } from "./projects"

import "./main.scss"

const Main = () => {
    return (
        <section className="section">
            <div className="wrapper">
                <div className="container-hero">
                    <div className="container-fluid">
                        <div className="hero ">
                            <h1 className="title-hero">
                                Projets & Compétences
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="skills-hero">
                    <h2>Mes compétences à votre disposition </h2>
                    <section className="wrapper-skills">
                        <ul className="caroussel">
                            {Stacks.map((stack, index) => {
                                return (
                                    <li key={index} className="card box">
                                        <div className="box-header">
                                            <div className={stack.class}>
                                                <span>
                                                    <img
                                                        src={stack.icon}
                                                        alt="icon-dev"
                                                    />
                                                </span>
                                                <h3>{stack.title} </h3>
                                            </div>
                                        </div>
                                        <div className="box-content">
                                            <p className="text_description">
                                                {stack.description}
                                            </p>
                                            <h5>Stacks utilisés:</h5>
                                            {stack.langages.map(
                                                (langage, key) => (
                                                    <p
                                                        className="skills"
                                                        key={key}
                                                    >
                                                        {langage}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>

                <div className="wrapper-projects">
                    <h2>Quelques Réalisations</h2>
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
                                                        <div></div>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#0099ff"
                    fillOpacity="1"
                    d="M0,64L1440,256L1440,320L0,320Z"
                ></path>
            </svg>
        </section>
    )
}
export default Main
