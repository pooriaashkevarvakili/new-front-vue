

/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the جدول تکمیل مدارکApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div>
    <div @click="showModal" class="grid gap-3 mt-6 cursor-pointer">
      <a-card
        class="mx-6 py-1 shadow-xl mt-2"
        v-for="completionofdocument in completionofdocuments"
        :key="completionofdocument.id"
      >
        <div class="grid">
          <div class="flex space-y-2">
            <div class="flex-shrink-0">
              <img :src="completionofdocument.image" class="w-16 rounded-full h-16" />
            </div>
            <div>
              <div class="mr-2">{{ completionofdocument.fname }} {{ completionofdocument.lname }}</div>
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
      :width="1048"
      v-model:visible="visible"
      title="تکمیل مدارک"
      @ok="handleOk"
      :body-style="{'height':'74vh'}"
      :footer="null"
    >
      <RecruitmentApplicantsModal />
      <div class="mt-3">
        <a-tabs v-model:activeKey="activeKey" @edit="onEdit">
          <a-tab-pane key="5">
            <template #tab>
              <span class="text-gray-400 fon-normal">ارزیابی</span>
            </template>
            <AssessmentModal />
          </a-tab-pane>
          <a-tab-pane key="4">
            <template #tab>
              <span class="text-gray-400 fon-normal">فرم</span>
            </template>
            <FormsTabs />
          </a-tab-pane>
          <a-tab-pane key="3">
            <template #tab>
              <span class="text-gray-400 fon-normal">مصاحبه</span>
            </template>
            <TabInterView />
          </a-tab-pane>
          <a-tab-pane key="2">
            <template #tab>
              <span class="text-gray-400 fon-normal">متقاضیان</span>
            </template>
            <ApplicantTabs />
          </a-tab-pane>
          <a-tab-pane key="1">
            <template #tab>
              <span class="text-gray-400 fon-normal">تکمیل مدارک</span>
            </template>
            <CompletionOfDocumentsModal />
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
  import * as vuex from "vuex";
  import ApplicantTabs from "./ApplicantTabs.vue";
  import CompletionOfDocumentsModal from "./CompletionOfDocumentsModal.vue";
  import RecruitmentApplicantsModal from "./RecruitmentApplicantsModal.vue";
  import { defineComponent, ref, computed } from "vue";
  import FormsTabs from "./FormsTabs.vue";
  import TabInterView from "./TabInterView.vue";
  import AssessmentModal from "./AssessmentModal.vue";
  export default defineComponent({
    name: "Completionofdocuments",
    components: {
      RecruitmentApplicantsModal,
      CompletionOfDocumentsModal,
      ApplicantTabs,
      TabInterView,
      FormsTabs,
      AssessmentModal
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run tab table joboffer of examples
       * @public this is a public method
       * @alpha اطلاعات جدول تکمیل مدارک
       * @beta ایتم های تکمیل مدارک تب ها مثل
       * @returns modal return ,loading value
       *
       */

      const loading = ref<boolean>(false);
      const visible = ref<boolean>(false);

      const store = vuex.useStore();
      store.dispatch("completionofdocuments/Completionofdocuments");
      const completionofdocuments = computed(
        () => store.state.completionofdocuments.completionofdocuments
      );
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
        showModal,
        handleOk,
        handleCancel,
        visible,
        loading,
        completionofdocuments
      };
    }
  });
</script>
<style lang="scss">
</style>

