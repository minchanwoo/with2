import axios from 'axios';
import { ActionType } from '../types';
import { BASE_URL, DEFAULT_POST } from '../constants';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const EDIT_POST = 'EDIT_POST';

export const getPostsAsync = async (dispatch: (action: ActionType) => void) => {
    const result = await axios.get(`${BASE_URL}/posts`)
    dispatch({
        type: GET_POSTS,
        posts: result.data.posts,
    })
}

export const getPostAsync = async (id: number, dispatch: (action: ActionType) => void) => {
    try {
        const result = await axios.get(`${BASE_URL}/posts/${id}`, { withCredentials: true });
        const post = {
            ...result.data.post,
            my: result.data.my,
        }
        dispatch({
            type: GET_POST,
            post,
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

export const editPostAsync = async(id: number, body: { title: string, text: string}, dispatch: (action: ActionType) => void) => {
    try {
        await axios.post(`${BASE_URL}/posts/${id}/edit`, body, { withCredentials: true });
        await getPostAsync(id, dispatch);
    } catch (e) {

    }
}

export const deletePostAsync = async(id: number, dispatch: (action: ActionType) => void) => {
    try {
        await axios.delete(`${BASE_URL}/posts/${id}`, {withCredentials: true});
        await getPostsAsync(dispatch);
    } catch (e) {
        console.log('ERROEE!', JSON.stringify(e));
    }
}

