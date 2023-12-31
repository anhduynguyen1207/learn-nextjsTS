import { Box, Container, Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import avatar from '../../images/avatar.png';

export function HeroSection() {
    return (
        <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ sx: 7, md: 9 }}>
            <Container>
                <Stack spacing={{ xs: 5, md: 10 }} direction={{ xs: 'column-reverse', md: 'row' }} alignItems={{ xs: 'center', md: 'flex-start' }} textAlign={{ xs: 'center', md: 'left' }}>
                    <Box>
                        <Typography component="h1" variant='h3' fontWeight="bold" mb={{ xs: 3.5, md: 5 }}>Hi, I am Anh Duy,<br />
                            Information Technologist
                        </Typography>

                        <Typography mb={{ xs: 3.5, md: 5 }}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </Typography>
                        <Button sx={{ mb: 3 }} variant="contained" color="primary" size='large' >Download Resume</Button>
                    </Box>
                    <Box sx={{ minWidth: '240px', boxShadow: '-5px 13px ', color: 'secondary.light', borderRadius: '50%' }} >
                        <Image src={avatar} layout='responsive' alt='avatar' />
                    </Box>
                </Stack>
            </Container>
        </Box >
    );
}
