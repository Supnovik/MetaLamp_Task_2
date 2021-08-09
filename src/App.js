import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import UI from "./Pages/UI/UI";
import CardsPage from "./Pages/CardsPage/CardsPage";
import HeadersFootes from "./Pages/HeadersFooters/HeadersFooters";
import LandingPage from "./Pages/LandingPage/LandingPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SearchRoomPage from "./Pages/SearchRoomPage/SearchRoomPage";
import RoomDetails from "./Pages/RoomDetails/RoomDetails";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/MetaLamp_Task_2/" component={Home} />
        <Route path="/MetaLamp_Task_2/UI" component={UI} />
        <Route path="/MetaLamp_Task_2/CardsPage" component={CardsPage} />
        <Route
          path="/MetaLamp_Task_2/HeadersFootes"
          component={HeadersFootes}
        />
        <Route path="/MetaLamp_Task_2/LandingPage" component={LandingPage} />
        <Route
          path="/MetaLamp_Task_2/RegistrationPage"
          component={RegistrationPage}
        />
        <Route path="/MetaLamp_Task_2/LoginPage" component={LoginPage} />
        <Route
          path="/MetaLamp_Task_2/SearchRoomPage"
          component={SearchRoomPage}
        />
        <Route path="/MetaLamp_Task_2/RoomDetails" component={RoomDetails} />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/MetaLamp_Task_2/">Home</Link>
        </li>
        <li>
          <Link to="/MetaLamp_Task_2/UI">UI</Link>
        </li>
        <li>
          <Link to="/MetaLamp_Task_2/CardsPage">CardsPage</Link>
        </li>
        <li>
          <Link to="/MetaLamp_Task_2/HeadersFootes">HeadersFootes</Link>
        </li>
        <li>
          <Link to="/MetaLamp_Task_2/LandingPage">LandingPage</Link>
        </li>
        <li>
          <Link to="/MetaLamp_Task_2/RegistrationPage">RegistrationPage</Link>
        </li>
        <li>
          <Link to="/MetaLamp_Task_2/LoginPage">LoginPage</Link>
        </li>
        <li>
          <Link to="/MetaLamp_Task_2/SearchRoomPage">SearchRoomPage</Link>
        </li>
        <li>
          <Link to="/MetaLamp_Task_2/RoomDetails">RoomDetails</Link>
        </li>
      </ul>
    </div>
  );
}
