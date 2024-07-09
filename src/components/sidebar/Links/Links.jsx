import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 50,
  },
};

function Links() {
  const item = ["Homepage", "Services", "portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {item.map((item) => (
        <motion.a
          href={`#${item}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={item}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
