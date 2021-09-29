/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the جدول مصاحبهApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div>
    <div @click="showModal" class="grid gap-3 mt-6 cursor-pointer">
      <a-card
        class="mx-6 py-0.5 shadow-xl mt-2"
        v-for="interviews in interview"
        :key="interviews.id"
      >
        <div class="grid">
          <div class="flex space-y-2">
            <div class="flex-shrink-0">
              <img :src="interviews.image" class="w-16 rounded-full h-16" />
            </div>
            <div>
              <div class="mr-2">{{ interviews.fname }} {{ interviews.lname }}</div>
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
      v-model:visible="visible"
      title="مصاحبه"
      :body-style="{'height':'74vh'}"
      @ok="handleOk"
      :footer="null"
    >
      <RecruitmentApplicantsModal />
      <div class="mt-3">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1">
            <template #tab>تکمیل مدارک</template>
            <CompletionOfDocumentsModal />
          </a-tab-pane>
          <a-tab-pane key="2">
            <template #tab>ارزیابی</template>
            <AssessmentModal />
          </a-tab-pane>
          <a-tab-pane key="3">
            <template #tab>فرم</template>
            <FormsTabs />
          </a-tab-pane>
          <a-tab-pane key="4">
            <template #tab>استخدام</template>
            <ApplicantTabs />
          </a-tab-pane>
          <a-tab-pane key="5">
            <template #tab>مصاحبه</template>
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
  import TabInterView from "./TabInterView.vue";
  import CompletionOfDocumentsModal from "./CompletionOfDocumentsModal.vue";
  import InterViewTwoForm from "./InterViewTwoForm.vue";
  import { useStore } from "vuex";
  import { defineComponent, ref, computed } from "vue";
  import RecruitmentApplicantsModal from "./RecruitmentApplicantsModal.vue";
  import FormsTabs from "./FormsTabs.vue";
  import ApplicantTabs from "./ApplicantTabs.vue";
  export default defineComponent({
    name: "Interview",
    components: {
      RecruitmentApplicantsModal,
      InterViewTwoForm,
      TabInterView,
      CompletionOfDocumentsModal,
      AssessmentModal,
      FormsTabs,
      ApplicantTabs
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run interview of examples
       * @public this is a public method
       * @alpha interview مراحل جدول مصاحبه شامل تب هاش
       * @beta پروفایل ونام وتب ها
       * @example tabs مصاحبه ،استخدام،فرم،ارزیابی،تکمیل مدارک
       * @returns visible change set value true loading change set value
       */
      const store = useStore();
      store.dispatch("interview/GetInterview");
      const interview = computed(() => store.state.interview.interview);
      const newTabIndex = ref(0);
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
      const handleCancel = () => {
        visible.value = false;
      };
      return {
        activeKey: ref("5"),
        visible,
        newTabIndex,
        loading,
        showModal,
        handleOk,
        handleCancel,
        interview
      };
    }
  });
</script>
<style lang="scss">
</style>
