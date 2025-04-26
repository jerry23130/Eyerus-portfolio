import data from "../../Data/index.json";

export default function Skills() {
  return (
    <section className="skill-section" id="myskills">
      <div className="portfolio-container">
        <p className="sectio-title">My Skills</p>

        <div className="skills-grid">
          {data.skills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <img src={skill.src} alt={skill.title} className="skill-icon" />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
