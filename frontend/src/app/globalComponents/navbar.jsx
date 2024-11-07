'use client'
import { useState,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter();
    const [token,setToken] = useState(false);
    const handleSignOut = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('refreshToken');
        router.push('/login');
    };
    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        setToken(jwtToken);
    }, []);
    return (
        <>
            <div className="fixed top-0 left-0 right-0 flex justify-center z-20">
                <nav
                    id="navbar"
                    className="h-[3rem] w-[90%] mt-3 bg-[#FFDEFE] relative rounded-lg shadow-md flex"
                >
                    

                <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-black  text-xl ml-2 mt-1 font-luckiest-guy">
                    chat.ai
                </Link>

                <div className="flex items-center space-x-6 mr-2">
                    {
                        token?
                        <div className="hidden md:flex space-x-4 ">
                            <Link href="/discussion" className="text-black  hover:text-gray-700">About</Link>
                            <Link href="/profile" className="text-black hover:text-gray-700">History</Link>
                            <p  onClick={handleSignOut} className="text-black hover:text-gray-700 cursor-pointer">Logout</p>
                        </div>
                        :
                        <div className="hidden md:flex space-x-4">
                            <Link href="/login" className="text-black  hover:text-gray-700">Signup/Login</Link>

                        </div>
                    }
                    
                </div>

                </div>
                </nav>
                
            </div>

        </>
    )
}
export default Navbar;