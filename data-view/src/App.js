import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import DataViewer from './components/DataView';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/user" component={DataViewer}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
