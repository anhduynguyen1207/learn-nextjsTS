import { Container, Stack, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system'
import * as React from 'react';
import { ROUTE_lIST } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export interface HeaderDesktopProps {
}

export function HeaderDesktop(props: HeaderDesktopProps) {
    const router = useRouter()

    return (
        <Box display={{ md: 'block', xs: 'none' }} py={2}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {ROUTE_lIST.map((route) => (
                        <React.Fragment key={route.path}>
                            <MuiLink sx={{ ml: 2, fontWeight: 'medium' }} className={clsx({ active: router.pathname === route.path })} component={Link} href={route.path} passHref>
                                {route.label}
                            </MuiLink>
                        </React.Fragment>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
