import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import { fadeInAnim } from "../../assets/data";

import "./PortfolioCard.scss";

const PortfolioCard = ({
  imageUrl,
  imageAlt,
  title,
  description,
  stack,
  gitUrl,
  liveUrl,
}) => {
  return (
    <motion.div
      initial={fadeInAnim.initial}
      whileInView={fadeInAnim.whileInView}
      viewport={fadeInAnim.viewport}
      whileHover={{
        scale: 0.98,
        transition: { duration: 0.3 },
      }}
      className="portfolio-card"
    >
      <div className="portfolio-card__image">
        <a href={liveUrl} target="_blank" rel="noreferrer">
          <LazyLoadImage alt={imageAlt} effect="blur" src={imageUrl} />
        </a>
      </div>
      <div className="portfolio-card__content">
        <div className="portfolio-card__text">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="portfolio-card__stack">
          {stack.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
        <div className="portfolio-card__btns">
          {gitUrl !== "" && (
            <a href={gitUrl} target="_blank" rel="noreferrer">
              <button className="outlined-btn">
                <GitHubIcon sx={{ mr: 1 }} />
                Code
              </button>
            </a>
          )}
          <a href={liveUrl} target="_blank" rel="noreferrer">
            <button className="outlined-btn">
              <VisibilityIcon sx={{ mr: 1 }} />
              Live
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
