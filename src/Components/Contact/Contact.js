import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Box sx={{ mb: '114px' }}>
            <Container id='contact'>
                <Typography variant='h4' component='h4' sx={{ fontSize: '20px', lineHeight: '30px', color: '#51C9FF', textAlign: 'center' }}>
                    Lets's Talk
                </Typography>
                <Typography variant='h1' component='h1' sx={{ color: '#010D82', lineHeight: '60px', fontWeight: '700', textAlign: 'center', fontSize: { xs: '36px' } }}>
                    We're here to help you!
                </Typography>

                {/* Contact form box */}
                <Box sx={{
                    mt: '45px',
                    backgroundColor: '#51C9FF',
                }}>
                    <Container
                        sx={{
                            width: { xs: '100%', md: '80%', lg: '60%' }
                        }}
                    >
                        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ pt: '97px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        backgroundColor: '#F8FBFE',
                                        borderRadius: '8px',
                                        mt: '16px',
                                        mr: { xs: '0', md: '10px' },
                                        p: '10px'
                                    }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            label="Name"
                                            defaultValue="Your Name"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                            {...register("name", { required: true })}
                                        />
                                    </Box>
                                    {errors.name && <small sx={{ color: 'red' }}>This field is required</small>}

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        backgroundColor: '#F8FBFE',
                                        borderRadius: '8px',
                                        mt: '16px',
                                        ml: { xs: '0', md: '10px' },
                                        p: '10px'
                                    }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            label="Your Email"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                            {...register("email", { required: true })}
                                        />
                                    </Box>
                                    {errors.email && <small sx={{ color: 'red' }}>This field is required</small>}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        backgroundColor: '#F8FBFE',
                                        borderRadius: '8px',
                                        mt: '16px',
                                        mr: { xs: '0', md: '10px' },
                                        p: '10px'
                                    }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            label="Your Mobile Number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                            {...register("phone", { required: true })}
                                        />
                                    </Box>
                                    {errors.phone && <small sx={{ color: 'red' }}>This field is required</small>}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        backgroundColor: '#F8FBFE',
                                        borderRadius: '8px',
                                        mt: '16px',
                                        ml: { xs: '0', md: '10px' },
                                        p: '10px'
                                    }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            label="Education / Profession (Optional)"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                            {...register("profession")}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Box sx={{
                                        backgroundColor: '#F8FBFE',
                                        borderRadius: '8px',
                                        mt: '16px',
                                        p: '10px'
                                    }}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            label="Your Message"
                                            placeholder="Message"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                            multiline
                                            rows={4}
                                            {...register("message", { required: true })}
                                        />
                                    </Box>
                                    {errors.message && <small sx={{ color: 'red' }}>This field is required</small>}
                                </Grid>
                                <Grid item xs={12} sx={{
                                    mt: '65x',
                                    mb: '88px',
                                    textAlign: 'center'
                                }}>
                                    <Button
                                        sx={{
                                            color: '#fff',
                                            backgroundColor: '#010D82',
                                            boxShadow: '0px 10px 50px rgba(1, 13, 130, 0.12)',
                                            borderRadius: '8px',
                                            height: '60px',
                                            width: '180px',
                                            textAlign: 'center',
                                            '&:hover': { backgroundColor: '#fff', color: '#010D82' }
                                        }}
                                        type='submit'>Let's Talk</Button>
                                </Grid>
                            </Grid>

                        </Box>
                    </Container>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;