import React, {useState,useEffect} from 'react';

import '../assets/css/App.css';
import '../assets/css/utilities.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from '../pages/HomePage';

function App() {

  const [resorts, setResort] = useState([])

  useEffect(()=>{

    fetch("http://localhost:5000/resorts")
    .then(res=>res.json())
    .then(data=>{
      setResort(data)
    })

  },[])

  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <HomePage resorts = {resorts}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
