import Vue from 'vue';
import Vuex, {createNamespacedHelpers} from 'vuex';
import users from './users';
import news from './news';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        users,
        news
    }
});

export const usersHelpers = createNamespacedHelpers('users');
export const newsHelpers = createNamespacedHelpers('news');


