/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/1-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of mahal vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Mahal } from "@/store/interface/mahal";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add mahal  module state
     */
    mahal: <Array<Mahal>>[],
  },
  mutations: {
    /**
     * vuex add mahal  module mutations
     */
    stateMahal(state, mahal) {
      state.mahal = mahal;
    },
  },
  actions: {
    GetMahal({ commit }) {
      /**
       * vuex add mahal  module actions
       */
      const $axios: any = inject("$axios");
      $axios.get("mahal").then((response: any) => {
        commit("stateMahal", response.data);
      });
    },
  },
};
