import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, ThemeProvider, createTheme, Box } from '@mui/material';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const defaultTheme = createTheme();

export default function Album() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src:'/album/photo1.jpg', heading:'Geode Park', desc:'something nice to be said about the picture' },
    { src:'/album/photo2.jpg', heading:'Bayfront', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (1).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (2).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (3).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (4).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (5).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (6).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (7).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (8).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (9).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (10).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (11).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
    { src:'/album/photo (12).jpg', heading:'some place', desc:'something more nice to be said about this one too' },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }} style={{padding: '1rem 0'}}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Photography
          </Typography>
        </Container>
      </Box>
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
                  <Typography>
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
