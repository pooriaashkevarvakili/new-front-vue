/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of semat vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Semat } from "@/store/interface/semat";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add semat  module state
     */
    semat: <Array<Semat>>[],
  },
  mutations: {
    /**
     * vuex add semat  module mutations
     */
    stateSemat(state, semat) {
      state.semat = semat;
    },
  },
  actions: {
    /**
     * vuex add semat  module actions
     */
    GetSemat({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("semat").then((response: any) => {
        commit("stateSemat", response.data);
      });
    },
  },
};
