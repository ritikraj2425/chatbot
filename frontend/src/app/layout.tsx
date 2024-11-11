import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./globalComponents/navbar";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const luckiestGuy = localFont({
  src: "./fonts/LuckiestGuy-Regular.woff",
  variable: "--font-luckiestGuy",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chatbot",
  description: "Created by Ritik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
    <html lang="en">
      
      <body
        className={`${luckiestGuy.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        
        {children}
        <ToastContainer
                    position="top-right" 
                    autoClose={2000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    draggable
                    pauseOnFocusLoss
 />
      </body>
      
    </html>
  );
}
