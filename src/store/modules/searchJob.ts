/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of search vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { SearchJob } from "@/store/interface/searchJob";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add searchjob  module state
     */
    searchJob: <Array<SearchJob>>[],
  },
  mutations: {
    /**
     * vuex add searchjob  module mutations
     */
    stateSearchJob(state, searchJob) {
      state.searchJob = searchJob;
    },
  },
  actions: {
    /**
     * vuex add searchjob  module actions
     */
    GetSearchJob({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("searchJob").then((response: any) => {
        commit("stateSearchJob", response.data);
      });
    },
  },
};
