import React from "react"
import './footer.scss'

const Footer = () => {
    return (
        <>
            <footer className="footer bg-black">
                <div className="box_social_media">
                    <div className="social__links">
                        <a href="https://github.com/cedricdollars?tab=repositories">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/cedriconcode">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/cédric-ngouné-4105bb172/">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                    <strong>©2020 Cédric NGOUNÉ, tous droits réservés</strong>
                </div>
            </footer>
        </>
    )
}
export default Footer
