/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:27
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the آپلود یا دانلود دراور فرم افزودن اطلاعات متقاضی Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-2">
    <span class="text-black text-base">عکس متقاضی</span>
    <span class="text-black text-base">فایل رزومه</span>
  </div>
  <div class="grid grid-cols-2 mt-2">
    <span class="text-gray-400 font-light">عکس متقاضی را بافرمت jpg یا png آپلود نمایید</span>
    <span class="text-gray-400 font-light">رزومه متقاضی را با فرمت pdf آپلود نمایید</span>
  </div>
  <div class="grid grid-cols-2 mt-4">
    <a-upload>
      <a-button class="grid bg-blue-400 place-content-center p-6 py-6">
        <div class="grid grid-flow-col">
          <i-upload-one theme="outline" size="24" class="text-white grid items-center" />
          <span class="text-white font-bold mr-1">آپلود رزومه</span>
        </div>
      </a-button>
    </a-upload>
    <a-upload>
      <a-button class="p-6 grid place-content-center rounded-lg">
        <div class="grid grid-flow-col">
          <i-camera size="20" class="text-blue-500" />
          <span class="font-bold text-blue-400 mr-1">آپلود عکس</span>
        </div>
      </a-button>
    </a-upload>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "addIndividualUpdate",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run resume upload joboffer of examples
       * @public this is a public method
       * @alpha مراحل اپدیت رزومه one page drawer
       * @beta item upload  resume or jpg or pdf
       *
       */
      const fileList = ref([]);
      return {
        fileList
      };
    }
  });
</script>
<style >
</style>