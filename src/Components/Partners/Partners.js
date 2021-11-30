import { Container, Grid, List, ListItem } from '@mui/material';
import React from 'react';

const partners = [
    { id: 1, name: 'partner 1', partnerLogo: 'https://i.ibb.co/pZHLsQJ/partner1.png' },
    { id: 2, name: 'partner 2', partnerLogo: 'https://i.ibb.co/RphvZpZ/partner2.png' },
    { id: 3, name: 'partner 3', partnerLogo: 'https://i.ibb.co/PYxcqYy/partner3.png' },
    { id: 4, name: 'partner 4', partnerLogo: 'https://i.ibb.co/Sfb0k9L/partner4.png' },
    { id: 5, name: 'partner 5', partnerLogo: 'https://i.ibb.co/8rf9hxM/partner5.png' },
    { id: 6, name: 'partner 6', partnerLogo: 'https://i.ibb.co/CsrymLF/partner6.png' },
]
const Partners = () => {
    return (
        <Container sx={{ marginTop: '42px', marginBottom: '130px' }}>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', overflow: { xs: 'scroll', md: 'hidden' } }}>
                <List sx={{ display: 'inline-flex' }}>
                    {
                        partners.map(partner => <ListItem
                            disablePadding
                            key={partner?.id}
                        >
                            <img src={partner?.partnerLogo} alt={partner?.name} />
                        </ListItem>)
                    }
                </List>
            </Grid>
        </Container>
    );
};

export default Partners;