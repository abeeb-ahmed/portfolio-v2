import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import useMediaQuery from "@mui/material/useMediaQuery";

import animationData from "../../assets/lotties/bubble.json";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const mobileScreen = useMediaQuery("(max-width:500px)");
  const midScreen = useMediaQuery("(max-width:768px)");

  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
    <div id="header">
      <Navbar />
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
        <div className="header__right">
          <motion.div
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
            <Lottie
              options={defaultLottieOptions}
              height={mobileScreen ? 300 : 500}
              width={mobileScreen ? 300 : 500}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
