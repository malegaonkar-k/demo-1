import React, {Component,} from 'react';

export class Footer extends Component {
    render() {
        return (

            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
                </div>
            </footer>

        )
    }
}

export default  class FooterWidget extends Component {
    render() {
        return (
            <Footer></Footer>
        );
    }
}