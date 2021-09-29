import {getLastNotify} from "@/services/notify";

import {Module} from "vuex";

export default <Module<any, any>>{
    namespaced: true,
    state: {
        last: []
    },
    mutations: {
        INJECT_LAST_NOTIFY(state, data) {
            state.last = data;
        }
    },
    actions: {
        async fetchLastNotify({commit}, payload: any) {
            commit('INJECT_LAST_NOTIFY', await getLastNotify());
        }
    }
}
