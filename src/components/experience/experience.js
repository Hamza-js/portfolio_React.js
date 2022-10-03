import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function experience() {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h1>My Experience</h1>
      <div className="exp-container container">
        <div className="exp-frontend">
          <h3>Frontend Development</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="taxt-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="taxt-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="taxt-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="taxt-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>React</h4>
                <small className="taxt-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="taxt-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="taxt-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend starts here */}

        <div className="exp-backend">
          <h3>Backend Development</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="taxt-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>Express JS</h4>
                <small className="taxt-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="taxt-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience;
