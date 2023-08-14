
import Header from '@/components/common/header';
import { useRouter } from 'next/router';
import * as React from 'react';
import { GetStaticProps } from 'next';
import { AdminLayout, MainLayout } from '@/components/layout';
import { Box, Typography } from '@mui/material'
// import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export interface AboutPageProps {
  props: any
}


export default function AboutPage(props: AboutPageProps) {
  const [postLists, setPostList] = React.useState([])
  const router = useRouter()
  console.log('About query:', router.query)
  const page = router.query?.page
  React.useEffect(() => {
    (async () => {
      if (!page) return
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()
      setPostList(data.data)
    })()
  }, [page])

  const handleNexClick = () => {
    router.push({
      pathname: '/about',
      query: {
        page: (Number(page) || 1) + 1
      }
    }, undefined, { shallow: true })
  }
  return (
    <Box>
      <Typography component='h1' variant="h3" color="primary.main">About Page</Typography>
      <Header />
      <ul>
        {/* {postLists.map((post: any) => <li key={post.id}>{post.title}</li>)} */}
        {postLists.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNexClick}>Next Click</button>

    </Box>
  );
}
AboutPage.Layout = AdminLayout

export async function getStaticProps() {
  console.log(`get static pros`)
  return {
    props: {},
  }
}
// export async function getServerSideProps() {
//   return {
//     props: {},
//   }
// }
