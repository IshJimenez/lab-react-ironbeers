import React from 'react';
import './App.css';
import Homepage from './Component/Homepage.js';
import Beers from './Component/Beers.js';
import NewBeer from './Component/NewBeer.js';
import RandomBeer from './Component/RandomBeer.js';
import { Switch, Route } from 'react-router-dom';
import BeersDetail from './Component/BeersDetail.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Beers' component={Beers}/>
        <Route exact path='/Beers/:id' component={BeersDetail}/>
        <Route exact path='/RandomBeer' component={RandomBeer}/>
        <Route exact path='/NewBeer' component={NewBeer}/>
        
      </Switch>

    </div>
  );
}

export default App;
