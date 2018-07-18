/**
 * http请求公共操作类
 * filename:httpUtil.js
 * created by charlesshang
 */
import Vue from 'vue'
import { Toast, Indicator } from 'mint-ui';
import UrlConfig from '../utils/urlConfig'
import Md5 from '../utils/md5'

const REQUEST_BASE_URL = UrlConfig.REQUEST_BASE_URL

export default {
    makeSign(postdata){
        //属性排序
        let properties = [];
        for (var p in postdata) {
            properties.push(p);
        }
        var sortProArr = properties.sort((a, b) => a < b ? 1 : -1);
        //拼接
        let str = '';
        for (var i = 0, len = sortProArr.length; i < len; i++) {
            str = str + (sortProArr[i] + '=' + postdata[sortProArr[i]]) + (i < len - 1 ? '&' : '');
        }
        str += '&key=PKwUJyO1GGraH7mDhClqWHExSPgGgcq';
        var signStr = Md5.md5(Md5.md5(str));
        return signStr;
    },
    post(url, postdata,beforeRequest,requested) {
        var $self = this;
        if(beforeRequest) beforeRequest();
        return new Promise(function(resolve, reject) {
            var signStr = $self.makeSign(postdata);
            postdata['sign'] = signStr;
                Vue.http.post(REQUEST_BASE_URL + url, postdata).then(response => {
                    if(requested) requested();
                    if (response.status === 200) {
                        var $response = response.body;
                        if ($response.Success) {
                            resolve($response);
                        } else {
                            Toast($response.Message);
                        }
                    } else {
                        Toast('请求失败');
                    }
                }, error => {
                    if(requested) requested();
                    Toast('网络错误');
                    reject(error);
                })
        });
    },
    request(url, postdata){
        return this.post(url,postdata,()=>{
            Indicator.open();
        },
        ()=>{
            Indicator.close();
        });
    },
    requestPager(url,postdata){
        return this.post(url,postdata,()=>{
            ///Indicator.open();
        },
        ()=>{
            //Indicator.close();
        });
    }
}