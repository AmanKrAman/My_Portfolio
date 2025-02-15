import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id = "home" className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I am Aman kumar,</span> Backend Developer based in India.</h1>
      <p>
        Software engineer with expertise in Data Structures, Algorithms,
        software development, machine learning, LLD, HLD, and web applications.
        Proficient in C++, Python, JavaScript, with a focus on ML algorithms.
        Experienced in building and deploying scalable applications. Proven in
        process optimization and performance enhancement. Top 7.7% on LeetCode,
        highlighting strong problem-solving and algorithmic skills.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
