import { combineReducers} from 'redux';

import commentReducer  from './comment/reducers/CommentReducer';
import {geod} from  './App/reducers/reducers'

export const reducers = combineReducers({
    geod,
    commentReducer,
});