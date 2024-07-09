import { useState } from "react";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import "./sidebar.scss";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 48px)",
    transition: { delay: 0.3, type: "spring", stiffness: 400, damping: 40 },
  },
};

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
