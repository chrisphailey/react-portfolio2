import React from "react";
import aboutPhoto from "../../assets/project-img/about-photo.jpg";

function About() {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="w-1/2 h-full flex justify-center">
        <div className="w-1/2 h-1/2 rounded">
          <img className="rounded-full" src={aboutPhoto} alt="about-photo" />
        </div>
      </div>
      <div className="w-1/2 h-full m-8">
        <p>
          I'm Chris Hailey. A full stack web developer from Memphis, Tennessee
          with a passion for connecting the community. My first loves were live
          music and the outdoors... both for their unique ability to make you
          feel connected to something greater. They can bring a community
          together. This is what I aim to accomplish as a web developer. Through
          clear cut, visually pleasing and engaging design, we can build a
          platform that leaves people feeling connected to something greater.
          <br />
          <br />
          THIS has been my pursuit for the last three years of my life. I've
          been travelling the world to learn, listen and connect with those that
          are different from me. Now I aim to bring these communities together
          through innovative web development.
        </p>
      </div>
    </div>
  );
}

export default About;
