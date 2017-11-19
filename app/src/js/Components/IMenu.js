import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Interview from './Interview';
import Home from './Home';


export default class IMenu extends Component{
    constructor(props){
        super(props);
    }
    onMenuToggle(e){
        e.stopPropagation();
        e.preventDefault();
        e.persist();
        //debugger;
        const ele = e.target;
        ele.firstElementChild ? (ele.firstElementChild.classList.contains('hidden') ? (ele.firstElementChild.className = '') : (ele.firstElementChild.className = 'hidden')) : '';
    }
    render(){
        return(
            <Router>
                <div>
                    <div onClick={this.onMenuToggle.bind(this)} className='menu'>
                        <ul className='hidden'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='interview-q'>Interview Questions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/interview-q" component={Interview}/>
                    </div>
                </div>
            </Router>
        );
    }
}