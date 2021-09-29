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
import { DataRequestTable } from "@/store/interface/dataRequestTable";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add datarequest  module state
     */
    datarequesttable: <Array<DataRequestTable>>[],
  },
  mutations: {
    /**
     * vuex add datarequest  module mutations
     */
    stateDataRequestTable(state, datarequesttable) {
      state.datarequesttable = datarequesttable;
    },
  },
  actions: {
    /**
     * vuex add datarequest  module acions
     */
    GetDataRequestTable({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("datarequesttable").then((response: any) => {
        commit("stateDataRequestTable", response.data);
      });
    },
  },
};
