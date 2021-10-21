import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import pages
import Authentification from './pages/Authentification';
import Registration from './pages/Registration';
import Users from './pages/Users';
import DeleteAccount from './pages/DeleteAccount';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/registration">Registration</Link>
            </li>

            <li>
              <Link to="/auth">Authentification</Link>
            </li>

            <li>
              <Link to="/users">Users</Link>
            </li>

            <li>
              <Link to="/delete_account">Delete Account</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/auth">
            <Authentification />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/delete_account">
            <DeleteAccount />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
