/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the home Tables Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="mt-5">
    <div class="grid grid-cols-5 gap-6 mr-3">
      <div class="h-screen bg-gray-200 rounded-lg">
        <div class="grid grid-flow-col place-content-start">
          <span class="text-xl grid font-bold mt-5 mr-5">متقاضیان</span>
          <a-badge
            class="rounded-full mt-4 mr-2 grid place-content-center bg-gray-300 text-gray-500 w-8 h-8"
          >42</a-badge>
        </div>
        <Applicants />
      </div>
      <div class="h-screen bg-gray-200 rounded-lg">
        <div class="grid grid-flow-col place-content-start">
          <span class="text-xl grid font-bold mt-5 mr-5">تاییدبرای مصاحبه</span>
          <a-badge
            class="rounded-full mt-4 mr-2 grid place-content-center bg-gray-300 text-gray-500 w-8 h-8"
          >3</a-badge>
        </div>
        <ConfirmForInterview />
      </div>
      <div class="h-screen rounded-lg bg-gray-200">
        <div class="grid grid-flow-col place-content-start">
          <span class="text-xl grid font-bold mt-5 mr-5">مصاحبه</span>
          <a-badge
            class="rounded-full mt-4 mr-2 grid place-content-center bg-gray-300 text-gray-500 w-8 h-8"
          >4</a-badge>
        </div>
        <InterView />
      </div>
      <div class="h-screen rounded-lg bg-gray-200">
        <div class="grid grid-flow-col place-content-start">
          <span class="text-xl grid font-bold mt-5 mr-5">تکمیل مدارک</span>
          <a-badge
            class="mt-4 rounded-full mr-2 grid place-items-center bg-gray-300 text-gray-500 w-8 h-8"
          >2</a-badge>
        </div>
        <Completionofdocuments />
      </div>
      <div class="h-screen bg-gray-200 rounded-lg ml-4">
        <div class="grid place-content-start grid-flow-col">
          <span class="text-xl grid font-bold mt-5 mr-5">استخدام</span>
          <a-badge
            class="mt-4 rounded-full mr-2 grid place-content-center bg-gray-300 text-gray-500 w-8 h-8"
          >3</a-badge>
        </div>
        <Recruitments />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import InterView from "./InterView.vue";
  import ConfirmForInterview from "./ConfirmForInterview.vue";
  import Applicants from "./Applicants.vue";
  import Completionofdocuments from "./Completionofdocuments.vue";
  import Recruitments from "./Recruitment.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Tables",
    components: {
      InterView,
      Applicants,
      ConfirmForInterview,
      Completionofdocuments,
      Recruitments
    }
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run tables joboffer of examples
     * @public this is a public method
     * @alpha دیتاهای جدول  در صفحه اصلی joboffer
     * @beta item table in home 
     * @example متقاضیان تاییدبرای مصاحبه مصاحبه تکمیل مدارک استخدام
     */
  });
</script>
<style scoped>
</style>
