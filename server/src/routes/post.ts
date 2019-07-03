import { Router } from 'express';
import { checkLoggedIn } from '../middlewares';
import { createPost, getPosts, getPost, editPost, deletePost } from '../controllers/post';

const router = Router();

router.post('/create', checkLoggedIn, async (req, res)=> {
    const { title, text } = req.body;
    const userId = req.session.user.id;
    const created = await createPost({ title, text, userId });
    res.send({ postId: created.id });
});

router.get('/', async(req, res) => {
    const posts = await getPosts();
    res.send({ posts })
})

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const post = await getPost(id);
        res.send({ post })
    } catch (e)  {
        res.status(500).send({ error: e.message });
    }
});

router.post('/:id/edit', checkLoggedIn, async(req, res)=> {
    const id = req.params.id;
    const { title, text } = req.body;
    const userId = req.session.user.id;

    try {
        await editPost({ id, title, text, userId });
        res.send({ success: true });
    } catch (e)  {
        res.status(500).send({ error: e.message });
    }
})

router.delete('/:id', checkLoggedIn, async(req, res)=> {
    const id = req.params.id;
    const userId = req.session.user.id;

    try {
        await deletePost({ id, userId });
        res.send({ success: true });
    } catch (e)  {
        res.status(500).send({ error: e.message });
    }
})

export default router;