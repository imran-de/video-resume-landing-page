import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import getStarted from '../../Images/getstart.png';

const GetStarted = () => {
    const [startedData, setStartedData] = useState([]);
    useEffect(() => {
        fetch('/startedData.json')
            .then(res => res.json())
            .then(data => setStartedData(data));
    }, [])
    return (
        <Box>
            <Container>
                <Typography variant='h4' component='h4' sx={{ fontSize: '20px', lineHeight: '30px', color: '#51C9FF' }}>
                    Stand out of the crowd
                </Typography>
                <Typography variant='h1' component='h1' sx={{ color: '#010D82', lineHeight: '60px', fontWeight: '700', fontSize: { xs: '36px' } }}>
                    How to get started?
                </Typography>

                <Grid container spacing={2} sx={{ mt: '30px' }}>
                    <Grid item xs={12} md={6}>
                        <img src={getStarted} width='100%' alt="" />
                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Grid container spacing={5}>

                            {
                                startedData?.map(data => <Grid item md={6}
                                    key={data?.id}
                                >
                                    <Paper sx={{ position: 'relative', p: '20px', height: '230px' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{
                                                color: '#010D82',
                                                backgroundColor: '#F2F7FB',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '6px',
                                                display: 'flex',
                                                justifyContent: "center",
                                                alignItems: 'center'
                                            }}>
                                                <i className={data?.iconClass}></i>
                                            </div>
                                            <div style={{
                                                backgroundColor: '#DEF5FF',
                                                color: '#51C9FF',
                                                padding: '8px 14px',
                                                borderRadius: '50%',
                                                position: 'absolute',
                                                right: '-15px',
                                                top: '-15px'
                                            }}>{data?.step}</div>
                                        </Box>
                                        <Typography variant='h3' component='h3' sx={{ fontSize: '18px', fontWeight: '600', color: '#010D82', pt: '30px', pb: '9px' }}>
                                            {data?.title}
                                        </Typography>
                                        <Typography variant='p' component='p'>
                                            {data?.des}
                                        </Typography>
                                    </Paper>
                                </Grid>
                                )
                            }

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GetStarted;