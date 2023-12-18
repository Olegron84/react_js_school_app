import React, { useState, useEffect } from "react";
import "./about.css";
import Back from "../../components/Back/Back";

const About = () => {
  const [click, setClick] = useState(false);
  const [aboutData, setAboutData] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  const handleScrollToTop = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch("/data/aboutData.json");
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAboutData();
  }, []);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const renderSteps = (steps) => {
    return (
      <ol>
        {steps.map((step, stepIndex) => (
          <li key={stepIndex}>{step}</li>
        ))}
      </ol>
    );
  };

  return (
    <>
      <Back title="Як організувати онлайн-навчання" />
      <section className="about" id="about-section">
        <div className="container">
          {aboutData?.map((item, index) => (
            <div className="box" key={index}>
              <button
                className="accordion"
                onClick={() => toggle(index)}
                key={index}
              >
                <h2>{item.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>
              {click === index ? (
                <div className="contentWrapper">
                  <div className="text">
                    {item.subtitle && <p>{item.subtitle}</p>}
                    {item.steps &&
                      item.steps.length > 0 &&
                      renderSteps(item.steps)}
                    {item.link && item.link.length > 0 && (
                      <div>
                        {item.link.map((link, linkIndex) => (
                          <p key={linkIndex}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Переглянути детально
                            </a>
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  {item.video && item.video.length > 0 && (
                    <div className="video-container">
                      {item.video.map((videoLink, videoIndex) => (
                        <iframe
                          key={videoIndex}
                          src={videoLink}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
      {showScrollButton && (
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          <i className="fa fa-chevron-up"></i>
        </button>
      )}
    </>
  );
};

export default About;
