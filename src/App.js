import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import Accounts from './components/Accounts';
import Settings from './components/Settings';
import Login from './components/Login';
import Signup from './components/SignUp';
import HomeNavbar from "./components/HomeNavbar";

const HomeContainer = () => (
  <div className='App'>
    <HomeNavbar />
    <Route path='/' exact component={Home} />
    <Route path='/login' exact component={Login} />
    <Route path='/sign-up' exact component={Signup} />
  </div>
);

const DefaultContainer = () => (
  <div className="App">
    <Navbar />
    <Route path='/accounts' component={Accounts} />
    <Route path='/settings' component={Settings} />
  </div>
);

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route component={HomeContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
