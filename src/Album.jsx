import React, { useState } from 'react';
import { Container, Card, CardContent, Grid, ThemeProvider, createTheme, Box } from '@mui/material';
import Lightbox from 'react-image-lightbox';
import { Typography } from '@material-ui/core';
import 'react-image-lightbox/style.css';

const defaultTheme = createTheme();

export default function Album() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src:'/album/photo1.jpg', heading:'Geode Park', desc:'' },
    { src:'/album/photo2.jpg', heading:'Geode Park', desc:'Takes you to the infinity' },
    { src:'/album/photo (1).jpg', heading:'Yellowstone National Park', desc:'' },
    { src:'/album/photo (2).jpg', heading:'Waterworks Park', desc:'' },
    { src:'/album/photo (3).jpg', heading:'BYU', desc:'A tranquil sanctuary for prayer and reflection, providing a peaceful escape from the chaos of everyday life' },
    { src:'/album/photo (4).jpg', heading:'Snow Bliss', desc:'Taste of Winter' },
    { src:'/album/photo (5).jpg', heading:'Spring', desc:'Lots of excitements' },
    { src:'/album/photo (6).jpg', heading:'Waterworks Park', desc:'Walk in the park' },
    { src:'/album/photo (7).jpg', heading:'Geode Park', desc:'the picture that reminds you that "Life is full of Light"' },
    { src:'/album/photo (8).jpg', heading:'some place', desc:'Done for the day' },
    { src:'/album/photo (9).jpg', heading:'Shades of purple', desc:'' },
    { src:'/album/photo (10).jpg', heading:'Fishing', desc:'Beautiful day to fish' },
    { src:'/album/photo (11).jpg', heading:'Calm vibes', desc:'' },
    { src:'/album/photo (12).jpg', heading:'Chihuly Garden and Glass', desc:'' },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }} style={{padding: '1rem 0'}}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            style={{color: '#ec407a' }}
            gutterBottom
          >
            Photography
          </Typography>
          <Typography variant='h6' color='textSecondary' align='center'>Sharing some of my favorite moments, hoping they resonate with you as much as they do with me. Get ready for a journey of pure awesomeness!</Typography>
        </Container>
      </Box>
      <br></br>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4} style={{ marginTop: '-6rem'}}>
          {images.map((image, index) => (
            <Grid item key={image} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => { setLightboxOpen(true); setPhotoIndex(index); }}>
                <Box>
                  <img loading='lazy' src={image.src} alt={`Image ${index + 1}`} style={{ height: '10rem', width: '17.78rem'}} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { image.heading }
                  </Typography>
                  <Typography color="textSecondary">
                    { image.desc }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </ThemeProvider>
  );
}
