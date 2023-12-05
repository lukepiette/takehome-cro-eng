import { PureLightTheme } from "./PureLightTheme"
import { NebulaFighterTheme } from "./NebulaFighterTheme"

const themeMap = {
  PureLightTheme,
  NebulaFighterTheme,
}

export default function getTheme(theme) {
  return themeMap[theme]
}
