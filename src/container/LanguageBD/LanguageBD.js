import React , { Component } from 'react';
import { PieChart } from 'react-d3-library';
import node from '../AppData/pieChart';



class  LanguageBD extends Component{

    state={
        d3:''
    }

    componentDidMount(){
        this.setState({d3:node});
    }

    render(){
    
    return(
        <div>
        <PieChart data={this.state.d3}/>
        </div>
    )
    }
} 

export default LanguageBD;