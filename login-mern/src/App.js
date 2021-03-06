//
// Importing required files/ components
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
import UserContext from "./context/UserContext";

import "./style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,

  });

  // function that runs when the app starts to see if the user is still logged in and it does so by validating the token 
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data
        });
      }
     
    };
    checkLoggedIn();

  }, []);

  return (

    <>
      {/* Everything inside the BrowserRouter has access to the routes 
  Everything in the Switch has access to checking out the url
  The Routes have access to the components to act as page switches*/}
      <BrowserRouter>

        {/* Everything inside of the Provider has access to the value state */}
        <UserContext.Provider value={{ userData, setUserData }}>


          <Header />
          
          <div className="container" > {/* change container and remove its reference in style.css to react-bootstrap for better styling & another technology*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

          </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>

    </>

  );

}
