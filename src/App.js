import React, {Component,} from 'react';
//import Header from './share/components/Header';
import BContainerWidget from "./share/components/BContainer";
import MenuWidget from "./share/components/NavMenu";

//import Footer from './share/components/Footer';


export class NavbarInstance extends Component {


    render() {
console.log("props : ",this.props);

        return (

<div>
   <MenuWidget />
   <BContainerWidget />
</div>


    );
    }
    }

    class Container extends Component {
        render() {
        return (

        <NavbarInstance/>
        );
    }
    }

    export default Container;
