/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/08-11:41
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of images vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { inject } from "vue";
import { Module } from "vuex";
import { images } from "@/store/interface/images";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add images module state
     */
    images: <Array<images>>[],
  },
  mutations: {
    /**
     * vuex add images module mutations
     */
    stateGetImages(state, images) {
      state.images = images;
    },
  },
  actions: {
    /**
     * vuex add images module actions
     */
    GetImages({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("images").then((response: any) => {
        commit("stateGetImages", response.data);
      });
    },
  },
};
