import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

function App() {
  return (
    <Router>
    <div className="App">
     <Route path="/" render={
       ()=>{
         return (<h1>Welcome to using Router</h1>);
       }
     }/>
    </div>
    </Router>
  );
}

export default App;
