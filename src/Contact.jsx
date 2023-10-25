import React, { useState } from 'react';
import { IconButton, Box, FormGroup, FormControl, InputLabel, Input, Button, TextField, TextareaAutosize  } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const p = (text) => console.log(text);
const Lambda_URL = 'https://fgasyjzdghoqg7ktaanyijspha0xdnct.lambda-url.us-east-1.on.aws/';
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
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const innerFormStyles = {
        display: sent ? 'none' : 'flex',
        flexDirection: 'column',
        width: '80%',
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        const data = new FormData(event.currentTarget);
        const payload = {
            email: data.get("email"),
            subject: data.get("subject"),
            message: data.get("message"),
        };
        await new Promise((resolve) => setTimeout(resolve, 2000));
        p(payload);
        fetch(Lambda_URL, {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                },
                body: JSON.stringify(payload),
            })
            .then((response) => {
                if (response.ok) {
                    this.handleSuccess();
                } else {
                    // notify user
                    //this.handleError();
                }
            })
            .catch(() => {});

        setSending(false);
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
                <form action="https://fgasyjzdghoqg7ktaanyijspha0xdnct.lambda-url.us-east-1.on.aws/" method="POST" 
                onSubmit={handleSubmit}
                style={{
                    display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', 
                }}>
                    <input placeholder="email" type='email' name="email" required />
                    <input placeholder="subject" type="text" name="subject" />
                    <textarea placeholder="message" name="message" required />
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
