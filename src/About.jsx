import React from 'react';
import { Container, Typography } from '@material-ui/core';

const mainPageStyle = {
    //display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    height: '100vh',
    // border: '1px dashed blue',
    backgroundColor: '#e2c5c5',
  };
  
  const nameDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    marginRight: '100px',
    
    
    
  };

function About() {
    return (
        <Container>
            <Typography 
            variant='h2'
            align='center'
            color='textSecondary'
            gutterBottom
            paragraph
            >
                Software Engineer
                I am an experienced Software Engineer with a passion for clean and efficient code. I specialize in creating scalable and high-performance applications using technologies such as Java, JavaScript, Spring Boot, Hibernate, Microservice, and RESTful APIs. I am also skilled in database design, optimization, and performance tuning in both relational and NoSQL databases. In my years of experience working on various projects across different business domains, I have a proven ability to manage competing priorities and communication to multiple stakeholders.

            </Typography>
        </Container>
    );
}

export default About;