import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import UI from "./Pages/UI/UI";
import CardsPage from "./Pages/CardsPage/CardsPage";
import HeadersFootes from "./Pages/HeadersFooters/HeadersFooters";

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
      </ul>
    </div>
  );
}
