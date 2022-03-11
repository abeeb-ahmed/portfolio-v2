import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import useScrollListener from "../../hooks/useScrollListener";
import resume from "../../assets/resume.pdf";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scroll = useScrollListener();

  useEffect(() => {
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) setScrolled(true);
  }, [scroll.y, scroll.lastY]);

  const menuVariant = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: [0, 1],
      y: [-100, 0],
      transition: { staggerChildren: 0.2 },
    },
  };

  const menuItem = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: [0, 1],
      y: [-50, 5, 0],
    },
  };

  const mobileMenuVariant = {
    open: {
      x: "100%",
    },
    closed: {
      x: ["100%", "0%"],
      transition: { ease: "easeInOut", duration: 0.5, staggerChildren: 0.2 },
    },
  };
  const mobileItem = {
    open: {
      opacity: 0,
      x: 50,
    },
    closed: {
      opacity: 1,
      x: 0,
    },
  };

  const exitMenu = () => {
    setToggled(!toggled);
  };

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__laptop">
        <div className="logo">
          <a href="#header">
            <img src={logo} alt="abeeb" />
          </a>
        </div>

        <motion.ul variants={menuVariant} initial="initial" animate="animate">
          <motion.li variants={menuItem}>
            <motion.a href="#portfolio">
              <span>01.</span>Works
            </motion.a>
          </motion.li>
          <motion.li variants={menuItem}>
            <motion.a href="#about">
              <span>02.</span>About
            </motion.a>
          </motion.li>
          <motion.li variants={menuItem}>
            <motion.a href="#skills">
              <span>03.</span>Skills
            </motion.a>
          </motion.li>
          <motion.li variants={menuItem}>
            <motion.a href="#contact">
              <span>04.</span>Contact
            </motion.a>
          </motion.li>
          <motion.button className="outlined-btn" variants={menuItem}>
            <a href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </motion.button>
        </motion.ul>
      </div>
      <div className="navbar__mobile">
        <div className="logo">
          <a href="#header">
            <img src={logo} alt="abeeb" />
          </a>
        </div>
        <div
          className={`nav__toggler ${toggled ? "active" : ""}`}
          onClick={() => setToggled(!toggled)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <motion.ul
          initial={false}
          variants={mobileMenuVariant}
          animate={toggled ? "closed" : "open"}
        >
          <motion.li variants={mobileItem}>
            <a href="#portfolio" onClick={exitMenu}>
              <span>01.</span>
              <br />
              Works
            </a>
          </motion.li>
          <motion.li variants={mobileItem}>
            <a href="#about" onClick={exitMenu}>
              <span>02.</span>
              <br />
              About
            </a>
          </motion.li>
          <motion.li variants={mobileItem}>
            <a href="#skills" onClick={exitMenu}>
              <span>03.</span>
              <br />
              Skills
            </a>
          </motion.li>
          <motion.li variants={mobileItem}>
            <a href="#contact" onClick={exitMenu}>
              <span>04.</span>
              <br />
              Contact
            </a>
          </motion.li>
          <motion.button className="outlined-btn" variants={mobileItem}>
            <a href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </motion.button>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
