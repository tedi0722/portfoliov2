import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
// pages
import Work from './pages/Work/Work';
import About from './pages/About/About';
import GRNaturals from './pages/GRNaturals/GRNaturals';
import Verigate from './pages/Verigate/Verigate';
import BattleTactics from './pages/BattleTactics/BattleTactics';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
// assets
import './App.css';

const App = () => 
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <QueueAnim duration="2000" animConfig={{opacity:[1,0]}}>
            <NavBar key="1"/>
          </QueueAnim>
          <Route exact path="/" component={Work} />
          <Route path="/About" component={About} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Contact" component={Contact} />
          <Route path="/GingerRedNaturals" component={GRNaturals} />
          <Route path="/Verigate" component={Verigate} />
          <Route path="/BattleTactics" component={BattleTactics} />
          <Footer />
        </div>
      </Router>


export default App;
