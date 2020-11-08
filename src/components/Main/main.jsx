import React, {useState} from "react"
import { Stacks } from "./stacks"
import { Projects } from "./projects"
import wallpaper from "../../assets/images/wallpaper.jpg"

import "./main.scss"

const Main = ({ offsetY }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        console.log(showModal);
        setShowModal(!showModal);
    }
    

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
                    <h2>Mes compétences à disposition </h2>
                    <span>
                        <i className="far fa-brackets-curly"></i>
                    </span>
                    <div className="wrapper-skills">
                        <div className="content">
                            {Stacks.map((stack, index) => {
                                return (
                                    <div key={index} className="content-skills">
                                        <div className={stack.class}>
                                            <h3>{stack.title} </h3>
                                        </div>
                                        <div className="box-languages">
                                            {stack.langages.map(
                                                (langage, key) => (
                                                    <p key={key}>{langage}</p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="wrapper-projects">
                    <h2>Réalisations</h2>
                    <div className="container-project">
                        {Projects.map((project) => {
                            return (
                                <div key={project.id} className="card-project">
                                    <div className="card-project-content">
                                        <h3 className="title-project">
                                            {project.title}
                                        </h3>
                                        <figure>
                                            <img
                                                className="img-project"
                                                alt={project.title}
                                                src={
                                                    project.screen
                                                        ? project.screen
                                                        : wallpaper
                                                }
                                            />
                                        </figure>
                                        <button className="button" onClick={openModal}>
                                            Voir le projet
                                        </button>
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
