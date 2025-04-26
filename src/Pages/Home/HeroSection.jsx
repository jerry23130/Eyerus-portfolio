export default function HeroSection() {
  return (
    <section id="HeroSection" className="hero-alex-style">
      <div className="hero-text">
        <h1>
          <span className="highlight">I AM</span> EYERUS.
        </h1>
        <p className="subline">WELCOME TO MY PORTFOLIO</p>
        <a href="#Project" className="cta-link">
          See All Projects ↵
        </a>
      </div>
      <div className="hero-image-wrapper">
        <div className="circle-bg">
          <img src="./img/pi.jpg" alt="Eyerus" className="styled-image" />
        </div>
      </div>
    </section>
  );
}
