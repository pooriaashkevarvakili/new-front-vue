/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال    ثبت ارزیابی مدیر مستقیم Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-3 gap-6">
    <div class="col-span-2">
      <a-button
        class="cursor-pointer py-6 grid grid-flow-col place-content-center w-full"
        @click="showModal"
      >
        <div class="grid grid-flow-col place-content-center">
          <i-plus size="17" class="text-base text-red-400" />
          <span class="mr-1 font-extrabold text-red-400">ثبت ارزیابی مدیر مستقیم</span>
        </div>
      </a-button>

      <a-modal
        :footer="null"
        :width="524"
        v-model:visible="visible"
        title="ارزیابی"
        :body-style="{'height':'30vh'}"
        @ok="handleOk"
      >
        <div>
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1">
              <template #tab>
                <span class="font-normal text-gray-400">ارزیابی</span>
              </template>
              <AssessmentModalOne />
            </a-tab-pane>
            <template #renderTabBar="{ DefaultTabBar, ...props }">
              <component :is="DefaultTabBar" v-bind="props" class="text-right bg-white" />
            </template>
          </a-tabs>
        </div>
      </a-modal>
    </div>
    <div>
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
  import TimeLineForm from "./TimeLineForm.vue";
  import AssessmentModalOne from "./AssessmentModalOne.vue";
  export default defineComponent({
    name: "AssessmentModal",
    components: {
      AssessmentModalOne,
      RecruitmentApplicantsModal,
      TimeLineForm
    },
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run modal joboffer of examples
     * @public this is a public method
     * @alpha four page modal ثبت ارزیابی مدیرمستقیم joboffer
     * @returns return value modal visible , loading
     */
    setup() {
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
        loading,
        visible,
        showModal,
        handleOk,
        activeKey: ref("1"),
        handleCancel
      };
    }
  });
</script>
<style lang="scss">
</style>
