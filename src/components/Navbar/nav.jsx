import React from "react"
import { MenuItem } from "./menuItem"
import { useDispatch, useSelector } from "react-redux"
import "./nav.scss"
import { toggleTheme } from "../theme/redux/actions/themeAction"
import { CgSun } from "react-icons/cg"
import { HiMoon } from "react-icons/hi"


function Nav() {
    const dispatch = useDispatch()
    const toggle = () => dispatch(toggleTheme())
    const currentTheme = useSelector((state) => state.currentTheme)

    const ThemeIcon = (props) => {
        let { theme } = { ...props }
        switch (theme) {
            case "light":
                return <HiMoon size={40} />
            case "dark":
                return <CgSun size={40} />
            default:
                break
        }
    }
    return (
        <nav className="navbar ">
            <div className="container-nav">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <div className="navbar-logo">
                            <button className='toggle' onClick={() => toggle()}>
                                <ThemeIcon
                                    theme={currentTheme.name}
                                />
                            </button>

                            <span>CN</span>
                        </div>
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
