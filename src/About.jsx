import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { Avatar } from '@mui/material';

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem 0',
    '@media (max-width: 768px)': {
        marginLeft: '0px',
        marginTop: '40px',
    },
};
const textContainerStyle = {
    flex: 1,
    paddingRight: '20px',
    marginTop: '1rem',
};
const avatarContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    marginRight: '10px',

};
function About() {
    return (
        <Container style={containerStyle}>
            <div style={textContainerStyle}>
                <div >
                    <Typography variant='h2' style={{ color: '#ec407a' }}> About</Typography>
                </div>
                <br></br>
                <div>
                    <Typography variant='h6' align='left' color='textSecondary' gutterBottom paragraph>
                        <div >
                            <Typography variant='h4'> Software Engineer </Typography>
                        </div>
                        <br></br>
                        <div>
                            I am an experienced Software Engineer with a passion for clean and efficient code. I specialize in creating scalable and high-performance applications using technologies such as Java, JavaScript, Spring Boot, Hibernate, Microservice, and RESTful APIs. I am also skilled in database design, optimization, and performance tuning in both relational and NoSQL databases. In my years of experience working on various projects across different business domains, I have a proven ability to manage competing priorities and communication to multiple stakeholders.
                        </div>
                    </Typography>
                </div>
                <br></br>
                <Button variant='outlined' color="secondary" href='https://drive.google.com/file/d/1jjsFnwslJBPSSrvSqnZMIxhNnRm6QUIs/view?usp=sharing'>
                    Download Resume
                </Button>
            </div>
            <div style={avatarContainerStyle}>
                <Avatar alt="Maheder Abreha" src="photo.jpg" sx={{ width: 300, height: 300 }} />
            </div>
        </Container>
    );
}

export default About;