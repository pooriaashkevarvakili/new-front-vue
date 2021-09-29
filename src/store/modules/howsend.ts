/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of howsend vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { howSend } from "@/store/interface/howsend";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add howsend module state
     */
    howsend: <Array<howSend>>[],
  },
  mutations: {
    /**
     * vuex add howsend module mutations
     */
    stateHowsend(state, howsend) {
      state.howsend = howsend;
    },
  },
  actions: {
    /**
     * vuex add howsend module actions
     */
    GetHowSend({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("howsend").then((response: any) => {
        commit("stateHowsend", response.data);
      });
    },
  },
};
