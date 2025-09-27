import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const SecondaryNavbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = below 900px
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = ["Women", "Men", "Child", "Brands"];

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fcf9f8ff", width: "100vw" }}
      >
        <Toolbar
          sx={{
            color: "#0c0c0cff",
            display: "flex",
            
            alignItems: "center",
            gap: 1,
          }}
        >
          {!isMobile ? (
            // Desktop View
            <>
              {menuItems.map((item) => (
                <Button key={item} color="inherit">
                  {item}
                </Button>
              ))}
            </>
          ) : (
            // Mobile View - Hamburger Menu
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 200 }}>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SecondaryNavbar;
