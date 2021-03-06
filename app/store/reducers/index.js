import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ThemeReducer from './ThemeReducer';

export default combineReducers({
    theme: ThemeReducer,
    auth: AuthReducer,
});
