import { Post } from '@/models';
import { Card, CardContent, Typography, Divider, Stack } from '@mui/material';
import { format } from 'date-fns';
import * as React from 'react';

export interface PostCardProps {
    post: Post

}

export function PostCard({ post }: PostCardProps) {
    if (!post) return null

    return (
        <Card>
            <CardContent>
                <Typography variant='h5' fontWeight='bold'>{post.title}</Typography>
                <Stack direction='row' my={2} >
                    <Typography variant='body1'>
                        {format(Number(post.publishedDate), 'dd MMM yyy')}
                    </Typography>
                    <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
                    <Typography>
                        {post.tagList.join(', ')}
                    </Typography>
                </Stack>
                <Typography variant='body2'>{post.description}</Typography>

            </CardContent>
        </Card>
    );
}