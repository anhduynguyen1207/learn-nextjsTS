import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';
import { Post } from '@/models';



export function RecentPosts() {
    //call API to get recent posts
    const postList: Post[] = [
        {
            id: '1',
            slug: '',
            title: 'Making a design system from scratch',
            publishedDate: '2023-08-15T10:00:00Z',
            tagList: ['Design', 'Pattern'],
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            id: '2',
            slug: '',
            title: 'Creating pixel perfect icons in Figma',
            publishedDate: '2023-08-15T10:00:00Z',
            tagList: ['Figma', 'Icon Designer'],
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        }
    ];


    return (
        <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
            <Container>
                <Stack direction="row" mb={2} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems='center'>
                    <Typography variant='h6'>Recent Post</Typography>
                    <MuiLink sx={{ display: { xs: 'none', md: 'inline-block' } }}
                        component={Link} href="/blog" passHref color='#00A8CC'>
                        View all
                    </MuiLink>
                </Stack>

                <Stack spacing={4} direction={{ xs: 'column', md: 'row' }} sx={{
                    '& > div': {
                        width: {
                            xs: '100%',
                            md: '50%',
                        }
                    },
                }}>
                    {postList.map(post => (
                        <Box key={post.id}>
                            <PostCard post={post} />
                        </Box>
                    ))}

                    {/* <Box>
                        <PostCard />
                    </Box> */}
                </Stack>
            </Container>
        </Box>
    );
}
