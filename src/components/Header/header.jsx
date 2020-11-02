import React from "react"
import Navbar from "../Navbar/nav"
import "./header.scss"
import avatar from "../../assets/images/avatar.png"
import wallpaper from "../../assets/images/wallpaper.jpg"

const Header = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="container-header">
                    <div className="container-title">
                        <h1 className="title">Développeur web Fullstack</h1>
                        <h3 className="subtitle">
                            Hello, Je suis <b>Cédric Ngouné</b>, un vrai
                            passionné du code. Ce portfolio est l'occasion pour
                            moi de partager mes connaissances et mes
                            réalisations.
                        </h3>
                    </div>
                    <figure>
                        <img className="avatar" src={avatar} alt="avatar" />
                    </figure>
                </div>
                <div className="container-illustration">
                    <div className="illustration">
                        <img
                            src={wallpaper}
                            alt="wallpaper"
                            className="img-wallpaper"
                        />
                    </div>
                    <div className="content-description"></div>
                </div>
            </div>
        </>
    )
}

export default Header
