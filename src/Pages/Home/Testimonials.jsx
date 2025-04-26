import React from "react";

// Reusable Stars Component
function Stars({ count }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      style={{ color: i < count ? "#f5c518" : "#ccc", fontSize: "20px" }}
    >
      ★
    </span>
  ));
  return <div className="testimonial-stars">{stars}</div>;
}

function Testimonials() {
  return (
    <section id="Testimonials" className="testimonials-section">
      <h2 className="section-heading">FeedBack</h2>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Working with you was a fantastic experience. Your attention to
            detail and commitment to quality were outstanding.”
          </p>
          <Stars count={5} />
          <h4 className="testimonial-name">MEKLIT ANTENEH</h4>
          <p className="testimonial-role">Software Section A</p>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “You are a good frontend developer. Glad to see you doing well.”
          </p>
          <Stars count={4} />
          <h4 className="testimonial-name">Eyerusalem Erimias</h4>
          <p className="testimonial-role">Information Systems</p>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “You're trying your best to become a great developer. Keep it up!”
          </p>
          <Stars count={4} />
          <h4 className="testimonial-name">Yonas</h4>
          <p className="testimonial-role">Electrical Engineering</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
