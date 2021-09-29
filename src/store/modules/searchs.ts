/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of search vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Searchs } from "@/store/interface/searchs";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add searchs  module state
     */
    searchs: <Array<Searchs>>[],
  },
  mutations: {
    /**
     * vuex add searchs  module mutations
     */
    stateSearchs(state, searchs) {
      state.searchs = searchs;
    },
  },
  actions: {
    /**
     * vuex add searchs  module actions
     */
    GetSearchs({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("searchs").then((response: any) => {
        commit("stateSearchs", response.data);
      });
    },
  },
};
