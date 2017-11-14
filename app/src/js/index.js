import React from 'react';
import ReactDOM from 'react-dom';
import Ibox from './Components/Ibox';
import IList from './Components/IList';
import styles from '../css/style.css';

class Appwrapper extends React.Component{
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
        }, () => {
            console.log('I have got Input and set State too', this.state.iData);
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
        //console.log(e.target.dataset.strike);
        // if(e.target.dataset.strike === 'off'){
        //     e.target.dataset.strike = 'on';
        //     e.target.className = 'strike-through';
        // }else{
        //     e.target.dataset.strike = 'off';
        //     e.target.className = '';
        // }
        const eleKey = parseInt(e.target.dataset.key, 10);
        const iList = this.state.iList;
        iList.map( (item, key) => {
            debugger;
            if(key === eleKey){
                const data = Object.assign({}, item, {toggled: !item.toggled});
                this.setState((prevState, props) => {
                iList: [...prevState.iList, data]
                }, () => {
                    console.log(this.state);
                    //e.target.className = (e.target.className == '' ? 'strike-through' : '');
                });
            }
        });
    }
    render(){
        return(
            <div>
                <Ibox handleIChange={this.handleInputChange.bind(this)} handleFSubmit={this.handleFormSubmit.bind(this)}></Ibox>
                <IList listItems={this.state.iList} handleImClick={this.handleItemClick.bind(this)}></IList>
            </div>
        )
    }
}

ReactDOM.render(
    <Appwrapper></Appwrapper>,
    document.getElementById('root')
);