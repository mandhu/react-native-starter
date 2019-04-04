import {
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SET_TOKEN,
    LOGOUT,
    SET_USER,
    LOGIN_USER_SUCCESS, 
} from './../types';

export const setToken = (data) => {
    return {
        type: SET_TOKEN,
        payload: data
    }
};

export const logout = (navigation) => {
    return {
        type: LOGOUT,
    };

};

export const setUser = (data) => {
    return {
        type: SET_USER,
        payload: data
    }
};

