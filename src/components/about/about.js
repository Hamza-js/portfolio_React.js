import React from "react";
import "./about.css";
import ME from "../../assets/hamza1.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function about() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h1>About Me</h1>

      <div className="container about-container">
        <div className="about-me">
          <div className="me-image">
            <img src={ME} alt=""></img>
          </div>
        </div>
        <div className="content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ Years Woking</small>
            </article>

            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
          Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS, JAVASCRIPT, React JS, React Native, Redux, Node, Express, MongoDB. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
