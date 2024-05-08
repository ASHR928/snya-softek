import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isInView = useInView(ref, { threshold: 0.5 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && !isVisible) {
      mainControls.start("visible");
      setIsVisible(true);
    } else if (!isInView && isVisible) {
      mainControls.start("hidden");
      setIsVisible(false);
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

export default Reveal;
