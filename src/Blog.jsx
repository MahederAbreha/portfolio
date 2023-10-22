import React from 'react';
import { Container, Typography } from '@material-ui/core';
function Blog() {
    return (
        <Container>
        <Typography 
        variant='h5'
        align='center'
        color='textSecondary'
        gutterBottom
        paragraph
        >
            blog
        </Typography>
    </Container>
    );
}

export default Blog;