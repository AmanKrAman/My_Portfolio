import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import call_icon from "../../assets/call_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    formData.append("access_key", accessKey);
    

    const object = Object.fromEntries(formData);  
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        toast.success("Submitted successfully!");
        event.target.reset();
      } else {
        console.error("Form submission failed", res);
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Connect with me</h1>
          <p>
            I'm passionate about creating efficient and innovative solutions
            through code. Whether you have a project in mind, want to discuss
            potential collaborations, or simply wish to connect with a fellow
            developer, I'm always eager to engage in meaningful conversations. I
            specialize in full-stack development with expertise in performance
            optimization and user experience. If you're interested in working
            together or have any questions about my projects, feel free to reach
            out. I strive to respond promptly and look forward to exploring how
            we can create something amazing together. Let's connect and turn
            ideas into reality!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9852297226</p>
            </div>
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>aman63280@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bengaluru, karnataka INDIA</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name:</label>
          <input type="text" placeholder="Enter your full name" name="name" />
          <label htmlFor="">Your Email:</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write your message here:</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
