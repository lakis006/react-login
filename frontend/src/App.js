import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"


import './App.css';

export default function App() {
  return <>
  {/* Everything inside the BrowserRouter has access to the routes 
  Everything in the Switch has access to checking out the url*/}
  <BrowserRouter>
  <Switch>
    <Route path ="/" component={Home}/>

  </Switch>
  </BrowserRouter>

  </>;
}
