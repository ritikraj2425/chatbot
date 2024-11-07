'use client'
import "./globals.css";
import Header from './homepageComponents/header'
import Main from './homepageComponents/main'
import Preloader from './globalComponents/preloader';

import { useEffect, useState } from 'react';


export default function Home() {
  const [load,setLoad] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoad(false)
    },3000)
  })

  return (
    <>
    {load? <Preloader/>
    :
    <>
      <Header/>
      <Main/>
    </>
    }
    </>
  );
}
