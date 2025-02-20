import React from "react";
import "./About.css";
import Display_pic from "../../assets/Display_pic.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Display_pic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a dedicated full-stack developer with a strong backend focus,
              experienced in designing, developing, and maintaining robust
              server-side applications. My expertise spans across Python
              (Django), JavaScript (Node.js), and various database technologies
              including MongoDB, PostgreSQL, and MySQL. I also work with message
              queuing systems like RabbitMQ, Kafka, and Redis to build scalable
              distributed systems. My core focus is on delivering high-quality,
              efficient code while ensuring seamless integration between
              frontend and backend services. Additionally, I engage in
              competitive coding, where I primarily use <strong>C++</strong> to
              sharpen my problem-solving skills.
            </p>
            <p>
              My passion lies in optimizing server-side performance to achieve
              high throughput. I am driven by the challenge of making systems
              fast and efficient, ensuring low-latency responses and seamless
              user experiences. Whether it's fine-tuning database queries,
              implementing caching strategies, or improving system architecture,
              I constantly seek ways to enhance the performance and scalability
              of the applications I develop. With experience across iOS,
              Windows, and Linux environments, and a foundation in machine
              learning, I bring versatility to solving complex technical
              challenges.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>C++</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
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
