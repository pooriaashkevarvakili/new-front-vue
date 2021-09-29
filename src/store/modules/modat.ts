/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/1-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of modat vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Modat } from "@/store/interface/modat";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add modat  module state
     */
    modat: <Array<Modat>>[],
  },
  mutations: {
    /**
     * vuex add modat  module mutations
     */
    stateModat(state, modat) {
      state.modat = modat;
    },
  },
  actions: {
    GetModat({ commit }) {
      /**
       * vuex add modat  module actions
       */
      const $axios: any = inject("$axios");
      $axios.get("modat").then((response: any) => {
        commit("stateModat", response.data);
      });
    },
  },
};
