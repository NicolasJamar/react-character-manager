import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./characters/home";
import Add from "./characters/add";
import Show from "./characters/show";
import Edit from "./characters/edit";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters/add" component={Add}/>
        <Route exact path="/characters/show/:id" component={Show}/>
        <Route exact path="/characters/edit/:id" component={Edit}/>
    </Switch>)

export default Routes
