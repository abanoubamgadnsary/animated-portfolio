import { useRef } from "react";
import "./services.scss";
import { useInView, motion } from "framer-motion";

const variants = {
  initial: {
    x: -250,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus ipsa voluptas ipsum doloremque quia facilis eius error
            dignissimos eveniet neque consectetur, distinctio sit laborum, quis
            est necessitatibus sequi quod!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus ipsa voluptas ipsum doloremque quia facilis eius error
            dignissimos eveniet neque consectetur, distinctio sit laborum, quis
            est necessitatibus sequi quod!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus ipsa voluptas ipsum doloremque quia facilis eius error
            dignissimos eveniet neque consectetur, distinctio sit laborum, quis
            est necessitatibus sequi quod!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus ipsa voluptas ipsum doloremque quia facilis eius error
            dignissimos eveniet neque consectetur, distinctio sit laborum, quis
            est necessitatibus sequi quod!
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
