import React from "react";
import "./About.css";
import profile_pic from "../../assets/profile_pic.svg";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id = "about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_pic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a dedicated backend developer with one year of experience in
              designing, developing, and maintaining server-side applications.
              Throughout my career, I have gained hands-on expertise in building
              robust and scalable backend systems using technologies such as
              Python, Java, Node.js, and SQL/NoSQL databases. My core focus is
              on delivering high-quality, efficient code while ensuring seamless
              integration with front-end services and APIs.
            </p>
            <p>
              My passions is optimizing server-side performance to achieve high
              throughput. I am driven by the challenge of making backend systems
              as fast and efficient as possible, ensuring low-latency responses
              and seamless user experiences. Whether it's fine-tuning database
              queries, optimizing code execution, or improving system
              architecture, I constantly seek ways to increase the speed and
              scalability of the systems I work on.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>C++</p> <hr style={{width: "50%"}}/></div>
            <div className="about-skill"><p>Python</p> <hr style={{width: "70%"}}/></div>
            <div className="about-skill"><p>HTML & CSS</p> <hr style={{width: "60%"}}/></div>
            <div className="about-skill"><p>JavaScript</p> <hr style={{width: "50%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Top 6.5%</h1>
            <p>ON LEETCODE</p>
        </div>
      </div>
    </div>
  );
};

export default About;
