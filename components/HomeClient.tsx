"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("./HeroSlider"), { ssr: false });
const PieWheel = dynamic(() => import("./PieWheel"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const Blog = dynamic(() => import("./Blog"), { ssr: false });

import AboutSectionOne from "./About/AboutSectionOne";
import Brands from "./Brands";

export default function HomeClient() {
  return (
    <>
      <HeroSlider />
      <PieWheel />
      <Projects />
      <AboutSectionOne />
      <Blog />
      <Brands />
    </>
  );
}
