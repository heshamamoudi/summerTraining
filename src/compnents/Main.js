import React from "react";
import Resume from "./resume";
import Landing from "./landingPage";
import Projects from "./projects";
import Contact from "./contact";

import { Switch, Route } from "react-router-dom";
//will route the navigation bar 
const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    {/* to solve the landing page issue */}
    <Route path="/summerTraining" component={Landing} />
  </Switch>
);
export default Main;
