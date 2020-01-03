import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Sort from './components/Sort';
import './App.css';

const App = () => {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path='/' component={Landing}/>
      <Route path='/sort' component={Sort}/>
    </Router>
  );
}

export default App;