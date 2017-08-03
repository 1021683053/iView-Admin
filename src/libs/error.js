import Util from '../libs/util';

export default function(err){
    let vm = window.vm;

    if( !err ){
        return;
    };
    
    // 500 报错提示 
    if( err.code == 500){
        let message =  err.message.length >=200 ? err.message.substr(0, 200)+'...' : err.message;
        vm.$Notice.error({
            title: '服务器错误',
            desc: message
        });
        return;
    };

    // 303 未登录
    if( err.code == 303 ){
        let fullPath = vm.$route.fullPath;
        Util.login(vm.$router, fullPath);
        return;
    };
    
    // 其他报错信息
    if( err.message ){
        vm.$Message.error(err.message);
    };
}