import { combineReducers } from 'redux';
import page from './page';
import user from './user';
import count from './counter';

export default combineReducers({
    page,
    user,
    count
})