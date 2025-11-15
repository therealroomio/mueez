import { motion } from "framer-motion";
import { useEffect } from "react";
import "./Transition.css";

const TransitionWrapper = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeoutId = setTimeout(() => {
      document.body.style.overflow = "unset";
    }, 1000);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      {children}

      <motion.div
        className="slide-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-bg">
          <img src="/loader/loader-bg.jpg" alt="" />
        </div>
        <div className="transition-logo">
          <img src="/logo.png" alt="4th Tale Inc" />
        </div>
      </motion.div>

      <motion.div
        className="slide-out"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="loader-bg">
          <img src="/loader/loader-bg.jpg" alt="" />
        </div>
        <div className="transition-logo">
          <img src="/logo.png" alt="4th Tale Inc" />
        </div>
      </motion.div>
    </>
  );
};

const Transition = (OriginalComponent) => {
  const ComponentWithTransition = () => {
    return (
      <TransitionWrapper>
        <OriginalComponent />
      </TransitionWrapper>
    );
  };

  ComponentWithTransition.displayName = `Transition(${OriginalComponent.displayName || OriginalComponent.name || 'Component'})`;

  return ComponentWithTransition;
};

export default Transition;
