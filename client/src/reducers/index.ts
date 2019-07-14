import { DEFAULT_POST } from './constants';
import { GET_POST, GET_POSTS } from './post';
import { StateType } from './types';
import { LOGIN } from './user';

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