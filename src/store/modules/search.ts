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
import { Search } from "@/store/interface/search";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add search  module state
     */
    search: <Array<Search>>[],
  },
  mutations: {
    /**
     * vuex add search  module mutations
     */
    stateSearch(state, search) {
      state.search = search;
    },
  },
  actions: {
    /**
     * vuex add search  module actions
     */
    GetSearch({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("search").then((response: any) => {
        commit("stateSearch", response.data);
      });
    },
  },
};
