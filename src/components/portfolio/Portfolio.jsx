import { useRef } from "react";
import "./portfolio.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://cdn.pixabay.com/photo/2024/05/18/08/16/cat-8769861_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis alias excepturi ab corrupti laborum harum asperiores minus illo doloremque, nesciunt officiis porro veniam temporibus sunt vitae repudiandae blanditiis. Tenetur.",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://cdn.pixabay.com/photo/2021/01/01/06/47/watermelon-5877895_640.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis alias excepturi ab corrupti laborum harum asperiores minus illo doloremque, nesciunt officiis porro veniam temporibus sunt vitae repudiandae blanditiis. Tenetur.",
  },
  {
    id: 3,
    title: "JS Commerce",
    img: "https://cdn.pixabay.com/photo/2023/09/29/07/58/watermelon-8283269_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis alias excepturi ab corrupti laborum harum asperiores minus illo doloremque, nesciunt officiis porro veniam temporibus sunt vitae repudiandae blanditiis. Tenetur.",
  },
  {
    id: 4,
    title: "HTML App",
    img: "https://cdn.pixabay.com/photo/2023/11/13/16/03/dead-sea-8385900_640.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis alias excepturi ab corrupti laborum harum asperiores minus illo doloremque, nesciunt officiis porro veniam temporibus sunt vitae repudiandae blanditiis. Tenetur.",
  },
];

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
            <p> {item.desc}</p>
            <button>See Demo</button>
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
