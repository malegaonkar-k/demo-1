import React, {Component,} from 'react';
import {Button, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

export class SideBarSearch extends Component {
    render() {
        return (

            <div className="card my-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                        <span className="input-group-btn">
                   <button className="btn btn-secondary" type="button">Go!</button>
                 </span>
                    </div>
                </div>
            </div>

        )
    }
}

class SideBarSearchWidget extends Component {
    render() {
        return (
            <SideBarSearch></SideBarSearch>
        );
    }
}

export default SideBarSearchWidget;