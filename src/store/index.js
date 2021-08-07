import { createStore } from 'vuex'

export default createStore({
    state: {
        menuList: [
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/Gallery' },
            { name: 'WorkShop', path: '/WorkShop' },
            { name: 'News', path: '/News' },
            { name: 'About', path: '/About' },
            { name: 'Contact', path: '/Contact' },
        ],
    },
    mutations: {},
    actions: {},
    getters: {
        showMenuList(state) {
            return state.menuList
        },
    },
    modules: {},
})
