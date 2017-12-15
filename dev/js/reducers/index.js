import {combineReducers} from 'redux';
import UserReducer from './reducer_user'; //call and create javascript big object  here of small data
import ActiveUserReducer from './reducer_active_user';

const allReducer = combineReducers({
	users:UserReducer,
	activeUser:ActiveUserReducer
})

export default allReducer;