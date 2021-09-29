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
import { SearchTitle } from "@/store/interface/searchTitle";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add searchTitle  module state
     */
    searchTitle: <Array<SearchTitle>>[],
  },
  mutations: {
    /**
     * vuex add searchTitle  module mutations
     */
    stateSearchTitle(state, searchTitle) {
      state.searchTitle = searchTitle;
    },
  },
  actions: {
    /**
     * vuex add searchTitle  module actions
     */
    GetSearchTitle({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("searchTitle").then((response: any) => {
        commit("stateSearchTitle", response.data);
      });
    },
  },
};
