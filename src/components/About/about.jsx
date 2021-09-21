/* eslint-disable max-len */
import React from "react"
import "./about.scss"
import picture from "../../assets/images/pp.jpeg"


const About = () => {
    return (
        <>
            <div className="section">
                <div className="wrapper-section">
                    <h1 className="title-hero"> Qui suis-je ? </h1>
                    <div className="section-content">
                        <div className="about_me">
                            <p>
                                J'ai 27 ans, je suis passionné par
                                l'informatique cela fait quelques années. Je me
                                suis intéressé depuis peu aux bonnes pratiques
                                que j'ai découvert à travers en écoutant des
                                podcast, en assistant aux conférences et grace
                                au livre de
                                <strong> Robert C.Martin </strong>.
                            </p>
                            <div className="hobbies_section">
                                <h4>
                                    Il n'ya pas que le code, j'ai des hobbies 😁
                                </h4>
                            </div>
                        </div>
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="#000000"
                                 d="M41.7,-65.6C55.4,-56.1,68.7,-46.8,75.4,-33.9C82.1,-21,82.2,-4.6,81.2,12.6C80.1,29.7,77.8,47.6,68.1,59.2C58.4,70.9,41.2,76.4,24.5,79.4C7.8,82.5,-8.4,83.2,-23.7,79.4C-39,75.5,-53.3,67,-65.2,55.4C-77.1,43.7,-86.7,28.7,-87.2,13.6C-87.7,-1.5,-79.1,-16.9,-71,-31.6C-63,-46.2,-55.3,-60.2,-43.6,-70.5C-31.8,-80.8,-15.9,-87.4,-0.9,-85.9C14,-84.5,28.1,-75,41.7,-65.6Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                        <figure>
                            <img src={picture} alt="me" />
                        </figure>
                    </div>

                    <section className="section-resume">
                        <h2>Mon parcours </h2>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About
