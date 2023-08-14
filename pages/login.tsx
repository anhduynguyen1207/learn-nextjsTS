import * as React from 'react';
import { autApi } from '@/api/index';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';



export default function LoginPage() {
  const router = useRouter()
  const { profile, login, logout, } = useAuth({
    revalidateOnMount: false,
  })
  async function handleLoginClick() {
    try {
      await login()
      router.push('/about')
      console.log('redirect to dashboard');
    } catch (error) {
      console.log('Failed to login', error);
    }
  }
  async function handleGetProfileClick() {
    try {
      await profile
    } catch (error) {
      console.log('Failed to get Profile', error);
    }
  }
  async function handleLogoutClick() {
    try {
      await logout()
      console.log('redirect to login');
    } catch (error) {
      console.log('Failed to logout', error);
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
      <button onClick={() => router.push('/about')}>Go to about</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}
