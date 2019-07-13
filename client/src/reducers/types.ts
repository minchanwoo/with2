export interface Post {
    id: number
    title: string;
    text: string;
    user: {
        id: number;
        name: string;
    },
    error?: string;
}

export interface ActionType {
    type: string;
    posts?: Post[];
    post?: Post;
    nick?: string;
}

export interface StateType {
    posts: Post[]
    post: Post,
    nick: string,
}