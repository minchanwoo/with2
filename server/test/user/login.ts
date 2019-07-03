import { expect } from 'chai';
import User from '../../src/models/user';
import { signUp, login } from '../../src/controllers/user';

describe('login', () => {
    beforeEach(async() => {
        await User.destroy({ truncate: true });
    });

    it('정상적으로 로그인', async() => {
        await signUp({
            name: 'mcw',
            nick: 'developer',
            email: 'mcw@email.com',
            password: '1234',
        });
        const result = await login('mcw@email.com', '1234');
        expect(result).to.eql(true);
    });

    it('이메일에 해당하는 계정이 없는 경우', async() => {
        try {
            await login('mcw@email.com', '1234');
        } catch (e) {
            expect(e.message).to.eql('login failed');
        }
    });

    it('비밀번호를 잘못 입력한 경우', async() => {
        await signUp({
            name: 'mcw',
            nick: 'developer',
            email: 'mcw@email.com',
            password: '1234',
        });
        try {
            await login('mcw@email.com', '12345');
        } catch (e) {
            expect(e.message).to.eql('login failed');
        }
    });
});