import React from 'react';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
import { Avatar } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import { Typography } from '@material-ui/core';

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  '@media (max-width: 768px)': {
    marginLeft: '0px',
    marginTop: '40px',
  },
};

const textContainer = {
  textAlign: 'center',
  justifyContent: 'flex-end',
  display: 'block',
}
const avatarContainerStyle = {
  width: '100%',
  maxWidth: '400px',
  marginLeft: '40px',
  margin: '0 auto',
  '@media (max-width: 768px)': {
    marginLeft: '0px',
    marginTop: '30px',
  },
}
const Home = () => {
  const handleType = (count) => {
    console.log(count);
  };

  return (
    <div style={mainContainerStyle}>
      <div style={textContainer}>
        <div style={avatarContainerStyle}>
          <Avatar alt="Maheder Abreha" src="photo.jpg" sx={{ width: 400, height: 400 }} />
        </div>
        <Typography variant="h1" color="primary">
          Maheder Abreha
        </Typography>
        <Typography variant='h3' align='center' color='textSecondary' gutterBottom paragraph>
          <Typewriter
            words={['Software Engineer', 'Full-Stack Developer', 'Back-End Developer']}
            loop={58887}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onType={handleType}
          />
        </Typography>
        {/* <div className="social-icons">
          <IconButton href="https://www.linkedin.com/in/maheder-abreha/" target="_blank" rel="noopener noreferrer" size="large" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://github.com/MahederAbreha" target="_blank" rel="noopener noreferrer" size="large" aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
