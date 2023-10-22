import React from "react";
import { CssBaseline } from '@material-ui/core';
// import { PhotoCamera } from '@material-ui/icons';
import NavBar from "./temp";
import { Route, Routes } from "react-router-dom";
import Introduction from "./Introduction";
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Edu from './Edu';
import Blog from './Blog';
import Contact from './Contact';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Album from "./Album";

const theme = createTheme  ({
    palette: {
        primary: {
            main: '#424242'
        },
    },
    typography: {
        fontFamily: 'monospace',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
})
const App = () => {
   
    return (
        <div>
            <CssBaseline />
            <ThemeProvider theme={theme}>
            <NavBar />
            {/* <Routes>
                <Route exact path="/" element={<Introduction/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/skills" element={<Skills/>} />
                <Route exact path="/experience" element={<Experience/>} />
                <Route exact path="/education" element={<Edu/>} />
                <Route exact path="/blog" element={<Blog/>} />
                <Route exact path="/connect" element={<Contact/>} />
                <Route exact path="/album" element={<Album/>} />
            </Routes> */}
            </ThemeProvider>
        </div>
    );
}
export default App; 