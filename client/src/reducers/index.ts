import axios from 'axios';
import { StateType, ActionType } from './types';

const BASE_URL = 'http://localhost:4000'

const GET_POSTS = 'GET_POSTS';

export const getPostsAsync = async (dispatch: (action: ActionType) => void) => {
    const result = await axios.get(`${BASE_URL}/posts`)
    dispatch({
        type: GET_POSTS,
        posts: result.data.posts,
    })
}

const initial_state = {
    posts: [],
};

const reducers = (state: StateType = initial_state, action: any) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts,
            }
        default:
            return state;
    }
}

export default reducers;