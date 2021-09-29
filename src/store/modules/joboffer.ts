/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:55
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of joboffer vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { JobOffers } from "@/store/interface/joboffers";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add joboffer  module state
     */
    joboffer: <Array<JobOffers>>[],
  },
  mutations: {
    /**
     * vuex add joboffer  module mutations
     */
    stateJoboffer(state, joboffer) {
      state.joboffer = joboffer;
    },
  },
  actions: {
    /**
     * vuex add joboffer  module actions
     */
    GetJobOffers({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("joboffer").then((response: any) => {
        commit("stateJoboffer", response.data);
      });
    },
  },
};
