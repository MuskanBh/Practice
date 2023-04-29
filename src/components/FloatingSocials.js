import React from 'react';
import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

function FloatingSocials() {
  return (
    <Grid container justify="flex-end" alignItems="flex-end" spacing={1} rows={3}>
      <Grid item sx={{ marginRight: 8, marginBottom: 8 }} xs={1}>
        <GitHubIcon />
      </Grid>
      <Grid item sx={{  marginRight: 8, marginBottom: 8 }} xs={1}>
        <GitHubIcon />
      </Grid>
      <Grid item sx={{  marginRight: 8, marginBottom: 8 }} xs={1}>
        <GitHubIcon />
      </Grid>
    </Grid>
  );
}

export default FloatingSocials;
