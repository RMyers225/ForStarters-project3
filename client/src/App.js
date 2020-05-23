import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.js'
import AdminEvents from './components/AdminEvents.js'
import AdminPlaces from './components/AdminPlaces.js'
import AdminQuestions from './components/AdminQuestions.js'
import Events from './components/Events.js'
import Places from './components/Places.js'
import Questions from './components/Questions.js'
import SingleEvent from './components/SingleEvent.js'
import SinglePlace from './components/SinglePlace.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HelloWorld}/>
          <Route exact path="/AdminEvents" component={AdminEvents}/>
          <Route exact path="/AdminPlaces" component={AdminPlaces}/>
          <Route exact path="/AdminQuestions" component={AdminQuestions}/>
          <Route exact path="/Events" component={Events}/>
          <Route exact path="/Places" component={Places}/>
          <Route exact path="/Questions" component={Questions}/>
          <Route exact path="/Events/:eventId" component={SingleEvent}/>
          <Route exact path="/Places/:placeId" component={SinglePlace}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
