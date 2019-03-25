import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./characters/home";
import Add from "./characters/add";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters/add" component={Add}/>
    </Switch>)

export default Routes
