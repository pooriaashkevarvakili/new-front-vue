/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of elat vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Elat } from "@/store/interface/elat";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add elat module state
     */
    elat: <Array<Elat>>[],
  },
  mutations: {
    /**
     * vuex add elat module mutations
     */
    stateElat(state, elat) {
      state.elat = elat;
    },
  },
  actions: {
    /**
     * vuex add elat module actions
     */
    GetElat({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("elat").then((response: any) => {
        commit("stateElat", response.data);
      });
    },
  },
};
