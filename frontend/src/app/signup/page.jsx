'use client'
import React, { useState } from 'react';
import { LucideUser, LucideKey } from 'lucide-react';
import {useRouter} from 'next/navigation';
import { toast} from 'react-toastify';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            toast.error('Password does not match');
            throw new Error('password not match')
        }
        try {
            const response = await fetch('http://localhost:3001/signup', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                }),
                headers: {
                    'content-type': 'application/json',
                }
            })
            const data = await response.json()
            if (!response.ok) {
                return toast.error('Error', data)
            }

            localStorage.setItem('jwtToken', data.jwtToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            toast.success('signup successfull');
            router.push('/');

        } catch (err) {
            toast.error(err);
        }

    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-black text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center border-b border-[#FFDEFE] py-2">
                        <LucideUser className="text-[#FFDEFE] mr-2" />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-black"
                        />
                    </div>
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
                    <div className="flex items-center border-b border-[#FFDEFE] py-2">
                        <LucideKey className="text-[#FFDEFE] mr-2" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-black"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full hover:bg-[#f385ef] text-white py-2 px-4 rounded-md bg-[#ed95f8]"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}