import React from 'react';
import classes from './Header.module.css';
import Login from '../../../container/login/Login';
const Header=()=>{

  return(
    <div>
    <div className={classes.content}>
        Dashboard Governance
    </div>
    <div>
        <Login/>
        </div>
    </div>);
}

export default Header;