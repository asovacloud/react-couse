import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Landing from './pages/LandingComponent';
import Login from './pages/LoginComponent';
import ForOFor from './pages/ForOFor';
import Coins from './pages/coins/CointsComponent';

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
            <nav className="main-navigation">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName='active'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coins" activeClassName='active'>Coins</NavLink>
                    </li>
                    <li><a href="">Link 4</a></li>
                    <li><a href="">Link 5</a></li>
                    <li><a href="">Link 6</a></li>
                </ul>
            </nav>
            <Switch>
                <Route path='/' exact component={ Landing } />
                <Route path='/login' component={ Login } />
                <Route path='/coins' component={ Coins } />
                <Route component={ForOFor} />
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
