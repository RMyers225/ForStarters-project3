import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.js'
import AdminEvents from './components/AdminEvents.js'
import AdminPlaces from './components/AdminPlaces.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HelloWorld}/>
          <Route exact path="/AdminEvents" component={AdminEvents}/>
          <Route exact path="/AdminPlaces" component={AdminPlaces}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
