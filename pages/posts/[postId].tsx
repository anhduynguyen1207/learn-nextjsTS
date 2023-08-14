import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostPageProps {
  post: any
}

export default function PostDetailPage({ post }: PostPageProps) {
  const router = useRouter();
  //------ fallback: true-----------
  if (router.isFallback) {
    // có thể tạo ra div loading.. hay sử lý gì ở đây 
  }
  //------ fallback: true-----------
  return (
    <div>
      <h1>Post Detail Page</h1>
      <div><strong>ID:</strong> {post.id}</div>
      <div><strong>Title:</strong> {post.title}</div>
      <div><strong>Author: </strong>{post.author}</div>
      <div><strong>Description: </strong>{post.description}</div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\nGET STATIC PATHS')
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    // fallback: false,
    /* 
   => sau thời gian revalidate sẽ trả ra dữ liệu cũ từ sever đồng thời gọi lại hàm getStaticProps
   để sẽ trả dữ liệu mới vào file html và json sau đó khi có request mới sẽ trả ra dữ liệu mới 
   */
    // fallback: 'blocking'
    /* 
    => khi request đến trang chưa có trong file server sẽ phải đợi để gọi hàm getStaticProps trả ra dữ liệu và sẽ thêm vào file sever
    nhượng điểm nếu thời gian gọi api lâu sẽ làm trắng màn hình 
    
    */
    fallback: true
    /* 
    => giống với fallback: 'blocking' nhưng có thêm  if(router.isFallback){có thể tạo ra div loading.. hay sử lý gì ở đây}
    
    */
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('\nGET STATIC PROPS', context.params?.postId);
  const postId = context.params?.postId
  if (!postId) return { notFound: true }
  // server-side
  // build-time
  // console.log('static props')
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()
  console.log(data)

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}