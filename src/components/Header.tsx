import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "styled-components";

const StyledAppBar = styled(AppBar)`
  background-color: #333 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit">
          My Fabulous Store
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
