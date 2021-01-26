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
                                <p className="header_presentation">
                                    Hello, Je suis
                                    <strong>  développeur web  </strong>
                                    passionné des technologies de l'information
                                    et de la communication.
                                    <br />
                                    <br />
                                    J'ai un fort penchant pour le
                                    <strong> clean code, TDD  </strong>  et tout ce 
                                    qui tourne autour des  pratiques <strong>craft</strong>.
                                </p>
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
