import React, {Component,} from 'react';
import {FormattedMessage} from 'react-intl';

class NavMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-inverse bg-inverse bg-dark navbar-dark fixed-top  " data-spy="affix"
                 data-offset-top="60" data-offset-bottom="200">

                <a className="navbar-brand" href="#">WebTales | the blogger  </a>


                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FormattedMessage id='WELCOME'/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 2</a>
                    </li>


                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}


class MenuWidget extends Component {
    render() {
        return (
            <NavMenu></NavMenu>
        );
    }
}

export default MenuWidget;