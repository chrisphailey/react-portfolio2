import React from "react";
// import resume from "../../assets/project-img/resume.pdf";
// import { Document } from "react-pdf/dist/entry.webpack";
// import { Page } from "react-pdf";
import resume from "../../assets/project-img/Chris Hailey - Web Developer Resume 4_11_2022_Page_1.jpg";
import resume2 from "../../assets/project-img/Chris Hailey - Web Developer Resume 4_11_2022_Page_2.jpg";

function Resume() {
  function handleClick() {
    window.location.href =
      "https://drive.google.com/file/d/1DNytjgusfaeqX8zLIQVqbEeeh7WME7kr/view";
  }
  return (
    <div className="w-full relative flex justify-center">
      <div className="block w-1/2">
        <div className="w-full flex justify-center">
          <h1 className="heading">Resume</h1>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={handleClick}
            className="border-white border-3 p-2 rounded-lg mb-2"
          >
            Google Drive
          </button>
        </div>
        <div className="">
          <a
            href="https://drive.google.com/file/d/1DNytjgusfaeqX8zLIQVqbEeeh7WME7kr/view?usp=sharing"
            download
          >
            <img src={resume}></img>
            <img src={resume2}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
