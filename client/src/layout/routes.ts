import Home from "../pages/Home";
import Login from "../pages/Login";
import Join from "../pages/Join";
import MyPage from "../pages/MyPage";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import PostEdit from "../pages/PostEdit";

const routes: Array<{header_label?: string, path: string, component: (props?: any) => JSX.Element, exact?: boolean, menu_type: 'LOGGED_IN_MENU' | 'LOGGED_OUT_MENU' | 'MENU' | 'NOT_MENU'}> = [
    { header_label: 'Home', path: '/', component: Home, exact: true,  menu_type: 'MENU'},
    { header_label: 'Login', path: '/login', component: Login, menu_type: 'LOGGED_OUT_MENU' },
    { header_label: 'Join', path: '/join', component: Join, menu_type: 'LOGGED_OUT_MENU' },
    { header_label: 'MyPage', path: '/mypage', component: MyPage, menu_type: 'LOGGED_IN_MENU' },
    { header_label: 'Posts', path: '/posts', component: Posts, exact: true, menu_type: 'MENU' },
    { path: '/posts/:id', component: Post, menu_type: 'NOT_MENU', exact: true },
    { path: '/posts/:id/edit', component: PostEdit, menu_type: 'NOT_MENU' },
];

export default routes;