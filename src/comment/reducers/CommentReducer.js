const commentReducer = (state={}, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            console.log('CHANGE_TEXT from commentReducer state',state);
            console.log('CHANGE_TEXT from CommentReducer',action);
            return action.commentReducer;
        default:
            console.log('Default value from CommentReducer');
            return state;
    }
}

export default commentReducer;
