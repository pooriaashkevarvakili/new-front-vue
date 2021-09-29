/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of confirmforinterview vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { ConfirmForInterview } from "@/store/interface/confirmForInterview";
export default <Module<any, any>>{
  namespaced: true,
  /**
   * vuex add completion of documents module mutations module
   */
  state: {
    confirmforinterview: <Array<ConfirmForInterview>>[],
  },
  mutations: {
    /**
     * vuex add conformation for interview module mutations
     */
    stateConformationForInterview(state, confirmforinterview) {
      state.confirmforinterview = confirmforinterview;
    },
  },
  actions: {
    /**
     * vuex add confirm for interiew  module actions
     */
    ConformationForInterView({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("confirmforinterview").then((response: any) => {
        commit("stateConformationForInterview", response.data);
      });
    },
  },
};
