import React from "react"
import "./about.scss"
import picture from "../../assets/images/picture.jpg"

const About = () => {
    return (
        <>
            <div className="section">
                <div className="wrapper-section">
                    <h1 className="section-title"> Qui suis-je ? </h1>
                    <div className="section-content">
                        <div className="description">
                            <p>
                                Âgé de 27 ans, j'ai commencé le développement de
                                sites web celà fait plus de 3 ans. J'ai suivi
                                des formations académiques jusqu`à mon Bac + 4.
                                En plus des stages et des projets personnels qui
                                m'ont apporté plus de maturité dans mon travail,
                                aujourd'hui mon objectif est de résoudre des
                                problématiques quotidiens dans le monde qui nous
                                entoure.
                            </p>
                        </div>
                        <figure>
                            <img src={picture} alt="Moi" className="image" />
                        </figure>
                    </div>
                    <div className="section-hobbies">
                        <h2>J'ai aussi des passions  </h2>
                        <ul>
                            <li>Basket</li>
                            <li>Développement personnel</li>
                            <li>Cuisine</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
