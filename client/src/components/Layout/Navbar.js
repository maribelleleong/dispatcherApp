import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './navbar.scss';

export default function Navbar() {
  return (
    <Router>
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>Ninja Dispatcher</Link>
        </h1>
        <ul>
          <Link to='/login'>
            <li>Admin Login</li>
          </Link>
        </ul>
      </nav>
    </Router>
  );
}
