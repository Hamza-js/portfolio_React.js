import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

function services() {
  return (
    <section id="sevices">
      <h5>What I Offer</h5>
      <h1>Services</h1>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsCheck className="service-list-icon" />
              <p>UI based application</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Solving issues in existing Apps.</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Map Based Application</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Chat Application.</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Social Network Application.</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Web service based application.</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Facebook , Twitter , LinkedIn , Instagram integration.</p>
            </li>
          </ul>
        </article>
        {/* Web Development Starts here */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsCheck className="service-list-icon" />
              <p>Bug Fixing and constomization of existing App</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>PSD / Figma / XD to react / nextJs</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Frontend web development in react js, next js / react web app</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Complete Admin Panel</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>API Integration in React web app</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Complete E-commerce functionality</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Real-time chatting with audio and video Calls using socket.io</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Complete E-commerce functionality</p>
            </li>
          </ul>
        </article>
        {/* Mobile App Development starts here */}
        <article className="service">
          <div className="service-head">
            <h3>Graphic Designing</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsCheck className="service-list-icon" />
              <p>Flyer</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Social Media Post</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Postcard </p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Business card</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Illustration (need reference or idea)</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>- Re-design </p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Banner Ads</p>
            </li>
            <li>
              <BsCheck className="service-list-icon" />
              <p>Book Cover</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  );
}

export default services;
