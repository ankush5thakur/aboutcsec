import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about bg-slate-500 flex flex-col sm:flex-row w-full max-w-screen-2xl mx-auto gap-2" style={{ height: '632px' }}>
      <div className="box  flex-1 p-4 flex items-center justify-center content">
        <img src="./../public/ig1.jpg" alt="image..." className="w-full h-full object-cover" />
      </div>
      <div className="box  flex-1 p-4 flex flex-col justify-center content" style={{ height: '632px' }}>
        <div className="text-4xl font-bold text-white">Computer Science Engineers Community</div>
        <br />
        <p>
          Our vibrant community is dedicated to exploring the vast world of technology, coding, and innovation. We offer a welcoming space for students of all skill levels to learn, collaborate, and grow together. From hands-on workshops and coding competitions to guest lectures and hackathons, our activities are designed to inspire and challenge.
        </p>
        <br />
        <p>
          Whether you're interested in software development, artificial intelligence, cybersecurity, or any other tech field, you'll find like-minded peers and valuable resources here. Join us to unlock your potential, share your passion, and make lasting connections in the world of computer science. Together, we're shaping the future of technology.
        </p>
        <br />
      </div>
    </div>
  );
}

export default About;
