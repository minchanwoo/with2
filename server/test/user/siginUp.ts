import { expect } from 'chai';
import { signUp } from '../../src/controllers/user';
import User from '../../src/models/user';

describe('signUp', () => {
    beforeEach(async() => {
        await User.destroy({ truncate: true });
    });

    it('회원가입을 한다', async() => {
        await signUp({
            name: 'mcw',
            nick: 'developer',
            email: 'mcw@email.com',
            password: '1234',
        });
        const users = await User.findAll();
        expect(users.length).to.eql(1);
        expect(users[0].name).to.eql('mcw');
        expect(users[0].nick).to.eql('developer');
        expect(users[0].email).to.eql('mcw@email.com');
    });

    it('기존에 가입된 이메일로 회원가입을 시도하는 경우 에러가 생긴다', async() => {
        await signUp({
            name: 'mcw',
            nick: 'developer',
            email: 'mcw@email.com',
            password: '1234',
        });
        const users = await User.findAll();
        expect(users.length).to.eql(1);
        try {
            await signUp({
                name: 'mcw2',
                nick: 'developer2',
                email: 'mcw@email.com',
                password: '1234',
            });
        } catch (e) {
            expect(e.errors[0].message).to.eql('기존에 가입한 계정입니다');
        }
    });

    it('이메일 없이 회원가입을 시도하는 경우 에러가 생긴다', async() => {
        try {
            await signUp({
                name: 'mcw',
                nick: 'developer',
                email: null,
                password: '1234',
            });
        } catch (e) {
            expect(e.errors[0].message).to.eql('user.email cannot be null');
        }
    });
    
    it('닉네임 없이 회원가입을 시도하는 경우 에러가 생긴다', async() => {
        try {
            await signUp({
                name: 'mcw',
                nick: null,
                email: 'email@email.com',
                password: '1234',
            });
        } catch (e) {
            expect(e.errors[0].message).to.eql('user.nick cannot be null');
        }
    });

    it('이름 없이 회원가입을 시도하는 경우 에러가 생긴다', async() => {
        try {
            await signUp({
                name: null,
                nick: 'developer',
                email: 'email@email.com',
                password: '1234',
            });
        } catch (e) {
            expect(e.errors[0].message).to.eql('user.name cannot be null');
        }
    });

    it('비밀번호 없이 회원가입을 시도하는 경우 에러가 생긴다', async() => {
        try {
            await signUp({
                name: 'mcw',
                nick: 'developer',
                email: 'email@email.com',
                password: null,
            });
        } catch (e) {
            expect(e.message).to.eql('data and salt arguments required');
        }
    });
});