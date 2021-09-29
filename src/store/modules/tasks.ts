import {getLastTasks} from "@/services/tasks";
import {Module} from "vuex";

export default <Module<any, any>>{
    namespaced: true,
    state: {
        last: []
    },
    mutations: {
        INJECT_LAST_TASKS(state, data) {
            state.last = data;
        }
    },
    actions: {
        async fetchLastTasks({commit}, payload: any) {
            commit('INJECT_LAST_TASKS', await getLastTasks());
        }
    }
}
