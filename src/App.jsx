import React from "react";
import { CssBaseline } from '@material-ui/core';
import NavBar from "./temp";
import { createTheme, ThemeProvider } from '@material-ui/core';


const theme = createTheme({
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
            </ThemeProvider>
        </div>
    );
}
export default App; 