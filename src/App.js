import React from 'react';

import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import CheckoutPage from '../src/pages/checkout/checkout.component'
import SignInAndSignUp from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Hats from '../src/components/hats/hats.component'
import Jackets from '../src/components/jackets/jackets.component'

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
        <Route path='/checkout' component={CheckoutPage}/>
        <Route path='/hats' component={Hats}/>
        <Route path='/jackets' component={Jackets}/>
      </Switch>
    </div>
    // Route or Link can be added from react-router-dom and can be used for routing or link components
    // <Route exact path='' components={} /> ; <Link to={`${dynamic.link}/anyNumber`}>some txt</Link>
  );
}

export default App;
