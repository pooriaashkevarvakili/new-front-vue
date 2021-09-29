import {authServiceLogin, setUserData, setAuthToken, getUserData, getToken} from "@/services/login";
import {Module} from "vuex";

export default <Module<any, any>>{
    namespaced: true,
    state: {
        token: undefined,
        user: undefined
    },
    mutations: {
        INJECT_LOGIN(state, data) {
            state = {...state, ...data};
        },
        INIT(state, data) {
            state.user = data.user;
            state.token = data.token;
        },
    },
    actions: {
        async init({commit}) {
            commit('INIT', {user: getUserData(), token: getToken()})
        },
        async login({commit}, payload: any) {
            const data = await authServiceLogin(payload);
            commit('INJECT_LOGIN', data);
            setUserData(data.user)
            setAuthToken(data.token)
        }
    }
}
