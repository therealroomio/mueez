import { useEffect } from "react";
import "./Work.css";
import { Link } from "react-router-dom";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Cursor from "../../components/Cursor/Cursor";
import Transition from "../../components/Transition/Transition";
import BackButton from "../../components/BackButton/BackButton";

import { ReactLenis } from "@studio-freight/react-lenis";

import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Work = () => {
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <ReactLenis root>
      <Cursor />
      <div className="sample-project">
        <BackButton />

        <section className="sp-title">
          <div className="container">
            <h1>Vertical Horizon Residences</h1>
          </div>
        </section>

        <section className="sp-banner">
          <img src="/work/work1.jpg" alt="" />
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Vertical Horizon</p>

              <div className="sp-tags">
                <p>Architectural Visualization</p>
                <p>Interior Design</p>
                <p>3D Rendering</p>
                <p>Technical Documentation</p>
              </div>

              <div className="sp-date">
                <p>March 2024</p>
              </div>

              <div className="sp-link">
                <Link to="/">
                  <button>
                    <div className="icon">
                      <IoIosArrowRoundForward size={16} />
                    </div>
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="sp-details-col">
              <p>Challenge</p>
              <p>
                Vertical Horizon Residences represents a bold reimagining of urban living spaces. 
                In an era where metropolitan density challenges traditional architectural paradigms, 
                we set out to create a residential complex that harmonizes vertical expansion with 
                horizontal connectivity. Through sophisticated 3D visualization and meticulous 
                technical planning, the project envisions a living space that transcends conventional 
                boundaries—creating a sanctuary where architectural innovation meets human-centric design.
              </p>
            </div>
          </div>
        </section>

        <section className="showreel">
          <VideoPlayer />
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Challenge</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Vertical Horizon explores the delicate balance between architectural ambition and 
                environmental consciousness. Drawing inspiration from the vertical gardens of Singapore 
                and the cascading terraces of ancient civilizations, we envisioned a structure that 
                grows skyward while maintaining intimate connections with nature and community. This 
                design philosophy manifests in a series of interconnected spaces that challenge the 
                traditional notion of high-rise living.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/work/work2.jpg" alt="" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Creative Solution</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Our approach to Vertical Horizon centered on creating a seamless integration of 
                built and natural environments. Using advanced parametric design tools and 
                environmental simulation software, we developed a facade system that responds 
                to solar patterns and wind conditions. The visualization process involved detailed 
                material studies and lighting scenarios, captured through high-fidelity 3D renders 
                that showcase the interplay between light, shadow, and architectural form throughout 
                the day.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/work/work3.jpg" alt="" />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>Credits</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Project</p>
                </div>
                <div className="credits-copy">
                  <p>Vertical Horizon Residences</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Our Role</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Architectural Visualization, Interior Design, 3D Rendering,
                    Technical Documentation
                  </p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Team</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Directors</p>
                </div>
                <div className="credits-copy">
                  <p>Sarah Chen (Lead Architect), Marcus Wong (Design Director)</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Project Lead</p>
                </div>
                <div className="credits-copy">
                  <p>David Park</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Architectural Design & Visualization</p>
                </div>
                <div className="credits-copy">
                  <p>Sarah Chen</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Technical Documentation & BIM</p>
                </div>
                <div className="credits-copy">
                  <p>Marcus Wong</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Environmental Analysis</p>
                </div>
                <div className="credits-copy">
                  <p>Elena Martinez</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Structural Engineering</p>
                </div>
                <div className="credits-copy">
                  <p>James Foster</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Landscape Architecture</p>
                </div>
                <div className="credits-copy">
                  <p>Terra Form Studios</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Sustainability Consultants</p>
                </div>
                <div className="credits-copy">
                  <p>EcoSync Solutions</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Client</p>
                </div>
                <div className="credits-copy">
                  <p>Horizon Development Group</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Special Thanks</p>
                </div>
                <div className="credits-copy">
                  <p>Urban Planning Department, City Sustainability Office</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/projects/project4.jpg" alt="" />
          </div>

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <div className="next-project-title">
                <h1>Urban Oasis Complex by MetroForm Architects</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Work);
