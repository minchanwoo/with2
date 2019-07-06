export interface Post {
    id: number
    title: string;
    text: string;
    user: {
        id: number;
        name: string;
    }
}

export interface ActionType {
    type: string;
    posts?: Post[];
}

export interface StateType {
    posts: Post[]
}