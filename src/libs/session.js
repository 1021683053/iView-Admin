import Cookie from 'js-cookie';
import config from '@/config/base';
let SESSION = config['SESSION'];

// 未存在登录信息
export const IS_LOGIN = ()=>{
    let session = Cookie.get(SESSION.NAME);
    return !session || session== '' ? false : true;
};

// 清空登录信息
export const DO_LOGOUT = ()=>{
    return Cookie.remove(SESSION.NAME);
};

// 默认暴露信息
export default{
    IS_LOGIN,
    DO_LOGOUT
};