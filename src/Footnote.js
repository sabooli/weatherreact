import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Footnote() {
  return (
    <div>
      <a href="https://github.com/sabooli/weatherreact" className="footnote">
        {" "}
        Open-source code
      </a>
      <span className="name"> by Saba Sabetti</span>
    </div>
  );
}
