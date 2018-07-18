import Vue from 'vue'
import Router from 'vue-router'


import WellChosenRoutes from './wellchosen'
import BookCaseRoutes from './bookcase'
import BookStorageRoutes from './bookstorage'
import MineRoutes from './mine'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/wellchosen',
            component: () =>
                import ('@/pages/wellchosen/default.vue'),
            children: WellChosenRoutes
        }, {
            path: '/bookcase',
            component: () =>
                import ('@/pages/bookcase/default.vue'),
            children: BookCaseRoutes
        }, {
            path: '/bookstorage',
            component: () =>
                import ('@/pages/bookstorage/default.vue'),
            children: BookStorageRoutes
        },
        {
            path: '/mine',
            component: () =>
                import ('@/pages/mine/default.vue'),
            children: MineRoutes
        }
    ]
})