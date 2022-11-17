import { combineReducers } from 'redux';
import user from './user'
import location from './location'
import temperature from './temperature'

const rootReducer = combineReducers({
 user, location, temperature
});


export default rootReducer;