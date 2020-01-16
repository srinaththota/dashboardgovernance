import React from 'react';
import classes from './Header.module.css';
import Login from '../../../container/login/Login';


import Layout from '../Layout';

import {Link , Route} from 'react-router-dom';
const Header=()=>{

  return(

    <div className={classes.content}>
        Dashboard Governance
    
    </div>
);
}

export default Header;