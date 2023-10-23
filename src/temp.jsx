import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from './Introduction';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Edu from './Edu';
import Album from './Album';
import Contact from './Contact';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Skills" {...a11yProps(2)} />
          <Tab label="Experience" {...a11yProps(3)} />
          <Tab label="Education" {...a11yProps(4)} />
          <Tab label="Album" {...a11yProps(5)} />
          <Tab label="Connect" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Experience />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Edu />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Album />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Contact />
      </TabPanel>
    </div>
  );
}