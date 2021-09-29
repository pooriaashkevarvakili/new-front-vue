/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/1-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of history vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { History } from "@/store/interface/history";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add history module state
     */
    history: <Array<History>>[],
  },
  mutations: {
    /**
     * vuex add history module mutations
     */
    stateHistory(state, history) {
      state.history = history;
    },
  },
  actions: {
    /**
     * vuex add history module actions
     */
    GetHistory({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("history").then((response: any) => {
        commit("stateHistory", response.data);
      });
    },
  },
};
