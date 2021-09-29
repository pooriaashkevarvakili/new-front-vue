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

  <a-modal
    v-model:visible="visible"
    title="فیلترهای بیشتر"
    @ok="handleOk"
    :body-style="{'height':'57vh'}"
  >
    <template #footer>
      <div class="grid mt-2 place-content-end grid-flow-col">
        <a-button
          class="p-3 py-5 grid place-content-center text-white"
          key="submit"
          type="danger"
        >ثبت نهایی</a-button>
        <a-button
          type="primary"
          class="p-3 mr-2 py-5 grid place-content-center text-white"
          key="back"
          @click="handleCancel"
        >پاک کردن</a-button>
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
    name: "ModalFilter",
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
       * @param {String} run modal filter joboffer of examples
       * @public this is a public method
       * @alpha فیلترهای بیشتر مودال joboffer
       * @beta modal filter education age skills
       * @example education زیردیپلم تاکارشناسی age از0تا40 skills it
       * @returns set value change visible,set value  change loading
       */
      const visible = ref<boolean>(false);
      /**
                       *
                       * @button the string button modal
                     
                       */
      const showModal = () => {
        visible.value = true;
      };
      /**
                       *
                       * @button the string button modal
                     
                       */
      const handleCancel = () => {
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
