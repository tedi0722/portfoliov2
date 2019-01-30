import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Work from './components/Work/Work';
import About from './components/About/About';

import Footer from './components/Footer/Footer';

import GRNaturals from './components/GRNaturals/GRNaturals';

import './App.css';


const App = () => 
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar />
          <Route exact path="/" component={Work} />
          <Route path="/About" component={About} />
          <Route path="/Resume" />
          <Route path="/Contact" />
          <Route path="/GingerRedNaturals" component={GRNaturals} />
          <Route path="/TriviaGame" />
          <Footer />
        </div>
      </Router>


export default App;
