import {Switch, Route} from 'react-router-dom';
import React from 'react';

import Home from './components/Home';
import Search from './components/Search';
import CharDetails from './components/CharDetails';

export default(
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/search" component={Search}/>
    <Route path="/chardetails/:id" component={CharDetails}/>
  </Switch>
)