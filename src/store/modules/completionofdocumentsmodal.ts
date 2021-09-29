/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/11-13:49
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of completionofdocumentsmodal vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Completionofdocumentsmodal } from "@/store/interface/completionOfDocumentsModal";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add completion of documents modal state module
     */
    completionofdocumentsmodal: <Array<Completionofdocumentsmodal>>[],
  },
  mutations: {
    /**
     * vuex add completion of documents module mutations module
     */
    statecompletionofdocumentsmodal(state, completionofdocumentsmodal) {
      state.completionofdocumentsmodal = completionofdocumentsmodal;
    },
  },
  actions: {
    /**
     * vuex add completion of documents modal module actions
     */
    GetCompletionOfDocumentsModal({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("completionofdocumentsmodal").then((response: any) => {
        commit("statecompletionofdocumentsmodal", response.data);
      });
    },
  },
};
