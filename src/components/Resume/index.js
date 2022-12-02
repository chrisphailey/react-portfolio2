import React from "react";
// import resume from "../../assets/project-img/resume.pdf";
// import { Document } from "react-pdf/dist/entry.webpack";
// import { Page } from "react-pdf";
import resume from "../../assets/project-img/resume-october-2022.png";

function Resume() {
  function handleClick() {
    window.location.href =
      "https://drive.google.com/file/d/1XPB2EUW1FRU-ZKBSvWnTFQh8LxYymy5q/view?usp=sharing";
  }
  return (
    <div className="relative flex justify-center w-full">
      <div className="block w-1/2">
        <div className="flex justify-center w-full">
          <h1 className="heading">Resume</h1>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="button"
            onClick={handleClick}
            target="_blank"
            className="p-2 mb-2 border-white rounded-lg border-3"
          >
            Google Drive
          </button>
        </div>
        <div className="">
          <a
            href="https://drive.google.com/file/d/1XPB2EUW1FRU-ZKBSvWnTFQh8LxYymy5q/view?usp=sharing"
            target="_blank"
            download
          >
            <img src={resume}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
