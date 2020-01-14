import React , { Component } from 'react';
import { BarChart } from 'react-d3-library';
import node from '../AppData/barChart';



class  ActiveDevelopers extends Component{

    state={
        d3:''
    }

    componentDidMount(){
        this.setState({d3:node});
    }

    render(){
    
    return(
        <div>
        <BarChart data={this.state.d3}/>
        </div>
    )
    }
} 

export default ActiveDevelopers;