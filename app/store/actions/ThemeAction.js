import { CHANGE_THEME } from '../types';

export const changeTheme = (type) => {
    return {
        type: CHANGE_THEME,
        payload: type
    };
};