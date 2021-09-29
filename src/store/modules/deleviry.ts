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
import { Deleviry } from "@/store/interface/deleviry";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add deleviry module state
     */
    deleviry: <Array<Deleviry>>[],
  },
  mutations: {
    /**
     * vuex add deleviry module mutaions
     */
    stateDeleviry(state, deleviry) {
      state.deleviry = deleviry;
    },
  },
  actions: {
    /**
     * vuex add deleviry module actions
     */
    GetDeleviry({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("deleviry").then((response: any) => {
        commit("stateDeleviry", response.data);
      });
    },
  },
};
