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
import { ModalsabetbasicInformation } from "@/store/interface/modalsabetbasicInformation";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add modalsabetbasicinformation  module state
     */
    modalsabetbasicinformation: <Array<ModalsabetbasicInformation>>[],
  },
  mutations: {
    /**
     * vuex add modalsabetbasicinformation  module mutations
     */
    statemodalsabetbasicInformation(state, modalsabetbasicinformation) {
      state.modalsabetbasicinformation = modalsabetbasicinformation;
    },
  },
  actions: {
    /**
     * vuex add modalsabetbasicinformation  module actions
     */
    GetModalsabetbasicinformation({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("modalsabetbasicinformation").then((response: any) => {
        commit("statemodalsabetbasicInformation", response.data);
      });
    },
  },
};
