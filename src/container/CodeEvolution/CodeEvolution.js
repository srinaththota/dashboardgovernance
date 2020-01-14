import React , { Component } from 'react';
import d3DataToJSX from '../../react-d3/d3toJSX';
import createAreaChart from '../../graphs/createAreaChart';



class  CodeEvolution extends Component{

    state={
        d3:''
    }

    constructor(props) {
        super(props);
        this.state = {d3DOM: [], state: []};
      }

      componentWillReceiveProps(nextProps) {
        let d3Data = d3DataToJSX(createAreaChart(nextProps.data));
        this.setState({d3DOM: d3Data.mappedData, state: d3Data.state})
      }

    render() {
    return (
      <div>
        <ChildComponent data={this.state} />
      </div>
    )
  }
} 

export default CodeEvolution;