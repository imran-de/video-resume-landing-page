import { Button, Container, Divider, Grid, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Packages = () => {
    return (
        <Box>
            <Container id='pricing' sx={{ my: '135px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h4' component='h4' sx={{ fontSize: '20px', lineHeight: '30px', color: '#51C9FF' }}>
                            Pricing
                        </Typography>
                        <Typography variant='h1' component='h1' sx={{ color: '#010D82', lineHeight: '60px', fontWeight: '700', fontSize: { xs: '36px' } }}>
                            How much to pay?
                        </Typography>
                        <Typography variant='p' component='p'>
                            You can choose the most app pricing option for your needs.
                        </Typography>
                    </Grid>
                </Grid>
                {/* price card section */}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} sx={{ mt: '72px' }}>
                        {/* <img src="https://i.ibb.co/sbHVXxs/check-circle.png" alt="" /> */}
                        <Box sx={{
                            height: '500px',
                            backgroundColor: '#F8FBFE',
                            boxShadow: '0px 10px 50px rgba(1, 13, 130, 0.12)',
                            borderRadius: '20px',
                            textAlign: 'center',
                            color: '#010D82',
                            py: '50px',
                        }}>
                            <Typography variant='h2' component='h2' sx={{
                                color: '#010D82',
                                fontSize: '32px',
                            }}>
                                Basic
                            </Typography>
                            <Typography variant='h2' component='h2' sx={{ color: '#51C9FF', fontSize: '32px' }}>
                                $8
                            </Typography>
                            <Typography variant='p' component='p' sx={{ color: '#010D82' }}>
                                per project
                            </Typography>
                            <Divider component="div" sx={{
                                width: '80%',
                                mx: 'auto',
                                my: '38px'
                            }} />

                            <List sx={{ textAlign: 'center' }}>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography>
                                            20 themes
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography>
                                            60 music files
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography>
                                            80 audio effects
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography>
                                            8 language support
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography>
                                            Email Support
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>

                            <Button sx={{
                                mt: '50px',
                                color: '#51C9FF',
                                backgroundColor: '#fff',
                                border: '1px solid #51C9FF',
                                '&:hover': { backgroundColor: '#51C9FF', color: '#010D82' }
                            }}> Get Started</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ mt: '32px' }}>
                        {/* <img src="https://i.ibb.co/sbHVXxs/check-circle.png" alt="" /> */}
                        <Box sx={{
                            height: '500px',
                            backgroundColor: '#010D82',
                            boxShadow: '0px 10px 50px rgba(1, 13, 130, 0.12)',
                            borderRadius: '20px',
                            textAlign: 'center',
                            color: '#fff',
                            py: '50px',
                        }}>
                            <Typography variant='h2' component='h2' sx={{
                                fontSize: '32px',
                            }}>
                                All Rounder
                            </Typography>
                            <Typography variant='h2' component='h2' sx={{ color: '#51C9FF', fontSize: '32px' }}>
                                $12
                            </Typography>
                            <Typography variant='p' component='p'>
                                per project
                            </Typography>
                            <Divider component="div" sx={{
                                width: '80%',
                                mx: 'auto',
                                my: '38px',
                                backgroundColor: '#fff'
                            }} />

                            <List sx={{ textAlign: 'center', color: '#fff!important' }}>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography sx={{ color: '#fff' }}>
                                            150 themes
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography sx={{ color: '#fff' }}>
                                            320 music files
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography sx={{ color: '#fff' }}>
                                            500 audio effects
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography sx={{ color: '#fff' }}>
                                            80+ language support
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography sx={{ color: '#fff' }}>
                                            24/7 Support
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>

                            <Button sx={{
                                mt: '50px',
                                color: '#10D82',
                                backgroundColor: '#51C9FF',
                                border: '1px solid #51C9FF',
                                '&:hover': { backgroundColor: '#fff', color: '#010D82' }
                            }}> Get Started</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ mt: '72px' }}>
                        <Box sx={{
                            height: '500px',
                            backgroundColor: '#F8FBFE',
                            boxShadow: '0px 10px 50px rgba(1, 13, 130, 0.12)',
                            borderRadius: '20px',
                            textAlign: 'center',
                            color: '#010D82',
                            py: '50px',
                        }}>
                            <Typography variant='h2' component='h2' sx={{
                                color: '#010D82',
                                fontSize: '32px',
                            }}>
                                Super Hero
                            </Typography>
                            <Typography variant='p' component='p'>
                                Get in touch with us to discuss on your requirements and pricing.
                            </Typography>
                            <Divider component="div" sx={{
                                width: '80%',
                                mx: 'auto',
                                my: '38px'
                            }} />

                            <List sx={{ textAlign: 'center' }}>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography>
                                            Everything From All Rounder
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography>
                                            24/7 Priority Support
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex', mx: 'auto', columnGap: '10px', width: '60%' }}>
                                        <img src="https://i.ibb.co/sbHVXxs/check-circle.png" height="24px" alt="" />
                                        <Typography>
                                            And many more..
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>

                            <Button sx={{
                                mt: '50px',
                                color: '#51C9FF',
                                backgroundColor: '#fff',
                                border: '1px solid #51C9FF',
                                '&:hover': { backgroundColor: '#51C9FF', color: '#010D82' }
                            }}> Contact us</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Packages;