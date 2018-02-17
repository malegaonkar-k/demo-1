import React, {Component,} from 'react';
import CommentFormWidget from "./CommentForm";
import {SidebarWidgetsColumn} from "./SidebarWidgetsColumn";

export class Row extends Component {
    render() {
        const divStyle = {
            "margin-top":"100pt",
        };
        return (



            <div className="row" style={divStyle}>
            <CommentFormWidget/>
            <SidebarWidgetsColumn/>
            </div>
        )
    }
}

class RowWidget extends Component {
    render() {
        return (
            <Row></Row>
        );
    }
}

export default RowWidget

