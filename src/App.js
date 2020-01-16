import React from 'react';
import Header from './compnents/layout/Header/Header';
import {Link , Route} from 'react-router-dom';
import Login from './container/login/Login';
import Layout from './compnents/layout/Layout';



function App() {
  return (
    <div>
     <Link to="/">Login</Link>
      <Link to="/layout">Dashboard</Link>
        <Route path="/" exact component={Login}/>
        <Route path="/layout" exact component={Layout}/>
    </div>
  );
}

export default App;
