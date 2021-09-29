/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/01-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of disappRoval vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { DisappRoval } from "@/store/interface/disappRoval";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add disappRoval module state
     */
    disappRoval: <Array<DisappRoval>>[],
  },
  mutations: {
    /**
     * vuex add disappRoval module mutaions
     */
    stateDisappRoval(state, disappRoval) {
      state.disappRoval = disappRoval;
    },
  },
  actions: {
    /**
     * vuex add disappRoval module actions
     */
    GetDisappRoval({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("disappRoval").then((response: any) => {
        commit("stateDisappRoval", response.data);
      });
    },
  },
};
