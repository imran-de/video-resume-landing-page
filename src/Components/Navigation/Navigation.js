import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import './Navigation.css';

import logo from '../../Images/logo.png';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#F8FBFE', color: '#010D82', boxShadow: 0 }}>
            <Container>
                <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography as={HashLink} smooth to='/'
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src={logo} alt="site logo" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography as={HashLink} smooth to='/#about' textAlign="center">About</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography as={HashLink} smooth to='/#pricing' textAlign="center">Pricing</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography as={HashLink} smooth to='/#testimonial' textAlign="center">Testimonials</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography as={HashLink} smooth to='/#contact' textAlign="center">Contact</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={logo} alt="site logo" />
                    </Typography>
                    <Box className='nav-menu' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', color: '#010D82', justifyContent: 'center' } }}>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block' }}
                        >
                            <Typography as={HashLink} smooth to='/#about'>About</Typography>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block' }}
                        >
                            <Typography as={HashLink} smooth to='/#pricing'>Pricing</Typography>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block' }}
                        >
                            <Typography as={HashLink} smooth to='/#testimonial'>Testimonials</Typography>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block' }}
                        >
                            <Typography as={HashLink} smooth to='/#contact'>Contact</Typography>
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexGrow: 0 }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block', color: '#010D82', marginRight: { xs: '0', md: '10px', lg: '15px' } }}
                        >
                            Sign in
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, px: { xs: '18px', md: '34px' }, py: { xs: '8px', md: '13px' }, display: 'block', color: '#fff', backgroundColor: '#010D82', '&:hover': { backgroundColor: '#fff', color: '#010D82' } }}                        >
                            Sign up
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;