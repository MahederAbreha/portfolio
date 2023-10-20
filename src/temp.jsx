import { useState } from "react";
import { Tabs, createTheme, Tab, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const theme = createTheme();

const NavBar = () => {
    const [selectedTab, setSelectedTab] = useState();

    const handleChange = (event) => {
        setSelectedTab(event.currentValue);
    };
    return (
        <>
            <AppBar position="relative" color="black">
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Link to='/home' style={{ textDecoration: 'none', color: theme.palette.text.primary}}>
                        <Tab label="Home" />
                    </Link>
                    <Link to='/about' style={{ textDecoration: 'none', color: theme.palette.text.primary}}>
                        <Tab label="About" />
                    </Link>
                    <Link to='/skills' style={{ textDecoration: 'none', color: theme.palette.text.primary}}>
                        <Tab label="Skills" />
                    </Link>
                    <Link to='/experience' style={{ textDecoration: 'none', color: theme.palette.text.primary}}>
                        <Tab label="Experience" />
                    </Link>
                    <Link to='/education' style={{ textDecoration: 'none', color: theme.palette.text.primary}}>
                        <Tab label="Education" />
                    </Link>
                    <Link to='/blog' style={{ textDecoration: 'none', color: theme.palette.text.primary}}>
                        <Tab label="Blog" />
                    </Link>
                    <Link to='/connect' style={{ textDecoration: 'none', color: theme.palette.text.primary}}>
                        <Tab label="Let's Connect" />
                    </Link>
                </Tabs>
            </AppBar >
        </>
    )
}
export default NavBar;