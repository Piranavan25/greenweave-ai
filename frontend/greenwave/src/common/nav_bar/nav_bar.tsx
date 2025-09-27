import React from "react";
import logo from "../../assets/logo.png"; // Import the image

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", mr: 2 }}
        >
          <img
            src={logo} 
            alt="Site Logo"
            style={{ height: 50, width: 50 }}
          />
        </Box>

        {/* Navigation Buttons */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Profile
        </Button>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.15)",
            padding: "0 8px",
            borderRadius: 1,
            marginLeft: 2,
          }}
        >
          <InputBase
            placeholder="Search..."
            sx={{ color: "inherit", ml: 1, flex: 1 }}
          />
          <IconButton type="submit" sx={{ p: "10px", color: "inherit" }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
