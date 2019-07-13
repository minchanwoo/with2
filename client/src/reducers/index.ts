import axios from 'axios';
import { StateType, ActionType } from './types';

const BASE_URL = 'http://localhost:4000'

const GET_POSTS = 'GET_POSTS';
const GET_POST = 'GET_POST';

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

const initial_state = {
    posts: [],
    post: DEFAULT_POST,
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
        default:
            return state;
    }
}

export default reducers;