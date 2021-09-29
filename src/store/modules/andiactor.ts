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
import { Andiactor } from "@/store/interface/andiactor";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add andictor state module
     */
    andiactor: <Array<Andiactor>>[],
  },
  mutations: {
    /**
     * vuex add andicator mutaions module
     */
    stateAndiactor(state, andiactor) {
      state.andiactor = andiactor;
    },
  },
  actions: {
    /**
     * vuex add andicator action module
     */
    GetAndiactor({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("andiactor").then((response: any) => {
        commit("stateAndiactor", response.data);
      });
    },
  },
};
