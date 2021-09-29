/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of skill vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { GetAllApplicant } from "@/store/interface/getAllApplicant";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add skill  module state
     */
    skill: <Array<GetAllApplicant>>[],
  },
  mutations: {
    /**
     * vuex add skill  module mutations
     */
    stateSkill(state, skill) {
      state.skill = skill;
    },
  },
  actions: {
    /**
     * vuex add skill  module actions
     */
    GetSkill({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("skill").then((response: any) => {
        commit("stateSkill", response.data);
      });
    },
  },
};
