import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'
import CryptoList from './components/CryptoList'
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import NewChart from './components/NewChart'
import VisualisationIframe from './components/VisualisationIframe'
import ExtremeFomo from './components/ExtremeFomo'
import FallingMoney from './components/FallingMoney'
import MultiLineChart from './components/MultiLineChart'
import Ethereum from './components/aframe/Ethereum'
import Ripple from './components/aframe/Ripple'
import Bitcoin from './components/aframe/Bitcoin'
import LiteCoin from './components/aframe/Litecoin'
import TestingSound from './components/TestingSound'


class App extends Component {
  render() {
    return (
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/chart" component={NewChart}/>
            <Route exact path="/allcoins" component={CryptoList}/>
            <Route exact path="/multiview" component={MultiLineChart}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/extremefomo" component={ExtremeFomo}/>
            <Route exact path="/fallingmoney" component={FallingMoney}/>
            <Route exact path="/iframe" component={VisualisationIframe}/>
            <Route exact path="/ethereum" component={Ethereum}/>
            <Route exact path="/bitcoin" component={Bitcoin}/>
            <Route exact path="/ripple" component={Ripple}/>
            <Route exact path="/litecoin" component={LiteCoin}/>
            <Route exact path="/aframe" component={MultiLineChart}/>
            <Route exact path="/sound" component={TestingSound}/>
          </Switch>
         </div>
    );
  }
}

export default App;
