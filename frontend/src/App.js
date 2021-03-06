import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import LoginFormPage from "./components/LoginFormPage";
import Rolls from "./components/Rolls";
import Bars from "./components/Bars";
import SushiBar from "./components/SushiBar";
import Reviews from "./components/Reviews";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/rolls">
            <Rolls />
          </Route>
          <Route exact path="/bars">
            <Bars />
          </Route>
          <Route path="/bars/:id">
            <SushiBar />
          </Route>
          <Route path="/reviews/:id">
            <Reviews />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
