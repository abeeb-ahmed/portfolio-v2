import AnimatedCursor from "react-animated-cursor";

import "./App.scss";
import Header from "./containers/Header/Header";
import Portfolio from "./containers/Portfolio/Portfolio";
import About from "./containers/About/About";
import Skills from "./containers/Skills/Skills";
import Footer from "./containers/Footer/Footer";
import Contact from "./containers/Contact/Contact";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <div className="cursor-dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
