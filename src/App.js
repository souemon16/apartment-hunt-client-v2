import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddRentHouse from "./Components/AddRentHouse/AddRentHose.js";
import BookingList from "./Components/BookingList/BookingList.js";
import Homepage from './Components/Home/Homepage/Homepage.js';
import HomeDetail from "./Components/HomeDetail/HomeDetail.js";
import Login from "./Components/Login/Login.js";
import MyRent from "./Components/MyRent/MyRent.js";
import NotFound from "./Components/NotFound/NotFound.js";
import Registration from "./Components/Registration/Registration.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path exact='/'>
            <Homepage />
          </Route>

          <Route path='/home-detail'>
            <HomeDetail />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/registration'>
            <Registration />
          </Route>

          <Route path='/add-rent-house'>
            <AddRentHouse />
          </Route>

          <Route path='/my-rent'>
            <MyRent />
          </Route>

          <Route path='/booking-list'>
            <BookingList />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;