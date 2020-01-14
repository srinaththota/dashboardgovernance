import React , { Component } from 'react';
import classes from './Layout.module.css';
import Header from './Header/Header';
class Layout extends Component{

    render(){
        return(
            <div className={classes.container}>
                <div className={classes.headercontent}>
                <Header/>
                </div>
                <div className={classes.childcomp}>1</div>
                <div className={classes.childcomp}>2</div>
                <div className={classes.childcomp}>3</div>
                <div className={classes.childcomp}>4</div>
            </div>
        );
    }
}

export default Layout;