import { Router } from 'express';
import { login, signUp, update, deleteUser } from '../controllers/user';

const router = Router();

router.post('/signup', async (req, res) => {
    const { email, nick, name, password } = req.body;
    try {
        const result = await signUp({ email, nick, name, password });
        res.send({ result });
        req.session.user = {
            id: result.id,
            nick: result.nick,
        };
        req.session.save(() => {/* */});
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    try {
        const loggedInUser = await login(email, password);
        res.send({ success: true, nick: loggedInUser.nick });
        req.session.user = {
            id: loggedInUser.id,
            nick: loggedInUser.nick,
        };
        req.session.save(() => {/* */});
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
})

router.post('/:id/update', async(req, res)=> {
    const {email, nick, name} = req.body;
    const id = req.params.id 
    const result = await update(id, email, nick, name)
    res.send({ result })
})

router.post('/:id/delete', async(req, res)=> {
    const id = req.params.id;
    await deleteUser(id)
    res.send('ok')
})


export default router;