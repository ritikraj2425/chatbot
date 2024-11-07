'use client'
import { useState, useEffect } from "react";

export default function Preloader() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 100) {
            const interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 25); 

            return () => clearInterval(interval);
        }
    }, [count]);

    return (
        <div className="flex items-center justify-center h-screen">
            <h1
                className="text-6xl font-bold text-pink-500 transition-opacity duration-250 ease-in-out"
                style={{ opacity: count / 100 }}
            >
                {count}%
            </h1>
        </div>
    );
}
