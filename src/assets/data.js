const portfolioData = [
  {
    id: 1,
    name: "Krypto",
    description:
      "A web app that allows you send ethereum from one wallet to another though smart contract, with transactions saved on the blockchain.",
    liveUrl: "https://krypt-abeeb.netlify.app/",
    imageUrl: "https://i.ibb.co/WHSQ5bB/krypto-img-1.png",
    imageAlt: "blockchain",
    stack: ["React", "Solidity", "Blockchain", "Tailwind CSS"],
    gitUrl: "https://github.com/abeeb-ahmed/krypt-crypto-app",
  },
  {
    id: 2,
    name: "Cryptoverse",
    description:
      "Website to get real time updates on cryptocurrency prices, news and other information.",
    liveUrl: "https://cryptoverse-abeeb.netlify.app/",
    imageUrl: "https://i.ibb.co/q9QHB1P/cryptoverse-img.png",
    imageAlt: "cryptocurrency",
    stack: ["React", "Material UI", "API", "Cryptocurrency"],
    gitUrl: "https://github.com/abeeb-ahmed/cryptoverse",
  },
  {
    id: 3,
    name: "Travel Advisory",
    description:
      "Find restaurants, hotels and places of attraction around you using Google map API and geo locator.",
    liveUrl: "https://travel-advisor-abeeb.netlify.app/",
    imageUrl: "https://i.ibb.co/ctS7tkM/travel-advisory-img-1.png",
    imageAlt: "travel",
    stack: ["React", "Material UI", "Axios", "Google Map API"],
    gitUrl: "https://github.com/abeeb-ahmed/travel-advisory-web",
  },
  {
    id: 4,
    name: "TechShop",
    description:
      "A fully functional ecommerce web app with payment gateway, user authentication, product filtering, admin page and so on.",
    liveUrl: "https://techshop-app.herokuapp.com/",
    imageUrl: "https://i.ibb.co/2dC4zDD/techshop-img.png",
    imageAlt: "ecommerce",
    stack: ["React", "NodeJs", "Axios", "MongoDB", "Bootstrap", "JWT"],
    gitUrl: "https://techshop-app.herokuapp.com/",
  },
];

const fadeInAnim = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: [0, 1],
    y: [50, 0],
    transition: { ease: "easeInOut", duration: "0.5" },
  },
  viewport: { once: true },
};

const skills = [
  "Javascript",
  "React",
  "NodeJs",
  "React Native",
  "MongoDB",
  "Firebase",
  "Flutter",
  "Solidity",
  "Dart",
  "CSS",
  "SCSS",
  "Framer Motion",
  "NextJs",
  "Typescript",
];

export { portfolioData, fadeInAnim, skills };
