/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:56
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of statusResume vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { StatusResume } from "@/store/interface/statusResume";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add statusResume  module state
     */
    statusResume: <Array<StatusResume>>[],
  },
  mutations: {
    /**
     * vuex add statusResume  module mutations
     */
    stateStatusResume(state, statusResume) {
      state.statusResume = statusResume;
    },
  },
  actions: {
    /**
     * vuex add statusResume  module actions
     */
    GetStatusResume({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("statusResume").then((response: any) => {
        commit("stateStatusResume", response.data);
      });
    },
  },
};
