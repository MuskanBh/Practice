import {
  Box,
  Toolbar,
  ListItem,
  List,
  AppBar} from "@mui/material";
import { useMediaQuery } from 'react-responsive'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { Link } from "react-scroll";


export default function Header(props) {
  const links = ["About", "Skills", "Experience", "Projects" ];
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const boxSX = {
    "&:hover": {
      cursor:'pointer'
    },
  };

  return (
    <div>
    <AppBar position="fixed" >
    <Toolbar variant='dense' sx={{ borderBottom: 1, borderColor: "divider", display: "flex",
    justifyContent: "space-between",
    alignItems: "center", }}>
        
        
        
        {isTabletOrMobile ? <></> :
         <Box display="flex" alignItems="right" >
         <List sx={{ display: "flex" }}>
          {links.map((link, index) => (
            <ListItem key={index} sx={boxSX} component={Link} to={link} smooth={true} duration={500}>{link}</ListItem>
          ))}
        </List>
      </Box>
      }
      
        <Box> 
        </Box>
        <Box display="flex" >
        </Box>
       {props.darkMode ? <DarkModeIcon  sx={{cursor:'pointer'}} onClick={props.handleThemeChange}/> : <LightModeIcon sx={{color: 'yellow' , cursor: 'pointer'}} onClick={props.handleThemeChange}/>}
      
      
      
    </Toolbar>
    </AppBar></div>
  );
}
