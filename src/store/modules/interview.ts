/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of interview vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Interview } from "@/store/interface/interview";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add interview module state
     */
    interview: <Array<Interview>>[],
  },
  mutations: {
    /**
     * vuex add interview module mutations
     */
    stateInterview(state, interview) {
      state.interview = interview;
    },
  },
  actions: {
    GetInterview({ commit }) {
      /**
       * vuex add interview module actions
       */
      const $axios: any = inject("$axios");
      $axios.get("interview").then((response: any) => {
        commit("stateInterview", response.data);
      });
    },
  },
};
