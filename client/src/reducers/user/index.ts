import axios from 'axios';
import { ActionType } from '../types';
import { BASE_URL } from '../constants';

export const LOGIN = 'LOGIN';

export const loginAsync = async (email: string, password: string, dispatch: (action: ActionType) => void) => {
    try {
        const result = await axios.post(`${BASE_URL}/users/login`, { email, password }, { withCredentials: true});
        dispatch({
            type: LOGIN,
            nick: result.data.nick
        });
    } catch (e) {
        dispatch({
            type: LOGIN,
            nick: ''
        });
    }
}

export const joinAsync = async(value: { email: string, nick: string, name: string, password: string, passwordConfirm: string}, dispatch: (action: ActionType) => void) => {
    try {
        const result = await axios.post(`${BASE_URL}/users/signup`, value);
        dispatch({
            type: LOGIN,
            nick: result.data.result.nick,
        });
    } catch (e) {
        dispatch({
            type: LOGIN,
            nick: ''
        });
    }
}
