import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Typography } from '@material-ui/core';

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  height: '80vh',
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
const Home = () => {
  const handleType = (count) => {
    console.log(count);
  };

  return (
    <div style={mainContainerStyle}>
      <div style={textContainer}>
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
      </div>
    </div>
  );
}

export default Home;
