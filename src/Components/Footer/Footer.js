import { Button, Container, FormControl, Grid, Input, Link, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#010D82' }} >
            <Container sx={{ paddingTop: '70px', paddingBottom: '70px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} sx={{ color: '#fff' }}>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: '700' }}>
                            <i className="fab fa-youtube"></i> Visume
                        </Typography>
                        <Typography variant='p' component='p' sx={{ marginTop: '20px', color: '#fff' }}>
                            2238 Partha Elen Street,<br />
                            New Jersey,<br />
                            USA, 3322145698
                        </Typography>
                        {/* social menu */}
                        <List className='social-menu'>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText><i className="fab fa-facebook-f"></i></ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemText><i className="fab fa-twitter"></i></ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemText><i className="fab fa-instagram"></i></ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemText><i className="fab fa-linkedin-in"></i></ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={12} md={3} sx={{ color: '#fff' }}>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: '700' }}>
                            Useful Links
                        </Typography>
                        <List>
                            <ListItem sx={{ py: 1 }} disablePadding>
                                <Link href="#" color="inherit" underline="none">
                                    Payment & Tax
                                </Link>
                            </ListItem>
                            <ListItem sx={{ py: 1 }} disablePadding>
                                <Link href="#" color="inherit" underline="none">
                                    Terms of Service
                                </Link>
                            </ListItem>
                            <ListItem sx={{ py: 1 }} disablePadding>
                                <Link href="#" color="inherit" underline="none">
                                    Your Account
                                </Link>
                            </ListItem>
                            <ListItem sx={{ py: 1 }} disablePadding>
                                <Link href="#" color="inherit" underline="none">
                                    Privacy Policy
                                </Link>
                            </ListItem>

                        </List>
                    </Grid>

                    <Grid item md={3} sx={{ color: '#fff' }}>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: '700' }}>
                            Our Company
                        </Typography>
                        <List>
                            <ListItem sx={{ py: 1 }} disablePadding>
                                <Link href="#" color="inherit" underline="none">
                                    About us
                                </Link>
                            </ListItem>
                            <ListItem sx={{ py: 1 }} disablePadding>
                                <Link href="#" color="inherit" underline="none">
                                    Media
                                </Link>
                            </ListItem>
                            <ListItem sx={{ py: 1 }} disablePadding>
                                <Link href="#" color="inherit" underline="none">
                                    Blog
                                </Link>
                            </ListItem>
                            <ListItem sx={{ py: 1 }} disablePadding>
                                <Link href="#" color="inherit" underline="none">
                                    Contact us
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item md={3} sx={{ color: '#fff' }}>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: '700', mb: '16px' }}>
                            Subscribe to Newsletter
                        </Typography>
                        <FormControl sx={{ margin: 'none', backgroundColor: '#F8FBFE', borderRadius: '8px' }}>
                            <Box sx={{ display: 'flex' }}>
                                <Input style={{ border: 'none', padding: '8px' }} placeholder="your email" />
                                <Button><i className="far fa-paper-plane"></i></Button>
                            </Box>
                        </FormControl>
                        <Typography variant='div' component='div' sx={{ marginTop: '20px' }}>
                            <Link href="mailto:help@visume.link" color="inherit">
                                help@visume.link
                            </Link> <br /><br />
                            <Link href="tel:396-987-456-885" color="inherit">
                                396-987 456 885
                            </Link>
                        </Typography>
                    </Grid>

                </Grid>

                {/* copy wright */}
                <Grid>
                    <Typography sx={{ color: '#F8FBFE', textAlign: 'center', pt: 8 }} variant='p' component='p'>
                        <i className="far fa-copyright"></i> 2021 Visume
                    </Typography>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;