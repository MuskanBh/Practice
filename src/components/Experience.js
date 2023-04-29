import { Grid, Typography, Toolbar, Box, Stepper, Step, StepLabel, StepContent, StepIcon } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

export default function Experience(){
    const steps = [
        {
          label: 'Software Engineer 2',
          comapny: "Dell Technologies (04/22 - Current)",
          description: `.NET core, Angular, React, SQL server`,
        },
        {
          label: 'Software Engineer 1',
          comapny: "Dell Technologies (07/20 - 03/22)",
          description:
            '.NET core, Angular, React, SQL server',
        },
        {
          label: 'Winter Internship',
          comapny: "Dell Technologies (01/22 - 05/22)",
          description: `Angular`,
        },
      ];
    function iconComp(){
        return <LabelImportantIcon/>
    }
    return(
        <>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', bgcolor:'primary'}}></Toolbar>
    <Typography variant="h5" color="primary" sx={{ mt: 3 }} align='center'>
        Experience
      </Typography>
      <Grid  container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '80vh' }}>
        <Box>
      <Stepper  orientation="vertical">
        {steps.map((step, index) => (
          <Step active='true' key={index}>
            <StepLabel StepIconComponent={iconComp}>
                <Typography sx={{fontSize:'large'}}>{step.label}</Typography></StepLabel>
            <StepContent>
                <Typography sx={{fontStyle: 'italic'}}>{step.comapny}</Typography>
              <Typography sx={{fontSize:'small'}}>{step.description}</Typography>
              </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
    </Grid>
      </>
    )
}