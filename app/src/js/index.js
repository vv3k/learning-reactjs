import React from 'react';
import ReactDOM from 'react-dom';
import IMenu from './Components/IMenu';
import Ibox from './Components/Ibox';
import IList from './Components/IList';
import Interview from './Components/Interview';
import Home from './Components/Home';
import styles from '../css/style.css';

export default class Appwrapper extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <IMenu></IMenu>
            </div>
        )
    }
}

ReactDOM.render(
    <Appwrapper></Appwrapper>,
    document.getElementById('root')
);