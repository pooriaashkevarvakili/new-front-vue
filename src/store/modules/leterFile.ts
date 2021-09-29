/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:55
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of letterfile vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { LeterFile } from "@/store/interface/leterFile";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add letterFile  module state
     */
    leterfile: <Array<LeterFile>>[],
  },
  mutations: {
    /**
     * vuex add letterFile  module mutations
     */
    stateLeterFile(state, leterfile) {
      state.leterfile = leterfile;
    },
  },
  actions: {
    GetLeterFile({ commit }) {
      /**
       * vuex add letterFile  module actions
       */
      const $axios: any = inject("$axios");
      $axios.get("leterfile").then((response: any) => {
        commit("stateLeterFile", response.data);
      });
    },
  },
};
