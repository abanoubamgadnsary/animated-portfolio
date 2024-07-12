import { motion } from "framer-motion";
import "./hero.scss";

const variants = {
  inital: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidVariants = {
  inital: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      stiffness: 2,
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={variants}
          initial="inital"
          animate="animate"
        >
          <motion.h2 variants={variants}>Abanoub Amgad</motion.h2>
          <motion.h1 variants={variants}>
            Web Developer and UI Desginer
          </motion.h1>

          <motion.div variants={variants} className="buttons">
            <motion.a variants={variants} href="#portfolio">
              <motion.button variants={variants}>
                See the latest Works
              </motion.button>
            </motion.a>

            <motion.a variants={variants} href="#contact">
              <motion.button variants={variants}>Contact Me</motion.button>
            </motion.a>
          </motion.div>

          <motion.img
            variants={variants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextConatiner"
        variants={slidVariants}
        initial="inital"
        animate="animate"
      >
        Web Developer And Desginer
      </motion.div>
      <div className="imgContainer">
        <img src="hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
