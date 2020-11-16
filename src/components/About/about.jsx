import React from "react"
import "./about.scss"

// import Timeline from './Timeline/timeline'

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
                       
                    </div>
                    <section className="section-resume">
                        <h2>Mon parcours </h2>
                        {/* <Timeline /> */}
                   </section>
                </div>
            </div>
        </>
    )
}

export default About
