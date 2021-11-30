import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../Images/title-border.png';
import banner from '../../Images/banner.png';

const Banner = () => {
    return (
        <Container sx={{ paddingTop: '70px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', paddingRight: { xs: '0', md: '10px' } }}>
                    <Box>
                        <Typography variant='h4' component='h4' sx={{ fontSize: '20px', lineHeight: '30px', color: '#51C9FF' }}>
                            Stand out of the crowd
                        </Typography>
                        <Typography variant='h1' component='h1' sx={{ color: '#010D82', lineHeight: '60px', fontWeight: '700', fontSize: { xs: '36px', md: '42px' } }}>
                            Create the Next Gen <br />
                            Video Resume
                        </Typography>
                        <img src={img} alt="title line" />
                        <Typography variant='p' component='p' sx={{ fontSize: '18px', lineHeight: '30px', color: '#84879E', paddingTop: '30px' }}>
                            Get hired quickly by giving your resume the video look it deserves.
                        </Typography>
                        <Box sx={{ display: 'flex', paddingTop: '40px' }}>
                            <Button
                                sx={{ my: 2, px: { xs: '18px', md: '34px' }, py: { xs: '8px', md: '13px' }, display: 'block', color: '#fff', backgroundColor: '#010D82' }}>
                                Get Started
                            </Button>
                            <Button
                                sx={{ my: 2, px: { xs: '18px', md: '34px' }, py: { xs: '8px', md: '13px' }, display: 'block', color: '#010D82' }}>
                                <i className="far fa-play-circle"></i> Watch Demo
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '745px', maxWidth: '100%', height: '550px', maxHeight: '100%' }} src={banner} alt="page banner" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;