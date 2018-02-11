import { connect } from 'react-redux';
import Comment from './components/comment';
import commentAction from "./actions/CommentAction";


const mapStateToProps =  (state, ownProps)  => ({
    thing: state.commentReducer,
});

const mapDispatchToProps = {
    commentAction,
}

const CommentContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Comment);

export default CommentContainer;

