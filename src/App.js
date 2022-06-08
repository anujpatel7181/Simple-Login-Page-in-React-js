import React from "react";
import Project from "./Components/Project/Projects";
import About from "./Components/About/Aabout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Router>
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
