/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/1-17:00
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of location vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Location } from "@/store/interface/Location";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add location  module state
     */
    location: <Array<Location>>[],
  },
  mutations: {
    /**
     * vuex add location  module mutations
     */
    stateLocation(state, location) {
      state.location = location;
    },
  },
  actions: {
    /**
     * vuex add location  module actions
     */
    GetLocation({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("location").then((response: any) => {
        commit("stateLocation", response.data);
      });
    },
  },
};
