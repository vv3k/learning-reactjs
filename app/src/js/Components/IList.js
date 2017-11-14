import React, {Component} from 'react';

export default class Ibox extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {listItems} = this.props;

        return(
            <div>
                {
                listItems.length > 0 ? (<ul>
                {
                    listItems.map((item, key) => {
                        return <li key={key} data-key={key} onClick={this.props.handleImClick}>{item.item}</li>
                    })
                }
                </ul>) : <div>No Data Available ! </div>
                }
            </div>
        );
    }
}