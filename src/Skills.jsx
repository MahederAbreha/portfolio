import React from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';

const logos = [
    {src:'aws-2.svg', label: 'Aws'},
    {src:'java-4.svg', label: 'Java'},
    {src:'kafka.svg', label: 'Kafka'},
    {src:'logo-javascript.svg', label: 'Javascript'},
    {src:'mysql-logo.svg', label: 'MySQL'},
    {src:'react-2.svg', label: 'React'},
    {src:'spring-3.svg', label: 'Spring'},
    {src:'postgresql.svg', label: 'PostgreSQL'},
    {src:'mongodb-icon-1.svg', label: 'MongoDB'},
    {src:'docker.svg', label: 'Docker'}
];
const iconSize = '15rem';
const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '50%',
    width: iconSize,
    height: iconSize,
    padding: '1rem',
};
const Content = ({label, src}) => {
    return (
        <Card elevation={20} style={cardStyle} >
            <object type="image/svg+xml" data={src} height="50%" width="50%"/>
            <CardContent sx={{ flexGrow: 1 }} style={{ display: 'flex', justifyContent: 'center', padding: '0', }}>
                <Typography gutterBottom variant="h5" component="h2">
                    { label }
                </Typography>
            </CardContent>
        </Card>
    );
};
const centered = {display: 'flex', justifyContent:'center', alignItems:'center'};
const Skills = () => {
    return (
        <>
            <div style={{ height: '10vh'}}/>
            <Grid container spacing={5} style={{ ...centered,  }}>
                {logos.map((logo) => (
                    <Grid item xs={6} sm={6} md={3} key={logo.label}  style={{ ...centered, }}>
                        <Content label={logo.label} src={logo.src} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
export default Skills;