import '@/mock/gateway';

/**
 * 网关 API接口
 */
import axios from 'axios';
import qs from 'qs';
import errorHandle from '@/libs/error';
import { DO_LOGIN } from '@/libs/session';

// 登录
export const GET_LOGIN = (param)=>{
    return gateway('get', '/gateway/login', param).then((response)=>{
        if( response.success && response.token ){
            DO_LOGIN(response.token);
            return response;
        }else{
            throw { code: '301', message: '未登录成功，或服务器错误。' }
        }
    });
};


// 封装 API
function gateway(type, way, param){

    /**
     * 这里可对传参进行处理
     */
    return axios[type](way, param).then(dataHandle).catch(errorHandle)
};

// 数据处理 每一个service 返回结果可能不同，在这里进行对数据适配或者放行，在页面进行错误处理
function dataHandle(response){

    // 服务器地址不错在
    if( response.status != 200 ){
        throw {code: 400, message: '400: 服务器无返回 OR 接口不存在' };
    };
    response = response.data;

    /**
     * 这里可以对数据进行处理与容错
     */

    return response;
};
