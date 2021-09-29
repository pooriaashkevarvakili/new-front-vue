/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/01-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of disappRoval vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { DrawerForm } from "@/store/interface/drawerForm";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add drawerForm module state
     */
    drawerForm: <Array<DrawerForm>>[],
  },
  mutations: {
    /**
     * vuex add drawerForm module mutations
     */
    stateDrawerForm(state, drawerForm) {
      state.drawerForm = drawerForm;
    },
  },
  actions: {
    GetDrawerForm({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("drawerForm").then((response: any) => {
        commit("stateDrawerForm", response.data);
      });
    },
  },
};
