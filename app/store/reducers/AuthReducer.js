import AsyncStorage from "@react-native-community/async-storage";

import {
    SET_USER,
    SET_TOKEN,
    SET_PROFILE,
    LOGOUT
} from '../types';

const INITIAL_STATE = {
    user: null,
    token: null,
};


export default (state = INITIAL_STATE, {type, payload}) => {

    switch (type){
        case SET_USER:
            return {...state, user: payload};

        case SET_TOKEN:
            return {...state, token: payload };

        case LOGOUT:
            AsyncStorage.setItem('@auth:key', 'null');
            return { ...state, token: false , user: null };

        default:
            return state;
    }
};