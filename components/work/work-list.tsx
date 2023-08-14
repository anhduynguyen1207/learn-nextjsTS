import React, { Fragment } from 'react';
import { Works } from '@/models'
import { Box, Container, Stack, Typography, Link as MuiLink, Divider } from '@mui/material';
import { WorkCard } from './work-card';
export interface WorkListProps {
    workList: Works[];
}

export default function WorkList({ workList }: WorkListProps) {
    if (workList.length === 0) return null
    return (
        <Box>
            {workList.map(work => (
                <Fragment key={work.id}>
                    <WorkCard work={work} />
                    <Divider sx={{ my: 3 }} />
                </Fragment>
            ))}
        </Box>


    );
}
