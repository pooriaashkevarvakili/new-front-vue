/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of hoghugh vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Hoghugh } from "@/store/interface/hoghugh";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add houghugh module state
     */
    hoghugh: <Array<Hoghugh>>[],
  },
  mutations: {
  /**
     * vuex add houghugh module mutations
     */
    stateHoghugh(state, hoghugh) {
      state.hoghugh = hoghugh;
    },
  },
  actions: {
    /**
     * vuex add houghugh module actions
     */
    GetHoghugh({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("hoghugh").then((response: any) => {
        commit("stateHoghugh", response.data);
      });
    },
  },
};
