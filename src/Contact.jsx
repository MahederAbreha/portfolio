import React, { useState } from 'react';
import { IconButton, Box, FormGroup, FormControl, InputLabel, Input, Button, TextField, TextareaAutosize  } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const socialIcons = {
    marginTop: '20px',

};
const formStyle = {
    margin: 'auto',
    width: '50%',
    padding: '20px',
    marginTop: '10rem',
    paddingTop: '20px',
    boxShadow: '2px 2px 10px black',
    '@media (max-width: 768px)': {
        marginLeft: '0px',
        marginTop: '40px',
    },
}
const buttonStyle = { width: '10%', margin: '10px' }
const textAreaStyles = {
    width: '100%',
    margin: '1rem 0',
    padding: '1rem',
};

function Contact() {
    const [send, setSend] = useState(false);
    const [sent, setSent] = useState(false);
    const innerFormStyles = {
        display: sent ? 'none' : 'flex',
        flexDirection: 'column',
        width: '80%',
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSend(true);
        
        const data = new FormData(event.currentTarget);
        console.log("something actually happened");
        const formData = {
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
            subject: data.get('subject'),
            message: data.get('message')
        };
        console.log(formData);
        await new Promise((result) => {

            setTimeout(result, 2000)
        });

        try {
            const response = await fetch("https://formsubmit.co/5c289225fcf9a1787c740e435d9b6e11", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error sending form data: ${response.statusText}`);
            }

            const responseData = await response.json();
            console.log('Form data sent successfully:', responseData);
            setSent(true);
        } catch (error) {
            console.error(error.message);
        } finally {
            // Simulate loading for 2 seconds
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSend(false);
        }

        setSend(false);
        setSent(true);
    };
    return (
        <>
            <div style={formStyle}>
                {/* <form  action="https://formsubmit.co/5c289225fcf9a1787c740e435d9b6e11" method="POST" onSubmit={handleSubmit}>
                    <FormControl>
                        <InputLabel htmlFor='name-input'>Name</InputLabel>
                        <Input id='name-input' name='name' aria-describedby='name-helper-text' />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='email-input'>Email address</InputLabel>
                        <Input id='email-input' name='email' aria-describedby='email-helper-text' />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='phone-input'>Phone</InputLabel>
                        <Input id='phone-input' name='phone' aria-describedby='phone-helper-text' />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='subject-input'>Subject</InputLabel>
                        <Input id='subject-input' name='subject' aria-describedby='subject-helper-text' />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='message-input'>Message</InputLabel>
                        <Input id='message-input' name='message' aria-describedby='message-helper-text' />
                    </FormControl>
                    <FormControl>
                        <Button variant='contained' color='secondary' style={buttonStyle}> Send</Button>
                    </FormControl>
                </form> */}
                {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} style={ innerFormStyles }> */}
                {/* <form  action="https://formsubmit.co/mahderabb@gmail.com" method="POST" >
                    <TextField margin="normal" required id="email" label="Email" 
                        name="email" autoComplete="email" />
                    
                    <TextField margin="normal" name="subject" label="Subject" type="text" id="subject" />
                    
                    <TextareaAutosize minRows={5} placeholder="Message ..."
                        style={textAreaStyles} name="message" />
                    
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} style={{ margin: '2rem 0' }}>
                        Send
                    </Button>
                </form> */}
                
                {/* </Box> */}
                <br /><br />
                <form action="https://formsubmit.co/5c289225fcf9a1787c740e435d9b6e11" method="POST">
                    <input type="text" name="name" required />
                    <input type="email" name="email" required />
                    <button type="submit">Send</button>
                </form>
                <div className={socialIcons}>
                    <IconButton href='https://www.linkedin.com/in/maheder-abreha/' target='_blank'><LinkedInIcon /></IconButton>
                    <IconButton href='https://github.com/MaherAbreha' target='_blank'><GitHubIcon /></IconButton>
                </div>
            </div>
        </>
    );
}

export default Contact;
