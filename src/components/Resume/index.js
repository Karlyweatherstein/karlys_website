import React from "react";

function Resume() {
  return (
    <div className="resume">
      <h1 className="titleFonts">Resume</h1>
      <a
        href="https://docs.google.com/document/d/1C42H_RRKn1co0zg9R0lGRSxBVOU-Zm2CLmr6SgAH4xw/export?format=pdf"
        download="karly-weatherstein-resume"
      >
        <h2 className="paragraphFonts">Click this to download my resume!</h2>
      </a>
      <h2 className="resumeList paragraphFonts">Proficient in:</h2>
      <ul className="paragraphFonts">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
        <li>MongoDB</li>
        <li>Express</li>
      </ul>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="e85aec13-010c-4d02-81d5-6f52a0a7c7d7"
        data-share-badge-host="https://www.credly.com"
      ></div>
      <script
        type="text/javascript"
        async
        src="//cdn.credly.com/assets/utilities/embed.js"
      ></script>
    </div>
  );
}

export default Resume;
