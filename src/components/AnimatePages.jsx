import { motion } from "framer-motion";

const animations = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "100vh", scale: 1, opacity: 1 },
  exit: { scale: 2, opacity: 0 },
};

const AnimatedPage = ({ children }) => {
  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 1,
          ease: "linear",
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedPage;
