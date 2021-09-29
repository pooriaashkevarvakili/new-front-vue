import {getTodayBirthday} from "@/services/profile";

import {Module} from "vuex";
import {User} from "@/store/interface/user";

export default <Module<any, any>>{
    namespaced: true,
    state: {
        todayBirthdayList: <Array<User>>[]
    },
    mutations: {
        INJECT_TODAY_BIRTHDAY(state, data) {
            state.todayBirthdayList = data;
        }
    },
    actions: {
        async fetchTodayBirthday({commit}, payload: any) {
            commit('INJECT_TODAY_BIRTHDAY', await getTodayBirthday());
        }
    }
}
