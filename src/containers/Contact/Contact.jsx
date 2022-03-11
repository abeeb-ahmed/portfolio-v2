import React from "react";
import { motion } from "framer-motion";

import "./Contact.scss";
import { fadeInAnim } from "../../assets/data";

const Contact = () => {
  return (
    <div id="contact" className="bar-padding">
      <div className="contact__container container">
        <motion.div
          className="contact__subtitle"
          initial={fadeInAnim.initial}
          whileInView={fadeInAnim.whileInView}
          viewport={fadeInAnim.viewport}
        >
          <span>04. </span>
          <p>Want To Talk?</p>
        </motion.div>
        <motion.div
          className="contact__title"
          initial={fadeInAnim.initial}
          whileInView={fadeInAnim.whileInView}
          viewport={fadeInAnim.viewport}
        >
          <h1>Get In Touch</h1>
        </motion.div>
        <motion.div
          className="contact__content"
          initial={fadeInAnim.initial}
          whileInView={fadeInAnim.whileInView}
          viewport={fadeInAnim.viewport}
        >
          <p>
            You can reach out to me concerning jobs or freelance opportunities,
            or even just to talk about tech, life and anything in between.
          </p>
          <button className="outlined-btn">
            <a
              href="mailto:abeebahmed@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
