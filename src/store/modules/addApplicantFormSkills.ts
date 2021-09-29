/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/11-13:48
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of addApplicantFormSkills vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { AddApplicantFormSkills } from "@/store/interface/addApplicantFormSkills";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add application form skills state module
     */

    addApplicantFormSkills: <Array<AddApplicantFormSkills>>[],
  },
  mutations: {
    /**
     * vuex add application form skills mutations module
     */
    stateAddApplicantFormSkills(state, addApplicantFormSkills) {
      state.addApplicantFormSkills = addApplicantFormSkills;
    },
  },
  actions: {
    /**
     * vuex add application form skills actions module
     */
    GetAddApplicantFormSkills({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("addApplicantFormSkills").then((response: any) => {
        commit("stateAddApplicantFormSkills", response.data);
      });
    },
  },
};
