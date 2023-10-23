import React from 'react';
import { Container, Typography } from '@material-ui/core';
function Contact() {
    return (
        // <Container>
        //     <Typography 
        //     variant='h5'
        //     align='center'
        //     color='textSecondary'
        //     gutterBottom
        //     paragraph
        //     >
        //         contact
        //     </Typography>
        // </Container>
        <div>
            <form action="https://formsubmit.co/5c289225fcf9a1787c740e435d9b6e11" method="POST">
                <input type='email' name='email' placeholder='email' required/>
                <input type='text' name='name' required placeholder='name' />
                <textarea name='message' placeholder='message' required> </textarea>
                <button type='submit'> Boom </button>
            </form>
        </div>
    );
}

export default Contact;