import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Header.scss";

const Header = () => {
  const midScreen = useMediaQuery("(max-width:768px)");

  const headerVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [0, 1],
      transition: {
        staggerChildren: 0.1,
        ease: "easeIn",
      },
    },
  };

  const headerItem = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div id="header" className="bar-padding">
      <div className="header__container">
        <div className="header__left">
          <motion.div
            className="header__content"
            variants={headerVariant}
            initial="initial"
            animate="animate"
          >
            <motion.p className="subTitle" variants={headerItem}>
              Hi, my name is
            </motion.p>
            <motion.div className="header__title big-heading">
              <motion.h5 variants={headerItem}>Abeeb Ahmed.</motion.h5>
              <motion.h5 variants={headerItem}>Software Developer.</motion.h5>
            </motion.div>
            <motion.div className="header__text">
              <motion.p variants={headerItem}>
                I’m a full stack web and mobile app developer that builds
                intuitive solutions using modern technology and stacks.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        <div className="scroll-container">
          <div className="scroll-box">
            <div className="scroller"></div>
          </div>
        </div>

        {/* <div className="header__right"></div> */}
      </div>
    </div>
  );
};

export default Header;
