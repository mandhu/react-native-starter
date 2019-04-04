import Keys from "../config/App";
import store from "../store";

_header = () => {
    const token = store.getState().auth.token;

    if (token) {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

_makeParams = params =>  Object.entries(params).map(pair => pair.map(encodeURIComponent).join('=')).join('&');


export const list = async (url, params) => {
    
    const qs = _makeParams(params);

    return await fetch(`${Keys.URL}${url}?${qs}`, {
            method: 'GET',
            headers: _header(),
        })
        .then((response) => response.json());
};


export const get = async (url, id) => {

    return await fetch(`${Keys.URL}${url}${id}`, {
            method: 'GET',
            headers: _header(),
        })
        .then((response) => response.json());
};


export const save = async (url, data) => {
    let uri = `${Keys.URL}${url}`;
    let method = 'POST';

    if (data.id) {
        uri += `/${data.id}`;
        method = 'PUT';
    }

    return await fetch(uri, {
            method,
            headers: _header(),
            body: JSON.stringify(data)
        })
        .then((response) => response.json());
};


export const post = async (url, data) => {
    
    return await fetch(`${Keys.URL}${url}`, {
            method: 'POST',
            headers: _header(),
            body: JSON.stringify(data)
        })
        .then((response) => response.json());
};


export const put = async (url, data) => {

    return await fetch(`${Keys.URL}${url}${data.id}`, {
            method: 'PUT',
            headers: _header(),
            body: JSON.stringify(data)
        })
        .then((response) => response.json());
};


export const delete = async (url, id) => { // @sheeraz what the hack 'delete' keyword not allowed here

    return await fetch(`${Keys.URL}${url}${id}`, {
            method: 'DELETE',
            headers: _header()
        })
        .then((response) => response.json());
};
