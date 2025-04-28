import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import data from "../../Data/index.json";

export default function Project() {
  return (
    <section className="portfolio-section" id="Project">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <p className="sub-titl">Recent Projects</p>
          <h2 className="section-heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github">
            <a
              href="https://github.com/jerry23130"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link-text"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="github-link-label">Visit My GitHub</span>
            </a>
          </button>
        </div>
      </div>
      <div className="portfolio-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio-section-card">
            <div className="portfolio-section-img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="portfolio-section-card-content">
              <div>
                <h3 className="portfolio-section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio-link">
                <a
                  href="https://github.com/jerry23130"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
