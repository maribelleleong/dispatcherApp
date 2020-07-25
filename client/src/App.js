import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Login from './components/Login';
import Toolbar from './components/Toolbar/Toolbar';
import Schedule from './components/Schedule/Schedule';

import './App.scss';

function App() {
  const [tasksList, setTasksList] = useState('');
  useEffect(() => {
    console.log('rawr from useEffect');
    axios.get('/tasks').then((res) => {
      setTasksList(res.data);
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Toolbar />
      <Schedule />
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
