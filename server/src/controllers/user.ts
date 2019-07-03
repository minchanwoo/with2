import bcrypt from 'bcrypt';
import User from '../models/user';

export const signUp = async ({ name, nick, email, password }) => {
    const hash = await bcrypt.hash(password, 12);
    const result = await User.create({
        name,
        nick,
        email,
        password: hash,            
    });
    return result;
}

export const login = async (email: string, password: string) => {
    const UserByEmail = await User.findOne({where:  { email }});
    if (!UserByEmail) {
        throw new Error('login failed');
    }
    
    const compare = bcrypt.compareSync(password, UserByEmail.password);
    if (!compare) {
        throw new Error('login failed');
    }
    return UserByEmail;
}

export const update = async(id, email, nick, name) => {
    return await User.update({
        email,
        nick,
        name,
    }, { where: { id }})
}

export const deleteUser = async(id) => {
    return await User.destroy({where: {id: id}})

}