export default function About() {
  return (
    <section id="About" className="about-section">
      <div className="about-section-img ">
        <img src="./img/pi.jpg" alt="aboutme"></img>
      </div>
      <div className="hero-section-box-about-section-box">
        <div className="hero-section-content">
          <h1 className="skill-section-heading">About Me</h1>
          <p className="hero-section-descripition">
            {" "}
            I'm a software engineering student who's somewhere between "Hello
            World" and accidentally crashing my laptop with infinite loops.
            <br></br> I’m on a quest to learn all things code slowly,
            inconsistently, but passionately. Sometimes I'm up all night
            debugging like a pro, other times<br></br> I stare at my screen
            wondering how I ever passed Intro to Programming. My GitHub looks
            like Morse code bursts of activity followed by mysterious <br></br>
            silence. But hey, growth isn’t always linear, right?
          </p>
          <p className="hero-section-descripition">
            I love building little projects (when I actually finish them ),
            learning new frameworks (and forgetting them just as fast),<br></br>{" "}
            and pretending I know what I'm doing during group projects. Spoiler:
            I kinda don’t, but I’m learning. One semicolon at a time.<br></br>{" "}
            If you’re into chaotic learning journeys, memes about broken code,
            or just want to connect with someone who understands the struggle,
          </p>
        </div>
      </div>
    </section>
  );
}
