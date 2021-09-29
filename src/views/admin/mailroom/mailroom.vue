/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دبیرخانه گیشه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="bg-white">
    <div class="grid grid-flow-row">
      <h1 class="text-red-400 mt-7 mr-10 font-blod">گیشه</h1>
      <span
        class="text-gray-400 mr-10 mt-3.5 font-extrabold text-xl"
      >در گیشه اطلاعات نامه وارده ثبت می شود</span>
    </div>
    <div class="mt-10">
      <Gishe />
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import Gishe from "./gishe.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run basic information resume of examples
     * @public this is a public method
     * @alpha one page  دبیرخانه
     * @example one page gishe
     */
    name: "mailroom",
    components: {
      Gishe
    }
  });
</script>
<style scoped></style>