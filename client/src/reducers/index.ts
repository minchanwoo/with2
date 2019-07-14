import axios from 'axios';
import { StateType, ActionType } from './types';

const BASE_URL = 'http://localhost:4000'

const GET_POSTS = 'GET_POSTS';
const GET_POST = 'GET_POST';
const LOGIN = 'LOGIN';

export const getPostsAsync = async (dispatch: (action: ActionType) => void) => {
    const result = await axios.get(`${BASE_URL}/posts`)
    dispatch({
        type: GET_POSTS,
        posts: result.data.posts,
    })
}

const DEFAULT_POST = {
    id: 0,
    title: '',
    text: '',
    user: {
        id: 0,
        name: '',
    },
};

export const getPostAsync = async (id: number, dispatch: (action: ActionType) => void) => {
    try {
        const result = await axios.get(`${BASE_URL}/posts/${id}`);
        dispatch({
            type: GET_POST,
            post: result.data.post,
        });
    } catch (e) {
        dispatch({
            type: GET_POST,
            post: {
                ...DEFAULT_POST,
                error: '존재하지 않는 게시글입니다.',
            },
        });
    }
}

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

const initial_state = {
    posts: [],
    post: DEFAULT_POST,
    nick: '',
};

const reducers = (state: StateType = initial_state, action: any) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts,
            }
        case GET_POST:
            return {
                ...state,
                post: action.post,
            }
        case LOGIN:
            return {
                ...state,
                nick: action.nick,
            };
        default:
            return state;
    }
}

export default reducers;