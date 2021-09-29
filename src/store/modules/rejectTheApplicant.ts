/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/1-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of rejecttheApplicant vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { RejectTheApplicant } from "@/store/interface/RejecttheApplicant";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add rejectTheApplicant  module state
     */
    rejectTheApplicant: <Array<RejectTheApplicant>>[],
  },
  mutations: {
    /**
     * vuex add rejectTheApplicant  module mutations
     */
    stateRejectTheApplicant(state, rejectTheApplicant) {
      state.rejectTheApplicant = rejectTheApplicant;
    },
  },
  actions: {
    /**
     * vuex add rejectTheApplicant  module actions
     */
    GetRejectTheApplicant({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("rejectTheApplicant").then((response: any) => {
        commit("stateRejectTheApplicant", response.data);
      });
    },
  },
};
