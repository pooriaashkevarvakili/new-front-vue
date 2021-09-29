/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of completionofdocument vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { Completionofdocuments } from "@/store/interface/completionofdocuments";
export default <Module<any, any>>{
  namespaced: true,
  state: {
         /**
     * vuex add completion of documents state module
     */
    completionofdocuments: <Array<Completionofdocuments>>[],
  },
  mutations: {
        /**
     * vuex add completion of documents mutations module
     */
    stateCompletionofdocuments(state, completionofdocuments) {
      state.completionofdocuments = completionofdocuments;
    },
  },
  actions: {
        /**
     * vuex add completion of documents action module
     */
    Completionofdocuments({ commit }) {
      const axios: any = inject("$axios");
      axios.get("completionofdocuments").then((response: any) => {
        commit("stateCompletionofdocuments", response.data);
      });
    },
  },
};
