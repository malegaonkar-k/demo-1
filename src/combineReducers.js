import { combineReducers} from 'redux';

import commentReducer  from './comment/reducers/CommentReducer';
import {geod} from  './App/reducers/reducers'
import langReducer from  './share/reducers/lang-reducer'

export const reducers = combineReducers({
    geod,
    commentReducer,
    langReducer
});