import {combineReducers} from 'redux'
import users from './users'
import selection from './selection'
import confirmation from './confirmation'

const rootReducer = combineReducers({
 users,
 selection,
 confirmation,
});

export default rootReducer;
