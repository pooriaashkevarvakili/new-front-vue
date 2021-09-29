/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/2-11:01
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of resume vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Resume } from "@/store/interface/resume";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add resume  module state
     */
    resume: <Array<Resume>>[],
  },
  mutations: {
    /**
     * vuex add resume  module mutations
     */
    stateResume(state, resume) {
      state.resume = resume;
    },
  },
  actions: {
    /**
     * vuex add resume  module actions
     */
    Getresume({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("resume").then((response: any) => {
        commit("stateResume", response.data);
      });
    },
  },
};
