import React, { useState } from "react";
import Project from "./Components/Project/Projects";
import About from "./Components/About/Aabout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home";
import { useSpeechRecognition } from "react-speech-recognition";
import "./Components/Navbar.css";
import { FaBars, FaTimes, FaMicrophone } from "react-icons/fa";
import SpeechRecognition from "react-speech-recognition";

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
  const pages = ["home", "project", "about", "contact"];
  const urls = {
    home: "/",
    project: "/project",
    about: "/about",
    contact: "/contact",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null;
  }

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Couldn't find page : {redirectUrl}</p>;
    }
  }

  return (
    <div>
      <Router>
        {redirect}
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
            <li>
              <FaMicrophone
                size={20}
                style={{ color: "#fff" }}
                onClick={SpeechRecognition.startListening}
              />
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
