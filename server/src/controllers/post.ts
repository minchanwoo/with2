import Post from '../models/post';

export async function createPost({ title, text, userId }: { title: string, text: string, userId: number }) {
    const result = await Post.create({
        title,
        text,
        userId,
    });
    return result;
}

export const getPosts = async () => {
    return await Post.findAll({
        order: [
            ['id', 'DESC']
        ]
    })
}

export const getPost = async(id) => {
    const post =  await Post.findOne({ where: { id } });
    if (!post) {
        throw new Error(`post ${id} not exists`);
    }
    return post;
}

export const editPost = async({ title, text, id, userId }) => {
    const post = await Post.findOne({ where: { id }});
    if (post.userId !== userId) {
        throw new Error('not authorized');
    }

    return await Post.update( { title, text }, { where: { id }});
}

export const deletePost = async({ id, userId }) => {
    const deleted = await Post.destroy({ where: { id, userId }});
    if (deleted === 0) {
        throw new Error('not authorized');
    }
    return deleted;
}