import React from "react"
import { MenuItem } from "./menuItem"
import icon from "../../assets/images/icon.svg"
import "./nav.scss"

function Nav() {
    return (
        <nav className="navbar ">
            <div className="container-nav">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <a href="/">
                            <img src={icon} alt="icon" height="48px" />
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <ul>
                            {MenuItem.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            className={item.class}
                                            href={item.url}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
