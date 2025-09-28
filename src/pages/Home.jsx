import React, { useRef } from "react";
import Video from "../components/Home/Video";
import HomeHeroText from "../components/Home/HomeHeroText";
import HomeBottomTop from "../components/Home/HomeBottomTop";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className="text-white">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomTop />
      </div>
    </div>
  );
};

export default Home;
