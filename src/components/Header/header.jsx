import React from "react"
import Navbar from "../Navbar/nav"
import "./header.scss"



const Header = () => {
    return (
        <>

            <Navbar/>
            <div className="container">
                <div className="container-header">
                    <div className="container-fluid">
                        <div className="container-title">
                            <h1 className="title title-name">cédric NGOUNÉ</h1>
                            <h2 className="job-title">Développeur web Javascript/Typescript</h2>
                        </div>
                        <div className="network-social-area">
                            <div className="list-group-network">
                                <span>
                                    <a href="https://twitter.com/cedriconcode" target="_blank" rel="noreferrer">
                                        <li className="rounded-icon fab fa-twitter"/>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://github.com/cedricdollars" target="_blank" rel="noreferrer">
                                        <li className="rounded-icon fab fa-github"/>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/cédric-ngouné-4105bb172/" target="_blank" rel="noreferrer">
                                        <li className="rounded-icon fab fa-linkedin"/>
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header
