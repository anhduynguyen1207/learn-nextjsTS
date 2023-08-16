import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '../models'
import { Box } from '@mui/material'
import { FeatureWorks, HeroSection, RecentPosts } from '@/components/home'
import { Seo } from '@/components/common'

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Box>
      <Seo data={{
        title: 'NextJS Tutorials | AnhDuy',
        description: 'Learning step by step to build a full CRUD website using NextJS for beginer',
        url: 'https://learn-nextjs-ts-mu.vercel.app/',
        thumbnailUrl: 'https://res.cloudinary.com/dt1ufhjfc/image/upload/v1692028097/learn-nexjs/nextjs_lzpm99.png',
      }} />
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  )
}
Home.Layout = MainLayout

export default Home
