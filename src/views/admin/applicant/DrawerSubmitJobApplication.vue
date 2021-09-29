/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:50
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the ثبت درخواست استخدام Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div class="ml-5">
    <a-button
      @click="showDrawer"
      type="danger"
      class="w-full py-6 grid place-content-center grid-flow-col"
    >
      <template #icon>
        <i-plus class="text-xl" />
      </template>
      <span class="text-white font-bold mr-1">ثبت درخواست استخدام</span>
    </a-button>
    <a-drawer
      class="drawer-custom"
      :placement="placement"
      :width="675"
      :visible="visible"
      @close="onClose"
      :closable="true"
    >
      <template #title>
        <span class="text-white text-2xl">ثبت درخواست استخدام</span>
      </template>
      <FormSubmitJobApplication @CloseDrawer="onClose" />
    </a-drawer>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import FormSubmitJobApplication from "./FormSubmitJobApplication.vue";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "drawerSubmitJobApplication",
    components: { FormSubmitJobApplication },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run drawer submit applicant of examples
       * @public this is a public method
       * @alpha دراور ثبت درخواست استخدام
       * @beta drawer icon plus
       * @returns change value visible,loading change value
       */
      const placement = ref<string>("left");
      const visible = ref<boolean>(false);

      const showDrawer = () => {
        visible.value = true;
      };
      const onClose = () => {
        visible.value = false;
      };
      return {
        onClose,
        showDrawer,
        visible,
        placement
      };
    }
  });
</script>
<style scoped>
</style>