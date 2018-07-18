/**
 * 书库操作业务类
 * filename:bookstorage.js
 * created by charlesshang
 */

import HttpUtil from '@/utils/httpUtil'

export default {
    /**
     * 精选列表
     */
    wellchosen($vm) {
        return new Promise(function(resolve, reject) {
            if ($vm.pager.loadFinished || $vm.pager.isloading)
                return;
            $vm.pager.isloading = true;
            HttpUtil.requestPager('api/BookStorage/MoreRecommend', {
                mids: '148',
                pageSize: $vm.pager.pageSize,
                pageIndex: $vm.pager.pageIndex
            }).then(
                response => {
                    $vm.pager.isloading = false;
                    $vm.pager.records += response.data.length;
                    $vm.pager.pageIndex++;
                    if ($vm.pager.records >= response.Total)
                        $vm.pager.loadFinished = true;
                    resolve(response.data);
                });
        });
    }

}