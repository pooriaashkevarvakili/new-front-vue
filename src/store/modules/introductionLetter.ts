/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/01-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of introductionletter vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { IntroductionLetter } from "@/store/interface/introductionLetter";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add inroduction letter  module state
     */
    introductionLetter: <Array<IntroductionLetter>>[],
  },
  mutations: {
    /**
     * vuex add inroduction letter  module mutations
     */
    stateIntroLetter(state, introductionLetter) {
      state.introductionLetter = introductionLetter;
    },
  },
  actions: {
    /**
     * vuex add inroduction letter  module actions
     */
    GetIntroLetter({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("introductionLetter").then((response: any) => {
        commit("stateIntroLetter", response.data);
      });
    },
  },
};
