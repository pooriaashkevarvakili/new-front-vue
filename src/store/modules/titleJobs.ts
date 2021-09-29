/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/2-11:01
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of titleJobs vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { TitleJobs } from "@/store/interface/titlejobs";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add titlejobs  module state
     */
    titlejobs: <Array<TitleJobs>>[],
  },
  mutations: {
    /**
     * vuex add titlejobs  module mutations
     */
    stateTitleJobs(state, titlejobs) {
      state.titlejobs = titlejobs;
    },
  },
  actions: {
    /**
     * vuex add titlejobs  module actions
     */
    GetTitleJobs({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("titlejobs").then((response: any) => {
        commit("stateTitleJobs", response.data);
      });
    },
  },
};
