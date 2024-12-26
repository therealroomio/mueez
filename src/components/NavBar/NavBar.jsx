import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === ".footer") {
        trigger.kill();
      }
    });

    ScrollTrigger.create({
      trigger: ".footer",
      start: isMobile ? "top 90%" : "top 80%",
      end: "bottom top",
      onEnter: () => {
        const navbar = document.querySelector(".navbar");
        if (navbar) navbar.classList.add("dark");
      },
      onLeaveBack: () => {
        const navbar = document.querySelector(".navbar");
        if (navbar) navbar.classList.remove("dark");
      },
      onRefresh: () => {
        const navbar = document.querySelector(".navbar");
        const footerBounds = document
          .querySelector(".footer")
          ?.getBoundingClientRect();
        if (navbar && footerBounds) {
          const triggerPoint = window.innerHeight * (isMobile ? 0.9 : 0.8);
          if (footerBounds.top <= triggerPoint) {
            navbar.classList.add("dark");
          } else {
            navbar.classList.remove("dark");
          }
        }
      },
    });

    const handleClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const element = document.querySelector(href);

      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop;

        const navbarHeight =
          document.querySelector(".navbar")?.offsetHeight || 0;

        window.scrollTo({
          top: targetPosition - navbarHeight,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll(".nav-links a, .logo a");
    links.forEach((link) => {
      link.removeEventListener("click", handleClick);
      link.addEventListener("click", handleClick);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ".footer") {
          trigger.kill();
        }
      });
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [isMobile]);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#hero">
            <h3>origin</h3>
          </a>
        </div>

        <div className="nav-items">
          <div className="langs">
            <p className="current-lang">EN</p>
            <p>VN</p>
            <p>ZH</p>
          </div>

          <div className="nav-links">
            <a href="#work">
              <p>Work</p>
            </a>
            <a href="#manifesto">
              <p>Manifesto</p>
            </a>
            <a href="#about">
              <p>Souls</p>
            </a>
            <a href="#team">
              <p>Team</p>
            </a>
            <a href="#contact">
              <p>Contact</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
