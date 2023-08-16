import { Post } from '@/models';
import { getPostLit } from '@/utils/post';
import { Box, Container, Divider } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse/lib';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype/lib';
import remarkToc from 'remark-toc';
import { unified } from 'unified';
import Script from 'next/script';
import { Seo } from '@/components/common';
import { MainLayout } from '@/components/layout';

export interface BlogPageProps {
  post: Post
}

export default function BlogDetailPage({ post }: BlogPageProps) {
  if (!post) return

  return (
    <Box>
      <Seo data={{
        title: `${post.title} | AnhDuy`,
        description: post.description,
        url: `${process.env.HOST_URL}/blog/${post.slug}`,
        thumbnailUrl: post.thumbnailUrl || 'https://res.cloudinary.com/dt1ufhjfc/image/upload/v1692028097/learn-nexjs/nextjs_lzpm99.png',
      }} />
      <Container>
        <h1>Blog Detail Page</h1>
        <div>{post.id}</div>
        <div>{post.title}</div>
        <div>{post.author?.name}</div>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>
      <Script src='/prism.js' strategy='afterInteractive' />
    </Box>
  );
}
BlogDetailPage.Layout = MainLayout
export const getStaticPaths: GetStaticPaths = async () => {

  const postList = await getPostLit()

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostLit()
  const slug = context.params?.slug
  if (!slug) return { notFound: true }
  // server-side
  // build-time
  // console.log('static props')
  const post = postList.find((x) => x.slug === slug)
  if (!post) return { notFound: true }

  // convert md to html
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: 'Duytbl' })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog details page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '')
  post.htmlContent = file.toString()
  return {
    props: {
      post,
    },
  }
}