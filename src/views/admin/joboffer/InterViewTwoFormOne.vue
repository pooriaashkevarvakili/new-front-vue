/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:27
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the فرم مصاحبه زمان Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <AForm :form="form" ref="formRef" :rules="rules" :model="formState" layout="vertical">
    <AFormItem name="interviews" ref="interviews" :label="$t('field.interviews')">
      <div class="grid grid-flow-col place-content-start">
        <img src="@/assets/images/img/image3.jpg" class="w-10 h-10" />
        <img src="@/assets/images/img/image8.jpg" class="w-10 h-10 mr-2" />
        <InterViewTwoFormDropDown />
      </div>
    </AFormItem>
  </AForm>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import InterViewTwoFormDropDown from "./InterViewTwoFormDropDown.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "interViewTwoFromOne",
    components: {
      InterViewTwoFormDropDown
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run interview form joboffer of examples
       * @public this is a public method
       * @alpha data images in page form interview
       * @beta نوع مصاحبه باdrop-down profile or name
       */

      return {};
    }
  });
</script>
<style scoped>
</style>