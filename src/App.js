import React, { useState } from "react";
import Project from "./Components/Project/Projects";
import About from "./Components/About/Aabout";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home";
import SpeechRecognitin, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Components/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const commands = [
    {
      command: ["Go to *", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });
  console.log({ transcript });
  const [redirectUrl, setRedirectUrl] = useState("");

  return (
    <div>
      <Router>
        <div className={color ? "header header-bg" : "header"}>
          <Link to="/">
            <h1>Portfolio.</h1>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
