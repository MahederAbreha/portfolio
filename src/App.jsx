import React from "react";
import { CssBaseline } from '@material-ui/core';
// import { PhotoCamera } from '@material-ui/icons';
// import Home from "./temp";
import NavBar from "./temp";
import { Route, Routes } from "react-router-dom";
import Introduction from "./Introduction";
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Edu from './Edu';
import Blog from './Blog';
import Contact from './Contact';
const App = () => {
   
    return (
        <div>
            <CssBaseline />
            <NavBar />
            <Routes>
                <Route exact path="/home" element={<Introduction/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/skills" element={<Skills/>} />
                <Route exact path="/experience" element={<Experience/>} />
                <Route exact path="/education" element={<Edu/>} />
                <Route exact path="/blog" element={<Blog/>} />
                <Route exact path="/connect" element={<Contact/>} />
            </Routes>
        </div>
    );
}
export default App; 