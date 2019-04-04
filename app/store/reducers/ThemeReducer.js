import { light, dark } from "../../config/theme";
import { CHANGE_THEME } from '../types';

const INITIAL_STATE = {
    theme: light,
};

const THEMES = {
    light,
    dark
};

export default (state = INITIAL_STATE, {type, payload}) => {

    switch (type){
        case CHANGE_THEME:
            return { theme: THEMES[payload] || state.theme };
            break;
        default:
            return state;
    }
};