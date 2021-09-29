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
import { TitleLetter } from "@/store/interface/titleLetter";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add titleletter  module state
     */
    titleLetter: <Array<TitleLetter>>[],
  },
  mutations: {
    /**
     * vuex add titleletter  module mutations
     */
    statetitleLetter(state, titleLetter) {
      state.titleLetter = titleLetter;
    },
  },
  actions: {
    /**
     * vuex add titleletter  module actions
     */
    GetTitleLetter({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("titleLetter").then((response: any) => {
        commit("statetitleLetter", response.data);
      });
    },
  },
};
