/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of getAllApplicant vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Applicants } from "@/store/interface/applicants";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add applicants state module
     */
    applicants: <Array<Applicants>>[],
  },
  mutations: {
    /**
     * vuex add applicants mutaions module
     */
    stateApplicants(state, applicants) {
      state.applicants = applicants;
    },
  },
  actions: {
    /**
     * vuex add applicants actions module
     */
    GetApplicants({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("applicants").then((response: any) => {
        commit("stateApplicants", response.data);
      });
    },
  },
};
