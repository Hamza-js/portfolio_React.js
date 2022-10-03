import React from "react";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function headersocials() {
  return (
    <div className="header-socials">
      <a href="https://linkedin.com" target="_blank">
        <ImLinkedin2 />
      </a>
      <a href="https://github.com" target="_blank">
        <AiOutlineGithub />
      </a>
      <a href="https://facebook.com" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}

export default headersocials;
