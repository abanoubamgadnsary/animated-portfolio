import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="warrper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Abanoub Amgad
        </motion.span>
        <div className="social-links">
          <motion.a
            target="_blank"
            whileHover={{ scale: 1.1 }}
            href="www.linkedin.com/in/abanoub-nasry-830a32261"
          >
            <img src="linkedin.webp" alt="LinkedIn" />
          </motion.a>
          <motion.a
            target="_blank"
            whileHover={{ scale: 1.1 }}
            href="https://github.com/abanoubamgadnsary/animated-portfolio"
          >
            <img src="github.png" alt="GitHub" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
