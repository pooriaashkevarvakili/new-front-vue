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
import { Departeman } from "@/store/interface/departeman";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add departeman module state
     */
    departeman: <Array<Departeman>>[],
  },
  mutations: {
    /**
     * vuex add departeman module mutaions
     */
    stateDeparteman(state, departeman) {
      state.departeman = departeman;
    },
  },
  actions: {
    GetDeparteman({ commit }) {
      /**
       * vuex add departeman module actions
       */
      const $axios: any = inject("$axios");
      $axios.get("departeman").then((response: any) => {
        commit("stateDeparteman", response.data);
      });
    },
  },
};
