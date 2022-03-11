import React from "react";

import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { portfolioData } from "../../assets/data";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div id="portfolio" className="bar-padding">
      <div className="portfolio__container container">
        <HeaderTitle headerSubTitle="01" headerTitle="Works I've Done" />
        <div className="portfolio__grid-container">
          <div className="portfolio__grid">
            {portfolioData.map((item, i) => (
              <PortfolioCard
                key={i}
                index={i}
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                title={item.name}
                description={item.description}
                stack={item.stack}
                gitUrl={item.gitUrl}
                liveUrl={item.liveUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
