import React, { useState, useEffect } from 'react';
import { Paper, Typography, Link, Button } from '@material-ui/core';

function Blog() {
    const [blogContent, setBlogContent] = useState('');
    const blogApiUrl = 'https://medium.com/@mahderabb?source=post_page-----fa6b385f3155--------------------------------';
    
    useEffect(() => {

        const fetchBlogContent = async () => {
            try {
                const response = await fetch(blogApiUrl);
                if (response.ok) {
                    const data = await response.json();
                    const portionOfContent = data.items[0].content.substr(0, 1000);
                    setBlogContent(portionOfContent);
                } else {
                    throw new Error('Failed to fetch blog content');
                }
            } catch (error) {
                console.error('Error fetching blog content:', error);
            }
        };

        fetchBlogContent();
    }, []);
    const lineSpacing = {lineHeight: '2.0'}
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h3" align='center' gutterBottom>
                Blog
            </Typography>
            <Typography variant="body1" align='center' paragraph>
                Check out a portion of my blog post on Medium:
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <Typography variant='h3' color='primary' align='center'>
                    Hosting Your Professional Website on AWS: A Journey of Learning and Success 🚀
                </Typography>
                <br></br>
                <Typography variant='h6' color='textSecondary' style={lineSpacing}>
                    Hello, fellow tech enthusiasts,
                </Typography>
                <Typography variant='h6' color='textSecondary' style={lineSpacing}>
                   Embarking on the journey of hosting my personal website on Amazon Web Services (AWS) was not just a technical endeavor but a profound learning experience. Allow me to share the lessons I gained through this venture:
                </Typography>
                <Typography variant='h6' color='textSecondary'style={lineSpacing} >
                    Lesson 1: Precision and Planning are Key 🎯

                    Setting up a website involves a multitude of components, from configuring databases to managing domains. Through this process, I learned the importance of meticulous planning. Each step, when executed with precision, ensures a seamless and efficient website structure. Understanding the intricacies beforehand helps in making informed decisions, leading to a well-organized digital presence.
                </Typography>
            </Paper>
            <Link href="https://medium.com/@mahderabb" target="_blank" rel="noopener noreferrer">
                <Button variant='outlined' color="secondary" >
                    Read More on Medium
                </Button>
            </Link>
        </div>
    );
}

export default Blog;

