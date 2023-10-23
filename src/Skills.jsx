import React from 'react';
import { Typography, Card, CardContent, Grid, styled } from '@material-ui/core';

const logos = [
    { src: 'aws-2.svg', label: 'Aws' },
    { src: 'java-4.svg', label: 'Java' },
    { src: 'kafka.svg', label: 'Kafka' },
    { src: 'logo-javascript.svg', label: 'Javascript' },
    { src: 'mysql-logo.svg', label: 'MySQL' },
    { src: 'react-2.svg', label: 'React' },
    { src: 'spring-3.svg', label: 'Spring' },
    { src: 'postgresql.svg', label: 'PostgreSQL' },
    { src: 'mongodb-icon-1.svg', label: 'MongoDB' },
    { src: 'docker.svg', label: 'Docker' }
];
const iconSize = '10rem';
const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '50%',
    width: iconSize,
    height: iconSize,
    padding: '1rem',
    margin: '1rem 0',
}
const Skills = () => {
    return (
        <>
            <div style={{ height: '10vh' }} />
            <Grid container spacing={2}>
                {logos.map((logo, index) => (
                    // mobile = xs, laptop = md, monitors = lg, everything larger is xl
                    <Grid item key={logo.label + index} xs={6} sm={4} md={2}>
                        <Card elevation={20} style={cardStyle}>
                            <img loading='lazy' type="image/svg+xml" src={logo.src} height="50%" width="50%" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" fontFamily="monospace">
                                    {logo.label}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
export default Skills;