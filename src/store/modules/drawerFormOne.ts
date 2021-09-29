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
     * vuex add drawerFormOne module state
     */
    drawerFormOne: <Array<DrawerForm>>[],
  },
  mutations: {
    /**
     * vuex add drawerFormOne module mutations
     */
    stateDrawerFormOne(state, drawerFormOne) {
      state.drawerFormOne = drawerFormOne;
    },
  },
  actions: {
    /**
     * vuex add drawerFormOne module actions
     */
    GetDrawerFormOne({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("drawerFormOne").then((response: any) => {
        commit("stateDrawerFormOne", response.data);
      });
    },
  },
};
