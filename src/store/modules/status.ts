/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of status vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Status } from "@/store/interface/status";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add status  module state
     */
    status: <Array<Status>>[],
  },
  mutations: {
    /**
     * vuex add status  module mutations
     */
    stateStatus(state, status) {
      state.status = status;
    },
  },
  actions: {
    /**
     * vuex add status  module actions
     */
    GetStatus({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("status").then((response: any) => {
        commit("stateStatus", response.data);
      });
    },
  },
};
