import React, {Component,} from 'react';
import RowWidget from "./Row";
import FooterWidget from "./Footer";

export class BContainer extends Component {
    render() {
        return (

            <div className="container container-fluid"  >
                <RowWidget/>
                <FooterWidget/>
            </div>
        )
    }
}

class BContainerWidget extends Component {
    render() {
        return (
            <BContainer></BContainer>
        );
    }
}

export default BContainerWidget;