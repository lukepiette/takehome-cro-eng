import { NebulaFighterTheme } from "@components/Layout/ThemeProvider/NebulaFighterTheme"
import { PureLightTheme } from "@components/Layout/ThemeProvider/PureLightTheme"
import { ThemeProvider } from "@mui/material"

export function DarkThemeProvider(props) {
  return <ThemeProvider theme={NebulaFighterTheme} {...props} />
}

export function LightThemeProvider(props) {
  return <ThemeProvider theme={PureLightTheme} {...props} />
}
