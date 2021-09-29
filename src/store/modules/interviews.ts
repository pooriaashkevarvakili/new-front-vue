/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of typeinterview vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";

import { Interviews } from "@/store/interface/interviews";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add interviews  module state
     */
    interviews: <Array<Interviews>>[],
  },
  mutations: {
    /**
     * vuex add interviews  module mutations
     */
    stateInterviews(state, interviews) {
      state.interviews = interviews;
    },
  },
  actions: {
    /**
     * vuex add interviews  module actions
     */
    GetInterviews({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("interviews").then((response: any) => {
        commit("stateInterviews", response.data);
      });
    },
  },
};
