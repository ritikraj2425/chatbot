'use client'
import React, { useState } from 'react';
import { LucideUser, LucideKey } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast} from 'react-toastify';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'content-type': 'application/json',
                }
            });

            const data = await response.json();

            if (!response.ok) {
                return toast.error(data.message || 'Login failed');
            }

            localStorage.setItem('jwtToken', data.token);
            localStorage.setItem('refreshToken', data.refresh_token);
            toast.success('Login successful');
            router.push('/');
            
        } catch (err) {
            toast.error('Something went wrong, please try again later');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-black mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center border-b border-[#FFDEFE] py-2">
                        <LucideUser className="text-[#FFDEFE] mr-2" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-black"
                        />
                    </div>
                    <div className="flex items-center border-b border-[#FFDEFE] py-2">
                        <LucideKey className="text-[#FFDEFE] mr-2" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-black"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full hover:bg-[#f385ef] text-white py-2 px-4 rounded-md bg-[#ed95f8]"
                    >
                        Login
                    </button>
                    <div className="flex items-center justify-between">
                <button className="font-medium text-black hover:text-[#343333]">Forgot Password?</button>
                <Link href='/signup'>
                <button  className="font-medium  text-black hover:text-[#343333]">
                    Sign Up
                </button>
                </Link>
            </div>
                </form>
            </div>
        </div>
    );
}