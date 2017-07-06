import {combineReducers} from 'redux'
import users from './users'
import selection from './selection'
import confirmation from './confirmation'
import albums from './albums'
import comments from './comments'

const rootReducer = combineReducers({
 users,
 selection,
 confirmation,
 comments,
 albums,
});

export default rootReducer;
