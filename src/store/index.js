import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cartList: [],
    },
    mutations: {
        addCart(state, payLoad) {
            state.cartList.push(payLoad);
        },
    },
});

export default store;