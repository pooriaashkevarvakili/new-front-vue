/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/31-12:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of interview vuex-modules the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { inject } from "vue";
import { Module } from "vuex";
import { InterviewCalendar } from "@/store/interface/interviewCalendar";
export default <Module<any, any>>{
  namespaced: true,
  state: {
    /**
     * vuex add interview Calendar module state
     */
    interviewCalendar: <Array<InterviewCalendar>>[],
  },
  mutations: {
    /**
     * vuex add interview Calendar module mutations
     */
    stateinterviewCalendar(state, interviewCalendar) {
      state.interviewCalendar = interviewCalendar;
    },
  },
  actions: {
    /**
     * vuex add interview Calendar module actions
     */
    GetInterviewCalendar({ commit }) {
      const $axios: any = inject("$axios");
      $axios.get("interviewCalendar").then((response: any) => {
        commit("stateinterviewCalendar", response.data);
      });
    },
  },
};
