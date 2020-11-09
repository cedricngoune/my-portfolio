import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header/header"
import Main from "./components/Main/main"
import About from "./components/About/about"

function App() {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <div className="container-app">
            <Header />

            <Main offsetY={offsetY} />
            <About />
        </div>
    )
}

export default App
