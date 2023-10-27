import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const API_Gateway= 'https://0cf04hy0b8.execute-api.us-east-1.amazonaws.com/connect/';
const socialIcons = {
    marginTop: '20px',
};
const p = (text) => console.log(text);

function Contact() {

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        const data = new FormData(event.currentTarget);
        const payload = {
            name: data.get("name"),
            email: data.get("email"),
            phone: data.get("phone"),
            subject: data.get("subject"),
            message: data.get("message"),
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        p(payload);
        fetch(API_Gateway, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.ok) {
                    this.handleSuccess();
                } else {
                    this.handleError();
                }
            })
            .catch(() => { });
        setSending(false);
        setSent(true);
    };
    return (
        <>
            <Grid >
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", marginTop: '5rem' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Contact Me
                        </Typography>

                        {!sent && (
                            <form method='POST' onSubmit={handleSubmit} >
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={6} item>
                                        <TextField name='name' placeholder="name" label="Name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name='email' type="email" placeholder="Email" label="Email" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name='phone' type="phone" placeholder="Phone" label="Phone" variant="outlined" fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name='subject' type="subject" placeholder="Subject" label="Subject" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name='message' label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="secondary" sx={{ mt: 3, mb: 2 }} style={{ margin: '2rem 0' }}>Send</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                        {sending && (
                            <Typography variant='h6' color='textSecondary' align='center' paragraph>
                                Sending...
                            </Typography>
                        )}
                        {sent && (
                            <Typography variant='h6' color='textSecondary' align='center' paragraph>
                                Thanks for reaching out! I'll get back to you as soon as I can.
                            </Typography>
                        )}

                    </CardContent>
                    <div className={socialIcons}>
                        <IconButton href='https://www.linkedin.com/in/maheder-abreha/' target='_blank'><LinkedInIcon /></IconButton>
                        <IconButton href='https://github.com/MaherAbreha' target='_blank'><GitHubIcon /></IconButton>
                        <IconButton href='mahederabreha@gmail.com' target='_blank'><AlternateEmailIcon /></IconButton>
                    </div>
                </Card>
            </Grid>
        </>
    );
}

export default Contact;