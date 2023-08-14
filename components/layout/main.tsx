// import { LayoutProps } from 'models/common';
import { LayoutProps } from '@/models';
import { Stack, Box } from '@mui/material';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {

    return (
        <Stack minHeight="100vh">
            <Header />
            <Box component="main" flexGrow={1}>
                {children}
            </Box>
            <Footer />
        </Stack>
    );
}
