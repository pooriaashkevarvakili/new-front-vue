/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of sex vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Sex } from "@/store/interface/sex";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add sex  module state
     */
    sex: <Array<Sex>>[],
  },
  mutations: {
    /**
     * vuex add sex  module mutations
     */
    stateSex(state, sex) {
      state.sex = sex;
    },
  },
  actions: {
    /**
     * vuex add sex  module actions
     */
    GetSex({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("sex").then((response: any) => {
        commit("stateSex", response.data);
      });
    },
  },
};
