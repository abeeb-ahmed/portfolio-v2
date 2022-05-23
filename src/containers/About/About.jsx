import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import "./About.scss";
import { fadeInAnim } from "../../assets/data";

const About = () => {
  return (
    <div id="about" className="bar-padding">
      <div className="container">
        <HeaderTitle headerSubTitle="02" headerTitle="About Me" />
        <div className="about__container">
          <motion.div
            className="about__left"
            initial={fadeInAnim.initial}
            whileInView={fadeInAnim.whileInView}
            viewport={fadeInAnim.viewport}
          >
            <p>
              Hi, my name is Abeeb Ahmed and I fell in love with writing codes
              years ago when I started playing around with HTML to create basic
              websites, and I've been hooked ever since. <br />
              <br />I am proficient in a number of frontend and backend web
              technologies and cross-platform mobile app technologies. <br />
              <br />I always welcome the opportunity to learn new technologies
              and stacks in order to progressively become a better developer.{" "}
              <br />
              <br />
            </p>
          </motion.div>
          <div className="about__right">
            <motion.div
              className="about__right-image"
              whileHover={{ rotate: 20, scale: 1.2 }}
            >
              <LazyLoadImage
                alt="abeeb"
                effect="blur"
                src="https://i.ibb.co/tDTSpTX/IMG-3700-1.jpg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
