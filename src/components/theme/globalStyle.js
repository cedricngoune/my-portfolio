import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
    body {
        background-color: ${(props) => props.theme.background}; 
        transition: all 300ms ease-in-out
    }
    h1, h2, .header_presentation, .about_me {
        color: ${(props) => props.theme.fontColor};
    }
    strong {
        background-color: ${(props) => props.theme.strongColor};
        color: ${(props) => props.theme.fontColor};
    }
    .card-body {
        background-color: ${(props) => props.theme.cardBgColor}
    }
   .toggle {
       color: ${(props) => props.theme.iconColor}
   }
   .navbar-logo span {
       color: ${(props) => props.theme.fontColor}
   }
`