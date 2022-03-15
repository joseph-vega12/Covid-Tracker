import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CovidIcon from "../Images/CovidIcon.png";

export default function Navbar() {
  const MyAppBar = styled(AppBar)({
    backgroundColor: "#262C7C",
  });

  const MyToolbar = styled(Toolbar)({
    marginLeft: "8%",
  });

  return (
    <nav>
      <MyAppBar position="static">
        <MyToolbar>
          <IconButton size="large" edge="start">
            <img src={CovidIcon} alt="Covid icon" />
          </IconButton>
          <Typography variant="h6" component="div">
            COVID-19
          </Typography>
        </MyToolbar>
      </MyAppBar>
    </nav>
  );
}
