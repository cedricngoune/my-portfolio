import React from "react"
import Navbar from "../Navbar/nav"
import Animated from "./animated"
import "./header.scss"
import avatar from "../../assets/images/avatar.png"

const Header = () => {
    
    return (
        <>
            <Navbar />
            <Animated />
            <div className="container">
                <div className="container-header">
                    <div className="container-fluid">
                        <div className="container-title">
                            <h1 className="title">cédric Ngouné</h1>
                            <h3 className="description">
                                Hello, Je suis <span> développeur web </span>
                                passionné des technologies de l'information et
                                de la communication.
                                <br />
                                <br />
                                J'ai un fort penchant pour la
                                <strong> clean code </strong>
                                et les bonnes pratiques de développement.
                                <br />
                                Ce <span>portfolio </span> est l'occasion pour
                                moi de présenter mes connaissances et mes

                                réalisations.
                            </h3>
                        </div>
                    </div>
                    <figure>
                        <img className="avatar" src={avatar} alt="avatar" />
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Header
