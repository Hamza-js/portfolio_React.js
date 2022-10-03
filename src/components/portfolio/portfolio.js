import React from "react";
import "./portfolio.css";
import GYM from "../../assets/gym.png";
import IMG2 from "../../assets/FoodDelivry.png";
import IMG3 from "../../assets/download.jfif";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h1>Portfolio</h1>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="item-image">
            <img src={GYM} />
          </div>
          <h3>Gym Website</h3>
          <div className="portfolio-item-cta">
            {/* <a href="http://github.com" className="btn" target="_blank">
              Github
            </a> */}
            <a
              href="https://fitclub-1my.pages.dev/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="item-image">
            <img src={IMG2} />
          </div>
          <h3>Food Delivery Website</h3>
          <div className="portfolio-item-cta">
            {/* <a href="http://github.com" className="btn" target="_blank">
              Github
            </a> */}
            <a
              href="https://cleancreations.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="item-image">
            <img src={IMG3} />
          </div>
          <h3>Graphic designing portfolio</h3>
          <div className="portfolio-item-cta">
            {/* <a href="http://github.com" className="btn" target="_blank">
              Github
            </a> */}
            <a
              href="https://drive.google.com/drive/folders/1-3_Eq_aISFIxrU1QNjcEvVevbMtO4NUF"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* <article className="portfolio-item">
          <div className="item-image">
            <img src={IMG4} />
          </div>
          <h3>This is a title</h3>
          <div className="portfolio-item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="item-image">
            <img src={IMG5} />
          </div>
          <h3>This is a title</h3>
          <div className="portfolio-item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="item-image">
            <img src={IMG6} />
          </div>
          <h3>This is a title</h3>
          <div className="portfolio-item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default portfolio;
