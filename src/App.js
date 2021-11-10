import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CrearJuego from './pages/CrearJuego';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
       <Switch>
            <Route exact path="/" component={() => {
              return <HomePage/>
            }} />
            <Route exact path="/crearJuego" component={CrearJuego} />
          </Switch>
    </Router>
    
  );
}

export default App;
