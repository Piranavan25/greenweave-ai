import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, Container } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{color:"#060606ff"}}>
            Welcome to MyApp 👋
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Buy and sell your items easily with our marketplace.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Featured Items Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Featured Items
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((item) => (
            <Grid >
              <Card sx={{ 
                borderRadius: 2, 
                boxShadow: 3,
                height: "100%",
                transition: "transform 0.2s",
                '&:hover': {
                  transform: "translateY(-4px)",
                  boxShadow: 6
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>
                    Item {item}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    This is a sample item description with more details about the product.
                  </Typography>
                  <Button variant="outlined" fullWidth>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;