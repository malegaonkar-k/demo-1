import React, { Component } from 'react';


export default class Comment extends Component {

    render() {
        console.log("store from comments     :",this.props)
        return (
            <div className="Comment-container">
                <div>
                    <i><h5>some :  {this.props.thing.title || 'Hello World!'} </h5></i>
                    <button onClick={() => this.props.commentAction({title:'changed text'})}>Change Text</button>
                </div>
            </div>
        );
    }
}


