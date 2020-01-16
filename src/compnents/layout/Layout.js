import React , { Component } from 'react';
import classes from './Layout.module.css';
import Header from './Header/Header';
import LanguageBD from '../../container/LanguageBD/LanguageBD';
import ActiveDevelopers from '../../container/ActiveDevelopers/ActiveDevelopers';
//import CodeEvolution from '../../container/CodeEvolution/CodeEvolution';
class Layout extends Component{

    render(){
        return(
            <div>
            
            <div className={classes.container}>
                <div className={classes.childcomp}><LanguageBD/></div>
                <div className={classes.childcomp}><ActiveDevelopers/></div>
                <div className={classes.childcomp}>3</div>
                <div className={classes.childcomp}><LanguageBD/></div>
            </div>
            </div>
        );
    }
}

export default Layout;