/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/1-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of modat vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { OfficeResume } from "@/store/interface/officeResume";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    officeResume: <Array<OfficeResume>>[],
  },
  mutations: {
    stateOfficeResume(state, officeResume) {
      state.officeResume = officeResume;
    },
  },
  actions: {
    GetOfficeResume({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("officeResume").then((response: any) => {
        commit("stateOfficeResume", response.data);
      });
    },
  },
};
