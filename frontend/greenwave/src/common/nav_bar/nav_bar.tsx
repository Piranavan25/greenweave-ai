import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Liked from "@mui/icons-material/FavoriteBorderOutlined";
import Bag from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: "Sell Now", to: "/", button: true },
    { label: "Sign Up", to: "/Signup", button: false },
    { label: "Log In", to: "/Login", button: false },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fcf9f8ff",
          boxShadow: 1,
          width: "100vw",
        }}
      >
        <Toolbar
          sx={{
            color: "#0c0c0cff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <img src={logo} alt="Site Logo" style={{ height: 50, width: 50 }} />
          </Box>

          {!isMobile ? (
            <>
              {/* Search Bar */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  border: "1px solid #100f0fff",
                  borderRadius: 50,
                  flex: 1,
                  margin: "0 20px",
                  minWidth: 150,
                }}
              >
                <InputBase
                  placeholder="Search..."
                  sx={{
                    color: "#0c0c0cff",
                    padding: "8px 12px",
                    flex: 1,
                    fontSize: "0.9rem",
                  }}
                />
                <IconButton
                  type="submit"
                  sx={{
                    p: "8px",
                    color: "#0c0c0cff",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Box>

              {/* Right Side */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexShrink: 0,
                  justifyContent: "flex-end",
                }}
              >
                <IconButton component={Link} to="/liked" sx={{ color: "inherit" }}>
                  <Liked sx={{ fontSize: 30 }} />
                </IconButton>

                <IconButton component={Link} to="/bag" sx={{ color: "inherit" }}>
                  <Bag sx={{ fontSize: 30 }} />
                </IconButton>

                <Button
                  color="inherit"
                  component={Link}
                  to="/"
                  sx={{
                    backgroundColor: "#302929ff",
                    color: "#f7f2f2ff",
                    padding: "6px 16px",
                    "&:hover": { backgroundColor: "#1a1a1a" },
                  }}
                >
                  Sell Now
                </Button>

                <Button
                  color="inherit"
                  component={Link}
                  to="/Signup"
                  sx={{
                    border: "1px solid #ddd",
                    padding: "6px 16px",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                  }}
                >
                  Sign up
                </Button>

                <Button
                  color="inherit"
                  component={Link}
                  to="/Login"
                  sx={{
                    padding: "6px 16px",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                  }}
                >
                  Log in
                </Button>
              </Box>
            </>
          ) : (
            <>
              {/* Mobile Menu Button */}
              <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>

          {/* Search Bar inside Drawer */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              border: "1px solid #100f0fff",
              borderRadius: 50,
              mb: 2,
            }}
          >
            <InputBase
              placeholder="Search..."
              sx={{
                color: "#0c0c0cff",
                padding: "8px 12px",
                flex: 1,
                fontSize: "0.9rem",
              }}
            />
            <IconButton type="submit" sx={{ p: "8px", color: "#0c0c0cff" }}>
              <SearchIcon />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <List>
            <ListItem disablePadding>
              <IconButton component={Link} to="/liked" onClick={() => setDrawerOpen(false)}>
                <Liked />
              </IconButton>
              <IconButton component={Link} to="/bag" onClick={() => setDrawerOpen(false)}>
                <Bag />
              </IconButton>
            </ListItem>

            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
