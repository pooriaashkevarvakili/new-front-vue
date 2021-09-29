/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال دبیرخانه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div>
    <div class="grid grid-cols-2 mt-5">
      <div class="grid w-6/12 rounded-lg bg-gray-50 mr-1">
        <div class="grid-flow-col grid place-content-start">
          <i-check-one class="text-green-400 mr-2 mt-2 text-2xl" />
          <span class="text-green-400 mr-3 font-bold text-xl mt-2">شماره نامه:</span>
          <span class="text-green-400 mr-2 font-bold text-xl mt-2">99/08742</span>
          <span class="text-green-400 mr-5 font-bold text-xl mt-2">تاریخ نامه:</span>
          <span class="text-green-400 mr-2 font-bold text-xl mt-2">1399/04/11</span>
        </div>
      </div>
      <div class="grid place-items-end">
        <div class="grid grid-flow-col">
          <a-button
            class="ml-3 text-red-400 font-bold py-5 grid grid-flow-col place-content-center"
          >حذف نامه</a-button>
          <a-button
            class="ml-5 py-5 grid text-red-400 font-bold grid-flow-col place-content-center"
          >چاپ فیش</a-button>
        </div>
      </div>
    </div>
    <GisheTabsForms />
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import GisheTabsForms from "./GisheTabsForms.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run basic information resume of examples
     * @public this is a public method
     * @alpha modal page form information دبیرخانه
     * @beta  قسمت اول صفحه سوم نوع نامه ک حذف یاچاپ دارد
     * @example شماره وتاریخ نامه حذف نامه وچاپ فیش دارد
     */
    name: "gishetabsform",
    components: { GisheTabsForms }
  });
</script>
<style scoped></style>