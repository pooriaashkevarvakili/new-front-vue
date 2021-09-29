/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال صفحه اول اطلاعات متقاضی Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-3">
    <div class="grid place-content-center place-items-center col-span-2">
      <i-file-addition-one
        class="grid place-items-center text-gray-400"
        size="43"
        theme="outline"
        stroke-linejoin="bevel"
        stroke-linecap="square"
      />
      <span
        class="text-gray-500 font-medium mt-3 text-center block"
      >هیچ اطلاعاتی ازمتقاضی وارد نشده است</span>
      <a-button
        class="mt-3 grid grid-flow-col place-content-center bg-red-50 items-center border-none p-5"
        @click="showModal"
      >
        <i-plus class="text-base text-red-400 mt-1" />
        <span class="font-extrabold text-red-400">افزودن اطلاعات متقاضی</span>
      </a-button>
    </div>
    <div class="grid">
      <TimeLineForm />
    </div>
    <a-modal
      :width="524"
      class="text-xl font-extrabold"
      v-model:visible="visible"
      title="متقاضیان استخدام"
      @ok="handleOk"
      :body-style="{'height':'70vh'}"
      :footer="null"
    >
      <div>
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane tab="استخدام" key="1">
            <AddApplicantForm @modalClose="handleCancel" />
          </a-tab-pane>
          <template #renderTabBar="{ DefaultTabBar, ...props }">
            <component :is="DefaultTabBar" v-bind="props" class="text-right bg-white" />
          </template>
        </a-tabs>
      </div>
    </a-modal>
  </div>
</template>
<script lang="ts">
  import RecruitmentApplicantsModal from "./RecruitmentApplicantsModal.vue";
  import { defineComponent, ref } from "vue";
  import TimeLineForm from "./TimeLineForm.vue";
  import AddApplicantForm from "./AddApplicantForm.vue";
  import AddApplicants from "./AddApplicants.vue";
  /**
   * @param
   * @example
   *
   */
  export default defineComponent({
    name: "ApplicantTabs",
    components: {
      AddApplicants,
      TimeLineForm,
      AddApplicantForm,
      RecruitmentApplicantsModal
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run modal joboffer of examples
       * @public this is a public method
       * @alpha one page modal applicant افزودن اطلاعات متقاضیjoboffer
       * @beta افزودن متفاضی وتایم لاین که چه کسانی دراین لیست ثبت نام کردند
       * @returns set change modal
       */
      const loading = ref<boolean>(false);
      const visible = ref<boolean>(false);
         /**
     * sucess event emit
     *
     */
      const showModal = () => {
        visible.value = true;
      };
      const handleOk = () => {
        loading.value = true;
      };
      const handleCancel = () => {
        visible.value = false;
      };
      return {
        activeKey: ref("1"),
        loading,
        visible,
        showModal,
        handleCancel,
        handleOk
      };
    }
  });
</script>
<style lang="scss">
</style>
