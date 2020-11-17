import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRentHouse from "./Components/AddRentHouse/AddRentHose.js";
import BookingList from "./Components/BookingList/BookingList.js";
import Homepage from "./Components/Home/Homepage/Homepage.js";
import HomeDetail from "./Components/HomeDetail/HomeDetail.js";
import Login from "./Components/Login/Login.js";
import MyRent from "./Components/MyRent/MyRent.js";
import NotFound from "./Components/NotFound/NotFound.js";
import Registration from "./Components/Registration/Registration.js";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
export const usercontext = createContext();
function App() {
  const [userinfo, setUserinfo] = useState({
    email: "",
  });

  return (
    <>
      <usercontext.Provider value={[userinfo, setUserinfo]}>
        <Router>
          <Switch>
            <Route path exact="/">
              <Homepage />
            </Route>

            <Route path="/home-detail">
              <HomeDetail />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/registration">
              <Registration />
            </Route>

            <PrivateRoute path="/add-rent-house">
              <AddRentHouse />
            </PrivateRoute>

            <PrivateRoute path="/my-rent">
              <MyRent />
            </PrivateRoute>

            <PrivateRoute path="/booking-list">
              <BookingList />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </usercontext.Provider>
    </>
  );
}

export default App;
