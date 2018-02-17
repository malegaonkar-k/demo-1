import React, { Component,} from 'react';

import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export class App extends Component {

    render() {
            console.log("store :",this.props)
        return (
            <div className="container">
                <div className="row">
                <h1>{this.props.geod.title || 'Hello World!'}</h1>
                {this.props.geod.title ?
                    <button onClick={this.props.closeGeod}>
                        Exit Geod
                    </button> :
                    <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
                        Click Me!
                    </button>
                }

            </div>
            </div>
        );
    }

}

//https://www.reactpwa.com/docs/pages-routing/page-with-layout