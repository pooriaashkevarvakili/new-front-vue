/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/2-11:01
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of titleJobs vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Title } from "@/store/interface/title";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add title  module state
     */
    title: <Array<Title>>[],
  },
  mutations: {
    /**
     * vuex add title  module mutations
     */
    stateGetTitle(state, title) {
      state.title = title;
    },
  },
  actions: {
    /**
     * vuex add title  module actions
     */
    GetTitle({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("title").then((response: any) => {
        commit("stateGetTitle", response.data);
      });
    },
  },
};
