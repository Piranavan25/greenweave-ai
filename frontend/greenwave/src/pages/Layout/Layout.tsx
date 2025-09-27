import React from "react";
import type { ReactNode } from "react"; // Add 'type' keyword
import Navbar from "../../common/nav_bar/nav_bar"; 
import SecondaryNavbar  from "../../common/secondary_nav/Sub_nav"; 
import { Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const NAVBAR_HEIGHT = 64; // default MUI AppBar height

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <SecondaryNavbar />
      <Box sx={{ flex: 1, mt: `${NAVBAR_HEIGHT}px` }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
