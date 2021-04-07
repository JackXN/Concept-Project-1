import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
<Router>
<Navbar/>
<Switch>
  <Route path = '/'/>
</Switch>
</Router>
 
  

  )
}

export default App;
