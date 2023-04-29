import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import About from './components/About';
import Home from './components/Home';
import { Element } from 'react-scroll';
import Experience from './components/Experience';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Projects from './components/Projects';
import React from 'react';


function App() {
  const [darkMode, setDarkMode]= React.useState(true)
  const paletteType = darkMode ? 'dark':'light'
  const theme = createTheme({
    palette:{
      mode : paletteType
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
   
    <About />
    
    <Element name="About">
    <Home/>
    </Element>
    <Element name="Skills">
      <Skills/>
    </Element>
    <Element name="Experience">
      <Experience/>
    </Element>
    <Element name="Projects">
      <Projects/>
    </Element>
    </ThemeProvider>
  );
}

export default App;
