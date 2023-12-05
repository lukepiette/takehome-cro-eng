import { Button } from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const StartButton = ({ to, title = "Get Started" }) => {
  return (
    <Button
      href={to}
      variant="outlined"
      sx={{ borderColor: "#824edc", color: "white" }}
      endIcon={<KeyboardArrowRightIcon />}
    >
      {title}
    </Button>
  )
}

export default StartButton
