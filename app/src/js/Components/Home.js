import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Ibox from './Ibox';
import IList from './IList';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            iData: '',
            iList: []
        }
    }
    /** Event
     * What? - Input on Change
     */
    handleInputChange(e){
        e.preventDefault();
        this.setState({
            iData:e.target.value
        });
    }
    /** Event
     * What? - On Form Submit
     */
    handleFormSubmit(e){
        e.preventDefault();
        const data = Object.assign({}, {item:this.state.iData, toggled:false});
        this.setState( (prevState, props) => ({
            iList: [...prevState.iList, data]
        }), () => {
            //console.log("You Entered ", this.state.iList);
        });
    }
    /** Event
     * What? - On List Item Click - Toggle StrikeThrough
     */
    handleItemClick(e){
        e.preventDefault();
        e.persist();
        
        const eleKey = parseInt(e.target.dataset.key, 10);
        const iList = this.state.iList;
        const item = iList[eleKey];
        item['toggled'] = ! item['toggled'];
        this.setState((prevState, props) => {
            iList: [
                iList.slice(0, eleKey),
                item,
                iList.slice(eleKey)
            ]
        }, () => {
            if(e.target.classList.contains('strike-through')){
                e.target.className = '';
            }else{
                e.target.className = 'strike-through';
            }
        });
    }
    render(){
        return(
            <div>
                <Ibox handleIChange={this.handleInputChange.bind(this)} handleFSubmit={this.handleFormSubmit.bind(this)}></Ibox>
                <IList listItems={this.state.iList} handleImClick={this.handleItemClick.bind(this)}></IList>
            </div>
        );
    }
}


