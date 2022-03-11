import React from "react";
import { motion } from "framer-motion";

import "./HeaderTitle.scss";
import { fadeInAnim } from "../../assets/data";

const HeaderTitle = ({ headerTitle, headerSubTitle }) => {
  return (
    <motion.div
      className="header-title"
      initial={fadeInAnim.initial}
      whileInView={fadeInAnim.whileInView}
      viewport={fadeInAnim.viewport}
    >
      <div className="header-title__content">
        <span>{headerSubTitle}.</span>
        <h2>{headerTitle}</h2>
      </div>
      <div className="header-title__line"></div>
    </motion.div>
  );
};

export default HeaderTitle;
