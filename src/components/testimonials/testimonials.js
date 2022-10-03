import React from "react";
import "./testimonials.css";
import AVRT1 from "../../assets/client1.jpeg";
import AVRT2 from "../../assets/th.jfif";
import AVRT3 from "../../assets/avatar3.jpg";
import AVRT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h1>Testimonials</h1>
      <Swiper // install Swiper modules
        className="container test-container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="container test-container">
          <SwiperSlide>
            <article className="testimomial">
              <div className="client-avatar">
                <img src={AVRT1} />
              </div>
              <h5>Ali Ahmer</h5>
              <small className="client-review">
                Hamza truly is the best. Delivered in a timely manner and fixed
                all bugs. Totally worth your money and time. I will work with
                him again and recommend him to anyone else 100%.
              </small>
            </article>
          </SwiperSlide>
        </div>

        <div className="container test-container">
          <SwiperSlide>
            <article className="testimomial">
              <div className="client-avatar">
                <img src={AVRT2} />
              </div>
              <h5>frathon</h5>
              <small className="client-review">
              Professional job - delivered as expected - couldn't ask for more! Highly recommended!
              </small>
            </article>
          </SwiperSlide>
        </div>
        <div className="container test-container">
          <SwiperSlide>
            <article className="testimomial">
              <div className="client-avatar">
                <img src={AVRT3} />
              </div>
              <h5>bigrat95</h5>
              <small className="client-review">
              You did a really great job responsive and animations looks on point! I will order more soon
              </small>
            </article>
          </SwiperSlide>
        </div>
        <div className="container test-container">
          <SwiperSlide>
            <article className="testimomial">
              <div className="client-avatar">
                <img src={AVRT4} />
              </div>
              <h5>cbay18
</h5>
              <small className="client-review">
              one page responsive PSD to HTML - good job - we happy
              </small>
            </article>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
}

export default testimonials;
