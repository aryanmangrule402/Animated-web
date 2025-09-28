// src/pages/Home.jsx
import React from "react";
import Video from "../components/Home/Video";
import HomeHeroText from "../components/Home/HomeHeroText";
import HomeBottomTop from "../components/Home/HomeBottomTop";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomTop />
      </div>
    </div>
  )

};

export default Home;   // ✅ must be here
