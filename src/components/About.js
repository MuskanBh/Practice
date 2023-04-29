import {
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import * as React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useTypingText } from "./hooks/useTypingText";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';

// const backgroundImage = "";
const boxSX = {
  mr: "5vh",
  ml: "5vh",
  "&:hover": {
    cursor: "pointer",
    color: "#1976d2",
  },
};

export default function ProductHero() {
  const { word } = useTypingText(
    [
      "Graphic Designer.",
      "UI/UX Designer.",
      "Frontend Developer.",
      "Full Stack Developer.",
      "Learner.",
    ],
    130,
    20
  );
  // const profileImage = process.env.PUBLIC_URL + "/615A2741.jpg";
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      {/* Increase the network loading priority of the background image. */}
      {/* <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      /> */}
      <Box align="center">
        <Typography color="primary" align="center" variant="h3" marked="center">
          Hi, I am Muskan Bharalawala 👋
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="h4"
          sx={{ mb: 4, mt: { xs: 2, sm: 5 } }}
        >
          {" "}
          I am a {word}
        </Typography>
        <Container>
        <Typography variant="h6">
          Based out of Odisha, I am currently working remotely as a Fullstack Developer for Dell Technologies.
        </Typography>
        </Container>
        
      </Box>

      {/* <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={profileImage}
        title="Muskan Bharalawala"
      />
    </Card>
      </Grid> */}
      <Box align="center" sx={{ mt: "5vh" }}>
        <GitHubIcon sx={boxSX} />
        <LinkedInIcon sx={boxSX} />
        <EmailIcon sx={boxSX} />
        <PhoneIcon sx={boxSX} />
        <Typography variant="h5" color="primary" sx={{ mt: 10 }}>
          Explore More
        </Typography>
        <KeyboardDoubleArrowDownIcon color="primary" />
      </Box>
    </Grid>
  );
}
