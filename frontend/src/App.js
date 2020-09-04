//
// Importing required files/ components
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Header from "./components/layout/Header"

import "./style.css";

export default function App() {
  return (

      <>
  {/* Everything inside the BrowserRouter has access to the routes 
  Everything in the Switch has access to checking out the url
  The Routes have access to the components to act as page switches*/}
  <BrowserRouter>
  <Header />
  <Switch>
    <Route exact path ="/" component={Home}/>
    <Route path ="/login" component={Login}/>
    <Route path ="/register" component={Register}/>

  </Switch>
  </BrowserRouter>

  </>

  );

}
