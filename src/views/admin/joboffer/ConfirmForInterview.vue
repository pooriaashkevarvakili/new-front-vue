/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the تاییدبرای مصاحبه جدولApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div>
    <div @click="showModal" class="grid gap-3 mt-6 cursor-pointer">
      <a-card
        class="shadow-xl mx-6 py-0.5 mt-2"
        v-for="conformationForInterViews in confirmforinterview"
        :key="conformationForInterViews.id"
      >
        <div class="grid place-items-start">
          <div class="flex space-y-2">
            <div class="flex-shrink-0">
              <img :src="conformationForInterViews.image" class="w-16 rounded-full h-16" />
            </div>
            <div>
              <div
                class="mr-2"
              >{{ conformationForInterViews.fname }} {{ conformationForInterViews.lname }}</div>

              <div class="grid grid-flow-col mr-1">
                <i-time theme="outline" class="text-gray-500 grid place-content-center" size="14" />
                <span class="mr-1">5خرداد1398</span>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
    <a-modal
      width="1048px"
      :body-style="{'height':'74vh'}"
      v-model:visible="visible"
      title="تاییدبرای مصاحبه"
      @ok="handleOk"
      :footer="null"
    >
      <RecruitmentApplicantsModal />
      <div class="mt-3">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="5">
            <template #tab>
              <span class="text-gray-400 font-normal">تکمیل مدارک</span>
            </template>
            <CompletionOfDocumentsModal />
          </a-tab-pane>
          <a-tab-pane key="4">
            <template #tab>
              <span class="text-gray-400 font-normal">ارزیابی</span>
            </template>
            <AssessmentModal />
          </a-tab-pane>
          <a-tab-pane key="3">
            <template #tab>
              <span class="text-gray-400 font-normal">فرم</span>
            </template>
            <FormsTabs />
          </a-tab-pane>
          <a-tab-pane key="1">
            <template #tab>
              <span class="text-gray-400 font-normal">متقاضیان</span>
            </template>
            <ApplicantsTabs />
          </a-tab-pane>
          <a-tab-pane key="2">
            <template #tab>
              <span class="text-gray-400 font-normal">مصاحبه</span>
            </template>
            <TabInterView />
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
  /**
   * @param
   * @example
   *
   */
  import AssessmentModal from "./AssessmentModal.vue";
  import { useStore } from "vuex";
  import TabInterView from "./TabInterView.vue";
  import FormsTabs from "./FormsTabs.vue";
  import ApplicantsTabs from "./ApplicantTabs.vue";
  import CompletionOfDocumentsModal from "./CompletionOfDocumentsModal.vue";
  import RecruitmentApplicantsModal from "./RecruitmentApplicantsModal.vue";
  import { defineComponent, ref, computed } from "vue";
  export default defineComponent({
    name: "ConfirmForInterview",
    components: {
      RecruitmentApplicantsModal,
      TabInterView,
      AssessmentModal,
      ApplicantsTabs,
      FormsTabs,
      CompletionOfDocumentsModal
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run form joboffer interview of examples
       * @public this is a public method
       * @alpha جدول مراحل تاییدبرای مصاحبه
       * @beta ایتم های تایید برای مصاحبه مودال تب
       * @returns store vuex ,modal visible return value loading
       */
      const store = useStore();
      store.dispatch("confirmforinterview/ConformationForInterView");
      const confirmforinterview = computed(
        () => store.state.confirmforinterview.confirmforinterview
      );
      const visible = ref<boolean>(false);
      const loading = ref<boolean>(false);
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
      return {
        activeKey: ref("2"),
        showModal,
        handleCancel,
        handleOk,
        loading,
        visible,
        confirmforinterview
      };
    }
  });
</script>
<style lang="scss">
</style>

