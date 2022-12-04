
import React from 'react';
import './App.css';
import './components/Dashboard'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/Home';
import NavbarNew from './components/Navbar.js';
import About from './components/About';
import MapRegije from './components/Map';
import MapObcine from './components/MapObcine';
import Footer from './components/Footer';
import Poskus from './components/poskus';


function App() {
  return (
    <Router>
      <NavbarNew />
      
    <Switch>

      <Route path='/' exact component={Home} />

      <Route path='/regije' component={MapRegije} />

      <Route path='/obcine' component={MapObcine} />
        
      <Route path='/onas' component={About} />

      <Route path='/statistika' component={Dashboard} />

      <Route path='/poskus' component={Poskus} />

      </Switch>
      <Footer/>
  </Router>


  );
}

export default App;
