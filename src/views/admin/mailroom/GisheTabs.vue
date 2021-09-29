/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:28
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دبیرخانه گیشه اینپوت دیزابل است Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="bg-white h-screen">
    <div class="grid grid-cols-1">
      <div>
        <h1 class="mt-7 mr-8 font-blod text-red-400">گیشه</h1>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="grid place-items-start mt-3.5">
        <span class="text-gray-400 mr-9 font-extrabold text-xl">درگیشه اطلاعات نامه وارده ثبت می شود</span>
      </div>
      <div class="grid place-items-end ml-5">
        <div class="grid grid-flow-col">
          <i-plus class="grid items-center text-red-400" />
          <span class="mr-2.5 text-red-400 text-xl">افزودن نامه جدید</span>
        </div>
      </div>
    </div>
    <GisheTabsOne />
  </div>
</template>

<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import GisheTabsOne from "./GisheTabsOne.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "gishetabs",
    components: { GisheTabsOne }
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run basic information resume of examples
     * @public this is a public method
     * @alpha three  page form گیشه افزودن نامه جدید دبیرخانه قسمت اول
     * @beta  شامل گیشه و چه اطلاعاتی از نامه ثبت میشود 
     * @example افزودن نامه جدید
     *
     */
  });
</script>
<style scoped></style>