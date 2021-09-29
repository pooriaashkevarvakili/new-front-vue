/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/1-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of job vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Job } from "@/store/interface/job";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add job  module state
     */
    job: <Array<Job>>[],
  },
  mutations: {
    /**
     * vuex add job  module mutations
     */
    statejob(state, job) {
      state.job = job;
    },
  },
  actions: {
    GetJob({ commit }) {
      /**
       * vuex add job  module actions
       */
      const $axios: any = inject("$axios");
      $axios.get("job").then((response: any) => {
        commit("statejob", response.data);
      });
    },
  },
};
