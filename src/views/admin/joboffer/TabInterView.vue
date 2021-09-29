/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال مصاحبهApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-3">
    <div class="grid place-content-center col-span-2">
      <i-calendar
        class="grid place-items-center text-gray-300"
        size="65"
        theme="outline"
        stroke-linejoin="bevel"
        stroke-linecap="square"
      />
      <span
        class="text-gray-400 mt-2 font-medium text-center block"
      >هیچ مصاحبه ای با متقاضی تنظیم نشده است</span>
      <a-button
        @click="showModal"
        type="danger"
        class="mt-3 mx-12 grid py-5 grid-flow-col place-content-center"
      >
        <template #icon>
          <i-plus class="text-base mt-1 text-white" />
        </template>
        <span class="mr-1 font-extrabold">افزودن وقت مصاحبه</span>
      </a-button>
      <a-modal
        :width="520"
        v-model:visible="visible"
        title="مصاحبه"
        @ok="handleOk"
        :body-style="{'height':'60vh'}"
        :footer="null"
      >
        <div class="mt-3">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1">
              <template #tab>
                <span class="text-gray-400 font-normal">مصاحبه</span>
              </template>
              <InterViewTwoForm @modalClose="handleCancel" />
            </a-tab-pane>
            <template #renderTabBar="{ DefaultTabBar, ...props }">
              <component :is="DefaultTabBar" v-bind="props" class="text-right bg-white" />
            </template>
          </a-tabs>
        </div>
      </a-modal>
    </div>
    <div class="grid">
      <TimeLineForm />
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import RecruitmentApplicantsModal from "./RecruitmentApplicantsModal.vue";
  import { defineComponent, ref } from "vue";
  import InterViewTwoForm from "./InterViewTwoForm.vue";
  import TimeLineForm from "./TimeLineForm.vue";
  import InterViewTwoFormDropdown from "./InterViewTwoFormDropdown.vue";
  export default defineComponent({
    name: "TabInterView",
    components: {
      TimeLineForm,
      RecruitmentApplicantsModal,
      InterViewTwoForm,
      InterViewTwoFormDropdown
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run tabinterview joboffer of examples
       * @public this is a public method
       * @alpha  page two modal interview joboffer
       * @beta ایتم های افزودن مصاحبه که شامل فرم مصاحبه و تایم لاین های برای مصاحبه است
       * @returns change set value
       *
       */
      const formRef = ref<HTMLFormElement | null>();
      const loading = ref<boolean>(false);
      const visible = ref<boolean>(false);
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
      const handleOk = () => {
        loading.value = true;
      };
      /**
       * sucess event emit
       *
       */
      const handleCancel = () => {
        visible.value = false;
      };
      const validateForm = () => {
        formRef.value!.validate();
      };
      return {
        loading,
        visible,
        showModal,
        activeKey: ref("1"),
        handleOk,
        formRef,
        validateForm,
        handleCancel
      };
    }
  });
</script>
<style lang="scss">
</style>
