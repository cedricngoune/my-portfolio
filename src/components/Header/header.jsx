import React from "react"
import Navbar from "../Navbar/nav"
import "./header.scss"
import avatar from "../../assets/images/avatar.png"

const Header = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="container-header">
                    <div className="container-fluid">
                        <div className="container-title">
                            <h1 className="title">cédric Ngouné</h1>
                            <h3 className="description">
                                <span>H</span>ello, Je suis <strong> développeur web </strong>
                                passionné des technologies de l'information et
                                de la communication.
                                <br />
                                <br />
                                Ce <strong>portfolio </strong> est l'occasion
                                pour moi de partager mes connaissances et mes
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
