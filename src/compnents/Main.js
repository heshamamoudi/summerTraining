import React from 'react';
import Resume from './resume';
import Landing from './landingPage';
import Projects from './projects';
import Contact from './contact';
import About from './aboutMe';
import {Switch, Route}from 'react-router-dom';

const Main =()=>(
    <Switch>
        <Route exact path="/" component={Landing}/>
<Route exact path="/resume" component={Resume}/>
<Route  path="/projects" component={Projects}/>
<Route  path="/contact" component={Contact}/>
<Route  path="/aboutMe" component={About}/>


    </Switch>
)
export default Main;