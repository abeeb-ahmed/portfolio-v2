import React from "react";
import { motion } from "framer-motion";

import "./Skills.scss";
import { fadeInAnim, skills } from "../../assets/data";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

const Skills = () => {
  return (
    <div id="skills" className="bar-padding">
      <motion.div
        className="skills__container container"
        initial={fadeInAnim.initial}
        whileInView={fadeInAnim.whileInView}
        viewport={fadeInAnim.viewport}
      >
        <HeaderTitle headerSubTitle="03" headerTitle="Skills" />
        <motion.p
          initial={fadeInAnim.initial}
          whileInView={fadeInAnim.whileInView}
          viewport={fadeInAnim.viewport}
        >
          Here are few of the technologies and stacks I’m proficient in:
        </motion.p>
        <motion.ul
          initial={fadeInAnim.initial}
          whileInView={fadeInAnim.whileInView}
          viewport={fadeInAnim.viewport}
        >
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Skills;
