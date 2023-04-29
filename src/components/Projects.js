import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {
  Card,
  Typography,
  Toolbar,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Projects() {
  return (
    <>
      <Toolbar
        sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "primary" }}
      ></Toolbar>
      <Typography variant="h5" color="primary" sx={{ mt: 3 }} align="center">
        Projects
      </Typography>
      <Box component="section">
        <Container
          sx={{ mt: 5, mb: 30, display: "flex", position: "relative" }}
        >
          <Box
            sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
          />
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Card sx={{ maxWidth: 345 , minHeight: 320}}>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h6" component="div">
                      Food Order App
                    </Typography>
                    <GitHubIcon />
                  </CardActions>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      ASP.NET MVC project with features like sign up, login, add to cart, checkout, payment
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{fontStyle:"oblique" , mt: 1}}>
                      ASP.NET MVC, jQuery, Payment Gateway
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
