import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.8 },
};

const AnimatedPage = ({ children }) => {
  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedPage;
