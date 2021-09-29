/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of education vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Education } from "@/store/interface/education";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add educations module state
     */
    education: <Array<Education>>[],
  },
  mutations: {
    /**
     * vuex add educations module mutatons
     */
    stateEducation(state, education) {
      state.education = education;
    },
  },
  actions: {
    /**
     * vuex add educations module actions
     */
    GetEducation({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("education").then((response: any) => {
        commit("stateEducation", response.data);
      });
    },
  },
};
