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
        <Route exact path="/" component={Home} />
        <Route path="/UI" component={UI} />
        <Route path="/CardsPage" component={CardsPage} />
        <Route path="/HeadersFootes" component={HeadersFootes} />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/UI">UI</Link>
        </li>
        <li>
          <Link to="/CardsPage">CardsPage</Link>
        </li>
        <li>
          <Link to="/HeadersFootes">HeadersFootes</Link>
        </li>
      </ul>
    </div>
  );
}
