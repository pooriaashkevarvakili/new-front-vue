/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دراپ داون تاییدبرای مصاحبهApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <template v-for="(placement, index) in placements" :key="placement">
      <a-dropdown trigger="click" :placement="placement" v-model:visible="visible">
        <a class @click.prevent>
          <a-button
            type="primary"
            class="grid place-content-center py-5 font-extrabold text-white"
          >تایید برای مصاحبه</a-button>
        </a>
        <template #overlay>
          <a-menu class="w-full grid grid-rows-1">
            <a-menu-item class="grid grid-cols-1">
              <div class="grid place-items-start">
                <span class="text-base font-blod text-black">زمان آزاد شما برای مصاحبه</span>
                <span class="text-base mt-1 text-gray-500">روزوساعت مناسب جهت مصاحبه را انتخاب کنید</span>
              </div>
            </a-menu-item>
            <hr class="mt-1" />
            <a-menu-item class="grid grid-cols-1">
              <div class="-mt-3">
                <a-calendar v-model:value="value" :fullscreen="false" />
              </div>
              <div class="grid grid-flow-col">
                <span
                  v-for="interviewCalendars in interviewCalendar"
                  :key="interviewCalendars.id"
                  class="p-4 py-1 mr-2 font-medium bg-gray-200 rounded-lg"
                >{{interviewCalendars.name}}</span>
              </div>
              <div class="grid grid-flow-col place-content-start">
                <a-checkbox class="mt-5 text-xs">محدودیتی درتاریخ وزمان مصاحبه نداریم</a-checkbox>
              </div>
              <a-button
                type="primary"
                class="w-full py-5 mt-4 grid place-content-center font-extrabold text-white"
              >تایید و ثبت زمان پیشنهادی</a-button>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <template></template>
    </template>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { useStore } from "vuex";
  import { defineComponent, ref, computed } from "vue";
  import { Moment } from "moment";
  export default defineComponent({
    name: "ConfirmationForInterviewOneCalendar",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run form dropdown calendar joboffer of examples
       * @public this is a public method
       * @alpha dropdown page data calendar interview in joboffer
       * @beta time , calendar, watch interview  ,button تایید ثبت زمان پیشنهادی
       * @returns return value 
       *
       */
      const store = useStore();
      const visible = ref<boolean>(false);
      const value = ref<Moment>();
      store.dispatch("interviewCalendar/GetInterviewCalendar");
      const interviewCalendar = computed(
        () => store.state.interviewCalendar.interviewCalendar
      );
      return {
        value,
        interviewCalendar,
        visible,
        placements: ["bottomRight"]
      };
    }
  });
</script>
<style scoped>
</style>
