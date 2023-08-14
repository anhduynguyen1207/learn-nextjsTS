// import { LayoutProps } from 'models/common';
import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';
import { Auth } from '../common';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';



export function AdminLayout({ children }: LayoutProps) {
    const router = useRouter()
    const { profile, logout } = useAuth()
    async function handleLogoutClick() {
        try {
            await logout()
            router.push('/login')
        } catch (error) {
            console.log('Failed to logout', error);
        }
    }
    return (
        <Auth>
            <div>
                <h1>Admin layout</h1>
                <div>Sidebar</div>
                <Link href="/"> Home</Link>
                <Link href="/about"> About</Link>
                <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
                <div>{children}</div>
            </div>
            <button onClick={handleLogoutClick}>Logout</button>
        </Auth >
    );
}
