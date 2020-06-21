import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import DataViewer from './components/DataView';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/data-view" component={DataViewer}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
