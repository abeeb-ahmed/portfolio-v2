// Portfolio image size = 860 x 483

const portfolioData = [
  {
    id: 1,
    name: "Booky",
    description:
      "A booking reservation web app with an admin page to manage hotels, users and rooms.",
    liveUrl: "https://booky-web-app.onrender.com/",
    imageUrl: "https://i.ibb.co/CQy4CJm/booky2.png",
    imageAlt: "travel",
    stack: ["React", "Nodejs", "Axios", "MongoDB", "Sass", "JWT"],
    gitUrl: "https://github.com/abeeb-ahmed/booky-v2",
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
    name: "Chatty",
    description:
      "A chat application that allows you chat with your friends in real-time",
    liveUrl: "https://chatty-app-1tvv.onrender.com/",
    imageUrl: "https://i.ibb.co/6BsMQKn/chatty3.png",
    imageAlt: "chat",
    stack: ["React", "Firebase", "Sass"],
    gitUrl: "https://github.com/abeeb-ahmed/chatty-app",
  },
  {
    id: 4,
    name: "FolaDavid Care Foundation",
    description: "Website development for FolaDavid Foundation",
    liveUrl: "https://www.foladavidfoundation.org/",
    imageUrl: "https://i.ibb.co/BCTcDx3/Screenshot-2022-06-12-135806-1.png",
    imageAlt: "foladavid foundation",
    stack: ["React", "CSS"],
    gitUrl: "",
  },
  {
    id: 5,
    name: "Krypto",
    description:
      "A web app that allows you send ethereum from one wallet to another though smart contract, with transactions saved on the blockchain.",
    liveUrl: "https://krypt-abeeb.netlify.app/",
    imageUrl: "https://i.ibb.co/WHSQ5bB/krypto-img-1.png",
    imageAlt: "blockchain",
    stack: ["React", "Solidity", "Blockchain", "Tailwind CSS"],
    gitUrl: "https://github.com/abeeb-ahmed/krypt-crypto-app",
  },
  // {
  //   id: 5,
  //   name: "TechShop",
  //   description:
  //     "A fully functional ecommerce web app with payment gateway, user authentication, product filtering, admin page and so on.",
  //   liveUrl: "https://techshop-app.herokuapp.com/",
  //   imageUrl: "https://i.ibb.co/2dC4zDD/techshop-img.png",
  //   imageAlt: "ecommerce",
  //   stack: ["React", "NodeJs", "Axios", "MongoDB", "Bootstrap", "JWT"],
  //   gitUrl: "https://techshop-app.herokuapp.com/",
  // },
  // {
  //   id: 6,
  //   name: "Travel Advisory",
  //   description:
  //     "Find restaurants, hotels and places of attraction around you using Google map API and geolocator.",
  //   liveUrl: "https://travel-advisor-abeeb.netlify.app/",
  //   imageUrl: "https://i.ibb.co/ctS7tkM/travel-advisory-img-1.png",
  //   imageAlt: "travel",
  //   stack: ["React", "Material UI", "Axios", "Google Map API"],
  //   gitUrl: "https://github.com/abeeb-ahmed/travel-advisory-web",
  // },
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
