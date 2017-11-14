import React, {Component} from 'react';

export default class Ibox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <form onSubmit={this.props.handleFSubmit}>
                <input type='text' onChange={this.props.handleIChange}/>
                <button type='submit' onClick={this.props.handleFSubmit}>Add</button>
            </form>
        );
    }
}