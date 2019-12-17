import React from 'react';
import {
  BrowserRouter as Router ,
  Route ,
  Redirect,
  Switch } from 'react-router-dom';

import './App.css';
import Movies from './components/pages/movies/Movies';
import Series from './components/pages/series/Series';
import Home from './components/pages/home/Home';
import MainNavigation from './components/Navigation/MainNavigation';
function App() {
  return (
    <Router>
      <MainNavigation />
     <main>
     <Switch>
      <Route path="/" exact>
          <Home />
      </Route>
      <Route path="/movies" exact>
          <Movies />
      </Route>
      <Router path="/series" exact>
         <Series />
      </Router>
      <Redirect to="/" />
     </Switch>
     </main>
    </Router>
  );
}

export default App;
