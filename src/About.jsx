import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { Avatar } from '@mui/material';

const underlineStyle = {
    align: 'left',
    color: '#ec407a',
};
const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
  };
  
  const textContainerStyle = {
    flex: 1,
    paddingRight: '20px', 
  };

  const innerDivStyle = {
    marginBottom: '20px', 
  };
  
  const avatarContainerStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  };

function About() {
    return (
        <Container style={containerStyle}>
            <div style={textContainerStyle}>
                <div style={innerDivStyle}> 
                <Typography variant='h2'style={underlineStyle}> About</Typography>
                </div>
                <div style={innerDivStyle}> 
                <Typography variant='h6'align='left'color='textSecondary' gutterBottom paragraph>
                    <div style={innerDivStyle}><Typography variant='h4'> Software Engineer </Typography></div>
                    I am an experienced Software Engineer with a passion for clean and efficient code. I specialize in creating scalable and high-performance applications using technologies such as Java, JavaScript, Spring Boot, Hibernate, Microservice, and RESTful APIs. I am also skilled in database design, optimization, and performance tuning in both relational and NoSQL databases. In my years of experience working on various projects across different business domains, I have a proven ability to manage competing priorities and communication to multiple stakeholders.
                </Typography>
                </div>
                
                <Button variant='outlined'href='https://drive.google.com/file/d/1jjsFnwslJBPSSrvSqnZMIxhNnRm6QUIs/view?usp=sharing'>
                    Download Resume
                </Button>
            </div>
            <div style={avatarContainerStyle}>
                <Avatar alt="Maheder Abreha" src="photo.jpg" sx={{ width: 400, height: 400 }} />
            </div>
        </Container>
    );
}

export default About;