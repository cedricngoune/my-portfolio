import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header/header"
import Main from "./components/Main/main"
import About from "./components/About/about"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import { Provider } from "react-redux"
import { themes } from './components/theme/theme'
import { ThemeProvider } from "styled-components"
import GlobalStyle from './components/theme/globalStyle'
import   { store }  from "./components/theme/redux/stores"

function App() {
    
    const [currentTheme, setCurrentTheme] = useState({
        name: "light",
        style: themes.light,
    })
   
    useEffect(() => {
        store.subscribe(() => {
            setCurrentTheme(store.getState().currentTheme)
        })
    }, [currentTheme])

    return (
        <Provider store={store}>
            <ThemeProvider theme={currentTheme.style}>
                <GlobalStyle theme={currentTheme.style} />
                <div className="container-app">
                    <Header />
                    <Main />
                    <About />
                    <Contact />
                    <Footer />
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App
