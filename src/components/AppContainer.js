import { connect } from 'react-redux';
import App from '../App';
import { bindActionCreators } from 'redux';
import HelloAction from '../actions/HelloAction';

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