/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:56
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of recruitment vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Recruitment } from "@/store/interface/recruitment";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add recruitment  module state
     */
    recruitment: <Array<Recruitment>>[],
  },
  mutations: {
    /**
     * vuex add recruitment  module mutations
     */
    staterecruitment(state, recruitment) {
      state.recruitment = recruitment;
    },
  },
  actions: {
    /**
     * vuex add recruitment  module actions
     */
    Recruitment({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("recruitment").then((response: any) => {
        commit("staterecruitment", response.data);
      });
    },
  },
};
