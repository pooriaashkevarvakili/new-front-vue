/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:56
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of place vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Place } from "@/store/interface/place";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add place  module state
     */
    place: <Array<Place>>[],
  },
  mutations: {
    /**
     * vuex add place  module mutations
     */
    statePlace(state, place) {
      state.place = place;
    },
  },
  actions: {
    /**
     * vuex add place  module actions
     */
    GetPlace({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("place").then((response: any) => {
        commit("statePlace", response.data);
      });
    },
  },
};
