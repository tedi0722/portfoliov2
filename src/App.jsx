import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// pages
import Work from './pages/Work/Work';
import About from './pages/About/About';
import GRNaturals from './pages/GRNaturals/GRNaturals';
// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


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
