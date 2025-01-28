import { useRef } from "react";
import "./portfolio.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { items } from "../../projects";

function Single({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <motion.div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            {/* <p> {item.desc}</p> */}
            <a href={item.link} rel="noreferrer" target="_blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end", "start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref} id="portfolio">
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Portfolio;
