import React from "react";

import "./Testimonials.style.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h3 className="heading">Testimonials</h3>
      <div className="container testimonials-container">
        <div className="testimonial">
          <p className="testimonial__text mb-25">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sed
            consequuntur dicta cum aliquam recusandae consequatur consectetur
            animi quisquam placeat.
          </p>

          <div className="testimonial__details">
            <div className="testimonial__img">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Nikunj Bhagat"
              />
            </div>
            <div className="testimonial__info">
              <h4 className="testimonial__name">Nikunj Bhagat</h4>
              <h5 className="testimonial__job">Founder and CEO</h5>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="testimonial__text mb-25">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
            vero aspernatur beatae tenetur a consequatur iure alias inventore?
            Eum, dolores?
          </p>

          <div className="testimonial__details">
            <div className="testimonial__img">
              <img
                src="https://images.unsplash.com/photo-1583664426440-daef00e4ad6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Aviroop Nandy"
              />
            </div>
            <div className="testimonial__info">
              <h4 className="testimonial__name">Aviroop Nandy</h4>
              <h5 className="testimonial__job">Web Developer</h5>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial__text mb-25">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla
            quo provident ipsum, aliquid maiores nesciunt officia explicabo
            minima earum.
          </p>

          <div className="testimonial__details">
            <div className="testimonial__img">
              <img
                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Nikunj Bhagat"
              />
            </div>
            <div className="testimonial__info">
              <h4 className="testimonial__name">Nikunj Bhagat</h4>
              <h5 className="testimonial__job">Founder and CEO</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
