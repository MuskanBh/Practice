import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ListItem, Typography, Toolbar, ListItemAvatar, Avatar, List, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import EngineeringIcon from '@mui/icons-material/Engineering';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function Skills() {
  const backgroundImg = process.env.PUBLIC_URL + '/assets/skills.png'
  return (
    <>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', bgcolor:'primary'}}></Toolbar>
    <Typography variant="h5" color="primary" sx={{ mt: 3 }} align='center'>
        Skills
      </Typography>
    <Box
      component="section"
    >
      <Container sx={{ mt: 5, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              
            <BuildIcon sx={{color: 'primary'}}/>
              
              <Typography variant="h6" sx={{ my: 2 }}>
                Tools
              </Typography>
              <Typography variant="body">
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Design" secondary="Canva, Sketch, Figma" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Testing" secondary="Postman, SoapUI, Selenium" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Infrastucture" secondary="Git, Cloud Foundry, Splunk" />
      </ListItem>
    </List>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
            <CodeIcon sx={{color: 'primary'}}/>
              <Typography variant="h6" sx={{ my: 2 }}>
                Technologies
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Languages" secondary="C#, JavaScript, TypeScript" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Framework" secondary=".NET Core, ASP.NET, React, Redux, Angular" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Database" secondary="PL/SQL, Oracle, MongoDB" />
      </ListItem>
    </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
            <EngineeringIcon sx={{color: 'primary'}}/>
              <Typography variant="h6" sx={{ my: 2 }}>
                Soft Skills
              </Typography>
             < List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Collaboration" secondary="Teamwork, Communication, Time Management" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Personal Effectiveness" secondary="Adaptibilty, flexibiltiy, Self-motivation" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Leadership" secondary="Decision Making, Risk Management, Strategic Thinking" />
      </ListItem>
    </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  );
}

export default Skills;