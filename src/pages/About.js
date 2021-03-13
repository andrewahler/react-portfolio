import React from "react";
import pic from "../images/headshot.jpeg"

const About = () => (
  <div>
    <section id="About Me" className="mainsection">
        <h2>About</h2>
        <img src={pic} ALIGN="right" alt="I am Andrew Ahler"/>
        <p>
        Hello! My name is Andrew Ahler . Born and raised in Tennessee, I currently reside in Culleoka TN with my wife and three dogs. I began my journy to becoming a full stack developer in September of 2020 enrolling in a fullstack developer bootcamp through Vanderbilt University. Please contact me with any further questions, I am very excited to be a part of this industry.
        </p>  
    </section>
  </div>
);

export default About;