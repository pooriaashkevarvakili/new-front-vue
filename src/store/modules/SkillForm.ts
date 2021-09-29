/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of skillform vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { SkillForm } from "@/store/interface/skillForm";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add skillForm  module state
     */
    skillForm: <Array<SkillForm>>[],
  },
  mutations: {
    /**
     * vuex add skillForm  module mutations
     */
    stateSkillForm(state, skillForm) {
      state.skillForm = skillForm;
    },
  },
  actions: {
    /**
     * vuex add skillForm  module actions
     */
    GetSkillForm({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("skillForm").then((response: any) => {
        commit("stateSkillForm", response.data);
      });
    },
  },
};
