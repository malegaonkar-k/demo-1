import React, { Component,} from 'react';

import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export class App extends Component {

    render() {
            console.log("store :",this.props)
        return (
            <div>
                <div className="display-1"> its bootstrap!!!</div>
                <div > its bootstrap!!!</div>
                <h1>{this.props.geod.title || 'Hello World!'}</h1>
                {this.props.geod.title ?
                    <button onClick={this.props.closeGeod}>
                        Exit Geod
                    </button> :
                    <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
                        Click Me!
                    </button>
                }
                <div className="container">
                    <div className="jumbotron bg-info">
                        <h1 className="display-3">Hello, world!</h1>
                    </div>
                </div>

            </div>
        );
    }

}

//https://www.reactpwa.com/docs/pages-routing/page-with-layout