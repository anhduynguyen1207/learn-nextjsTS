import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import Link from 'next/link'
import { getPostLit } from '@/utils/post'
import { MainLayout } from '@/components/layout'
import { Box, Container, Divider } from '@mui/material'
import { PostItem } from '@/components/blog'
import { Post } from '@/models'
export interface BlogListPageProps {
  posts: Post[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {

  return (
    <Box>
      <Container>
        <h1>Blog</h1>

        <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <PostItem post={post} />
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
BlogListPage.Layout = MainLayout
export const getStaticProps: GetStaticProps<BlogListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // build-time
  // console.log('static props')
  // const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  // const data = await response.json()
  // console.log(data)

  //convert markdown files into list of javascript objects
  const postList = await getPostLit()

  return {
    props: {
      posts: postList,
    },
  }
}