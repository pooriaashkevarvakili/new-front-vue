/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the resume مودال انتقال به درخواست استخدام manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <a-button
    type="link"
    @click="showModal"
    class="grid grid-flow-col place-content-start text-black"
  >انتقال به درخواست استخدام</a-button>
  <a-modal
    width="500px"
    :body-style="{'height':'48vh'}"
    :footer="null"
    v-model:visible="visible"
    @click="onClose"
  >
    <template #title>
      <div class="grid">
        <span class="font-bold">انتخاب درخواست استخدام</span>
        <span class="text-xs mt-2">مشخص کنید رزومه های انتخاب شده به کدام درخواست ها منتقل می شود</span>
      </div>
    </template>
    <ModalOfficeResumeForm @showModal="onClose" />
  </a-modal>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { defineComponent, ref } from "vue";
  import ModalOfficeResumeForm from "./modalOfficeResumeForm.vue";
  export default defineComponent({
    name: "modalOfficeResume",
    components: { ModalOfficeResumeForm },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run modal office resume of examples
       * @public this is a public method
       * @alpha one page modal in table انتخاب درخواست استخدام ارشیورزومه
       * @beta modal title
       * @returns set value modal visible,set value modal loading
       */
      const visible = ref<boolean>(false);
      const loading = ref(false);
      /**
       * sucess event emit
       *
       */
      const showModal = () => {
        visible.value = true;
      };
      /**
       * sucess event emit
       *
       */
      const onClose = () => {
        visible.value = false;
      };
      return {
        visible,
        loading,
        showModal,
        onClose
      };
    }
  });
</script>
<style>
</style>