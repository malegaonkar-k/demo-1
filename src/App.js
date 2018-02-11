import React, { Component, } from 'react';

import CommentContainer from './comment/CommentContainer';
import AppContainer from './App/AppContainer';

// App.js
export class Container extends Component{

    render() {
            console.log("store :",this.props)
        return (
            <div>
                 <AppContainer />
                 <CommentContainer />
            </div>
             );
    }

}
export default Container;
