import { createContext } from "react"
import { ThemeProvider, CssBaseline } from "@mui/material"
import getTheme from "./getTheme"

export const ThemeContext = createContext()

const ThemeProviderWrapper = function (props) {
  return (
    <ThemeContext.Provider value={{ themeName: "NebulaFighterTheme" }}>
      <ThemeProvider theme={getTheme("NebulaFighterTheme")}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProviderWrapper
