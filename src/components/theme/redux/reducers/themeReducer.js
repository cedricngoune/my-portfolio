import { themes } from "../../theme"
import * as types from "../../constant"

const initialState = {
    currentTheme: {
        name: "light",
        style: themes.light,
    },
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_THEME:
            return {
                ...state,
                currentTheme: toggleTheme(state.currentTheme),
            }
        default:
            return state
    }
}

const toggleTheme = (current) => {
    if (current.name === "light") {
        return {
            name: "dark",
            style: themes.dark,
        }
    }
    return {
        name: "light",
        style: themes.light,
    }
}