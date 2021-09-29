/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:46
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of age vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Age } from "@/store/interface/age";
export default <Module<any, any>>{
  namespaced: true,
  /**
   * vuex add age state module
   */
  state: {
    age: <Array<Age>>[],
  },
  mutations: {
    /**
     * vuex add age mutaions module
     */
    stateAge(state, age) {
      state.age = age;
    },
  },
  actions: {
    /**
     * vuex add age actions module
     */
    GetAge({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("age").then((response: any) => {
        commit("stateAge", response.data);
      });
    },
  },
};
