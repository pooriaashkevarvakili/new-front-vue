/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of useRandom vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { User } from "@/store/interface/userModal";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add user  module state
     */
    user: <Array<User>>[],
  },
  mutations: {
    /**
     * vuex add user  module mutation
     */
    stateUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    /**
     * vuex add user  module actions
     */
    GetUser({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("user").then((response: any) => {
        commit("stateUser", response.data);
      });
    },
  },
};
