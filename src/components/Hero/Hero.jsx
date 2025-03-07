import React from "react";
import "./Hero.css";
import profile_aman from "../../assets/profile_aman.png";
import AmanResume from "../../assets/AmanResume.pdf";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id = "home" className="hero">
      <img src={profile_aman} alt="" />
      <h1><span>I am Aman kumar,</span> Software engineer based in India.</h1>
      <p>
        with expertise in Data Structures, Algorithms,
        software development, machine learning, LLD, HLD, and web applications.
        Proficient in C++, Python, JavaScript, with a focus on ML algorithms.
        Experienced in building and deploying scalable applications. Proven in
        process optimization and performance enhancement. Top 6.5% on LeetCode,
        highlighting strong problem-solving and algorithmic skills.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href={AmanResume} download="Aman_Kumar_Resume.pdf" className="hero-resume">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
