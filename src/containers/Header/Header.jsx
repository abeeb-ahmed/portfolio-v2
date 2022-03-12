import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import Lottie from "react-lottie";

import animationData from "../../assets/lotties/bubble.json";
import "./Header.scss";

const Header = () => {
  const mobileScreen = useMediaQuery("(max-width:500px)");
  const midScreen = useMediaQuery("(max-width:768px)");

  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

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

        <div className="header__right">
          <motion.div
            id="logo"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1],
              transition: { ease: "easeInOut", delay: 0.5 },
            }}
            drag={midScreen ? false : true}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
            dragSnapToOrigin={midScreen ? false : true}
            whileHover={{ scale: midScreen ? 1 : 1.1, cursor: "pointer" }}
          >
            <Lottie options={defaultLottieOptions} height={500} width={500} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
