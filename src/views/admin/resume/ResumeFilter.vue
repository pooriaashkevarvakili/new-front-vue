/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <a-button class="py-5 mr-2 grid grid-flow-col place-content-center" @click="showModal">
    <template #icon>
      <i-setting-config class="text-black" theme="outline" size="22" />
    </template>
    <span class="mr-1">فیلترهای بیشتر</span>
  </a-button>
  <a-modal v-model:visible="visible" title="فیلترهای بیشتر">
    <template #footer>
      <div class="grid place-content-end grid-flow-col">
        <a-button
          type="primary"
          class="p-3 py-5 grid place-content-center text-white"
          key="back"
          @click="handleCancel"
        >پاک کردن</a-button>
        <a-button
          class="p-3 mr-4 py-5 grid place-content-center text-white"
          key="submit"
          type="danger"
        >اعمال فیلتر</a-button>
      </div>
    </template>
    <div class="grid">
      <span class="text-base font-bold">تحصیلات</span>
    </div>
    <Education />
    <Ages />
    <Skills />
  </a-modal>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import Education from "./Education.vue";
  import Ages from "./Ages.vue";
  import Skills from "./Skills.vue";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "resumeFilter",
    components: {
      Education,
      Ages,
      Skills
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run resume filter modal resume of examples
       * @public this is a public method
       * @alpha modal filers more arsive modal
       * @returns set modal change value visible,set modal change value loading
       */
      const visible = ref<boolean>(false);
      const showModal = () => {
        /**
                     *
                     * @button the string modal button`
                   
                     */
        visible.value = true;
      };

      const handleCancel = () => {
        /**
                     *
                     * @button the string modal button
                   
                     */
        visible.value = false;
      };
      return {
        visible,
        showModal,
        handleCancel
      };
    }
  });
</script>
<style lang="scss">
</style>
