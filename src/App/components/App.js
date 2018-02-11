import React, { Component,} from 'react';

export class App extends Component {

    render() {
            console.log("store :",this.props)
        return (
            <div>
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
        );
    }

}

