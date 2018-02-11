import React, {Component,} from 'react';
import {connect} from 'react-redux';

import {activateGeod, closeGeod,} from './actions/action';
import {App} from './components/App';


// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
    geod: state.geod,
});

const mapDispatchToProps = {
    activateGeod,
    closeGeod,
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;