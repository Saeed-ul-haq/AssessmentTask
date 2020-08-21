import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Table from './components/table/Table'
import Statistic from './components/statistics/Statistics';
import Home from './components/home/Home';
import UI from './layouts/UI'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact  ><UI component={<Home/>}></UI></Route>
        <Route path="/table"  ><UI component={<Table />} /></Route>
        <Route path="/statistics"  ><UI component={<Statistic />} /></Route>
        </Switch>
      
      </Router> 
    
    </div>
  );
}

export default App;
