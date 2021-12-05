import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import about from '../../Images/about.png';
const About = () => {
    return (
        <Box>
            <Container id='about' sx={{ my: '135px' }}>

                <Grid container spacing={2} sx={{ mt: '30px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h4' component='h4' sx={{ fontSize: '20px', lineHeight: '30px', color: '#51C9FF' }}>
                            We’re on a mission
                        </Typography>
                        <Typography variant='h1' component='h1' sx={{ color: '#010D82', lineHeight: '60px', fontWeight: '700', fontSize: { xs: '36px' } }}>
                            About Visume
                        </Typography>
                        <Typography variant='h6' component='h6' sx={{
                            color: '#010D82',
                            fontWeight: '600',
                            fontSize: '18px',
                            m: '30px 0 20px 0'
                        }}>
                            Trusted by people around <span style={{ color: '#F87F81' }}>38 countries</span>
                        </Typography>

                        <Typography variant='p' component='p'>
                            With the Gen Z going the video way, the future rectruitement is going to be through video resumes. It saves the HR people a ton of time in screening profiles. And it makes it more human to  present themseleves than plain texts for the employees.
                        </Typography>
                        <Typography variant='p' component='p' sx={{ mt: '20px' }}>
                            With 20+ years on the video production industry, you’re on the right hands.
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

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img src={about} width='100%' alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;