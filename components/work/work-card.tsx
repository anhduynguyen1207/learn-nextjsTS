import { Works } from '@/models';
import * as React from 'react';
import { Box, Stack, Typography, Chip } from '@mui/material';
import Image from 'next/image';
import { format } from 'date-fns';
export interface WorkCardProps {
    work: Works
}

export function WorkCard({ work }: WorkCardProps) {

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <Box width={{ xs: '100%', md: '246px' }} flexShrink={0}>
                <Image src={work.thumbnailUrl} width={246} height={180} layout='responsive' alt='work thumbnail' />
            </Box>


            <Box>
                <Typography variant="h4" fontWeight='bold'>{work.title}</Typography>
                <Stack direction='row' my={2}>
                    <Chip color='secondary' label={format(Number(work.createAt), 'yyyy')} size='small' />
                    <Typography ml={3} color={'GrayText'}>{work.tagList.join(', ')}</Typography>
                </Stack>
                <Typography variant="body1" color="initial">{work.shortDescription}</Typography>
            </Box>

        </Stack>
    );
}
