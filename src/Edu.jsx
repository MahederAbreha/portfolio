import { Container, Typography } from '@material-ui/core';
import React from 'react';

function Edu() {
    return (
        <Container>
            <Typography 
            variant='h5'
            align='center'
            color='textSecondary'
            gutterBottom
            paragraph
            >
                Education
            </Typography>
        </Container>
          
    );
}

export default Edu;