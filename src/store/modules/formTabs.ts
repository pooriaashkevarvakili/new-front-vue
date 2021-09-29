/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/11-13:49
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of formTabs vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { FormTabs } from "@/store/interface/formTabs";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add formtabs module state
     */
    formTabs: <Array<FormTabs>>[],
  },
  mutations: {
    /**
     * vuex add formtabs module mutations
     */
    stateFormTabs(state, formTabs) {
      state.formTabs = formTabs;
    },
  },
  actions: {
    /**
     * vuex add formtabs module actions
     */
    GetFormTabs({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("formTabs").then((response: any) => {
        commit("stateFormTabs", response.data);
      });
    },
  },
};
