import { useEffect, useState, useRef } from "react";
import "./App.css";
import HeroGradient from "./components/HeroGradient/HeroGradient";
import ReactLenis from "@studio-freight/react-lenis";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

import { projects } from "./projects";

import { HiArrowRight } from "react-icons/hi";

const App = () => {
  const manifestoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const manifestoText = new SplitType(".manifesto-title h1", {
      types: ["words", "chars"],
      tagName: "span",
      wordClass: "word",
      charClass: "char",
    });

    const style = document.createElement("style");
    style.textContent = `
      .word {
        display: inline-block;
        margin-right: 0em;
      }
      .char {
        display: inline-block;
      }
    `;
    document.head.appendChild(style);

    gsap.set(manifestoText.chars, {
      opacity: 0.25,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".manifesto",
        start: "top 50%",
        end: "bottom 75%",
        scrub: true,
        markers: false,
      },
    });

    manifestoText.chars.forEach((char, index) => {
      tl.to(
        char,
        {
          opacity: 1,
          duration: 0.1,
          ease: "none",
        },
        index * 0.1
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      manifestoText.revert();
      style.remove();
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="app">
        <section className="hero">
          <HeroGradient />
          <div className="header-container">
            <div className="header h-1">
              <h1>United,</h1>
              <h1>Unbound</h1>
            </div>
            <div className="header h-2">
              <h1>Tokyo-born,</h1>
              <h1>Creative studio</h1>
            </div>
            <div className="header h-3">
              <h1>Hoi tu,</h1>
              <h1>Khong gioi han</h1>
            </div>
            <div className="header h-4">
              <h1>Creative studio,</h1>
              <h1>Den tu Tokyo</h1>
            </div>
          </div>
        </section>

        <section className="work">
          <div className="container">
            <div className="work-header">
              <HiArrowRight size={13} />
              <p>Selected project</p>
            </div>

            <div className="projects">
              <div className="project-col">
                {projects
                  .filter((project) => project.column === 1)
                  .map((project) => (
                    <div className="project" key={project.id}>
                      <div className="project-img">
                        <img src={project.image} alt="Project Thumbnail" />
                      </div>
                      <div className="project-name">
                        <h2>{project.title}</h2>
                      </div>
                      <div className="project-description">
                        <p>{project.description}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="project-col">
                {projects
                  .filter((project) => project.column === 2)
                  .map((project) => (
                    <div className="project" key={project.id}>
                      <div className="project-img">
                        <img src={project.image} alt="Project Thumbnail" />
                      </div>
                      <div className="project-name">
                        <h2>{project.title}</h2>
                      </div>
                      <div className="project-description">
                        <p>{project.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="cta-bg-img">
            <img src="/cta/cta-bg.png" alt="" />
          </div>
          <div className="cta-title">
            <p>They trust us</p>
          </div>
          <div className="cta-header">
            <h2>
              Nike, Canada Goose, Mercari, Louis Vuitton, Shiseido, Amazon
              Fashion, Adidas, Hypebeast, Chupa Chups, JAL airlines, JETRO,
              Yonex, Toyota, Sony, Yamaha
            </h2>
          </div>
          <div className="cta-btn">
            <button>More details on origin.co</button>
          </div>
        </section>

        <section className="manifesto" ref={manifestoRef}>
          <div className="container">
            <div className="manifesto-header">
              <HiArrowRight size={13} />
              <p>Manifesto</p>
            </div>
            <div className="manifesto-title">
              <h1>
                We challenge norms, embrace change, pioneer progress. We are
                innovators merging art and technology to craft experiences that
                surprise, delight, and evolve.
              </h1>
            </div>
          </div>
        </section>

        <section className="process"></section>
      </div>
    </ReactLenis>
  );
};

export default App;
