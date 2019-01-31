import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// pages
import Work from './pages/Work/Work';
import About from './pages/About/About';
import GRNaturals from './pages/GRNaturals/GRNaturals';
import Verigate from './pages/Verigate/Verigate';
import BattleTactics from './pages/BattleTactics/BattleTactics';
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
          <Route path="/Verigate" component={Verigate} />
          <Route path="/BattleTactics" component={BattleTactics} />
          <Footer />
        </div>
      </Router>


export default App;
