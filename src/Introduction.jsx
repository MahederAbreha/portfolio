import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {IconButton } from '@material-ui/core';
import { useState } from "react"; 
function Home() {
const [selectedTab, setSelectedTab] = useState(0);

    let tabContent;
    switch (selectedTab) {
        case 0:
            tabContent = (
                <>
                    <div >
                        <h4>Hi there  </h4>
                        <h2>Maheder Abreha</h2>
                    </div>
                    <a href="https://www.linkedin.com/in/maheder-abreha/">
                        <i className="fa fa-linkedin"></i>
                        <IconButton size='large' aria-label='logo'>
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a href="https://github.com/MahederAbreha">
                        <i className="fa fa-github"></i>
                        <IconButton size="large" aria-label="logo">
                            <GitHubIcon />
                        </IconButton>
                    </a>

                </>
            );
            break;
        default:
            tabContent = null;
    }
    return (
        <div>
            <div style={{ padding: '20px' }}>
                {tabContent}
            </div>
            <h1>My intro goes here</h1>
        </div>
        
    );
}

export default Home;