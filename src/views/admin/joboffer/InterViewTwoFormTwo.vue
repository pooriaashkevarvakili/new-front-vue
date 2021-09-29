/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:27
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the چک باکس فرم مصاحبه واینپوت Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <AForm :form="form" ref="formRef" :rules="rules" :model="formState" layout="vertical">
    <div class="py-1 bg-gray-200">
      <AFormItem>
        <a-checkbox class="mr-4 mt-2">ارسال به متقاضی</a-checkbox>
        <div class="mr-10 mt-1 text-gray-500">زمانبندی مصاحبه برای متقاضی ایمیل وپیامک می شود</div>
      </AFormItem>
    </div>
  </AForm>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import InterViewTwoFormDropDown from "./InterViewTwoFormDropDown.vue";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "interViewTwoFormTwo",
    components: { InterViewTwoFormDropDown },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run interview form joboffer of examples
       * @public this is a public method
       * @alpha page interview modal form checkbox joboffer
       * @beta checkbox ارسال به متقاضی
       */

      return {};
    }
  });
</script>
<style></style>