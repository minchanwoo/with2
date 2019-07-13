import Home from "../pages/Home";
import Login from "../pages/Login";
import Join from "../pages/Join";
import MyPage from "../pages/MyPage";
import Posts from "../pages/Posts";
import Post from "../pages/Post";

const routes: Array<{header_label?: string, path: string, component: (props?: any) => JSX.Element, exact?: boolean}> = [
    { header_label: 'Home', path: '/', component: Home, exact: true },
    { header_label: 'Login', path: '/login', component: Login },
    { header_label: 'Join', path: '/join', component: Join },
    { header_label: 'MyPage', path: '/mypage', component: MyPage },
    { header_label: 'Posts', path: '/posts', component: Posts, exact: true },
    { path: '/posts/:id', component: Post },
];

export default routes;