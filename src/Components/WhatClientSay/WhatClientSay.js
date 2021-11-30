import { useTheme } from '@emotion/react';
import { Button, Container, Grid, MobileStepper, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: '“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I’ve got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”',
        imgPath:
            'https://i.ibb.co/nLP6wM4/feedback.png',
    },
    {
        label: '“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I’ve got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: '“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I’ve got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: '“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I’ve got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”',
        imgPath:
            'https://i.ibb.co/nLP6wM4/feedback.png',
    },
];

const WhatClientSay = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };



    return (
        <Box>
            <Container sx={{ mb: '132px' }}>
                <Typography variant='h4' component='h4' sx={{ fontSize: '20px', lineHeight: '30px', color: '#51C9FF' }}>
                    Social
                </Typography>
                <Typography variant='h1' component='h1' sx={{ color: '#010D82', lineHeight: '60px', fontWeight: '700', fontSize: { xs: '36px' } }}>
                    What do our customers say?
                </Typography>




                <Box sx={{
                    position: 'relative',
                    backgroundColor: '#F8FBFE',
                    boxShadow: '0px 10px 50px rgba(1, 13, 130, 0.12)',
                    borderRadius: '20px',
                    pb: '20px'

                }}>
                    <Container sx={{ mt: '36px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <AutoPlaySwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={activeStep}
                                    onChangeIndex={handleStepChange}
                                    enableMouseEvents
                                >
                                    {images.map((step, index) => (
                                        <div key={Math.random()}>
                                            {Math.abs(activeStep - index) <= 2 ? (
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        height: 255,
                                                        display: 'block',
                                                        maxWidth: 400,
                                                        overflow: 'hidden',
                                                        width: '100%',
                                                    }}
                                                    src={step.imgPath}
                                                    alt={step.label}
                                                />
                                            ) : null}
                                        </div>
                                    ))}
                                </AutoPlaySwipeableViews>
                            </Grid>
                            <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Paper
                                    square
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: { xs: '100%', md: '80%' },
                                        pl: 2,
                                    }}
                                >
                                    <Typography>{images[activeStep].label}</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                    <MobileStepper
                        className='arrow'
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                <i className="fas fa-arrow-right"></i>
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                <i className="fas fa-arrow-left"></i>
                            </Button>
                        }
                    />

                </Box>






            </Container>
        </Box>
    );
};

export default WhatClientSay;