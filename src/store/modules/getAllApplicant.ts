/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of getAllApplicant vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { GetAllApplicant } from "@/store/interface/getAllApplicant";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add getallApplcants module state
     */
    getallApplicant: <Array<GetAllApplicant>>[],
  },
  mutations: {
    /**
     * vuex add formtabs module mutations
     */
    stateGetAllApplicant(state, getAllApplicant) {
      state.getAllApplicant = getAllApplicant;
    },
  },
  actions: {
    /**
     * vuex add formtabs module action
     */
    GetAllApplicant({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("getAllApplicant").then((response: any) => {
        commit("stateGetAllApplicant", response.data);
      });
    },
  },
};
