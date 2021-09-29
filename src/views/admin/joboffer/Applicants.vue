/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the متقاضیان استخدام کل مدال ها Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <div @click="showModal" class="grid cursor-pointer gap-3 mt-6">
      <a-card
        class="shadow-xl mx-6 grid grid-flow-col py-0.5 mt-2"
        v-for="applicants in getAllApplicant"
        :key="applicants.id"
      >
        <div class="grid">
          <div class="flex space-y-2">
            <div class="flex-shrink-0">
              <img :src="applicants.image" class="w-16 rounded-full h-16" />
            </div>
            <div>
              <div class="mr-2">{{ applicants.fname }} {{ applicants.lname }}</div>
              <div class="grid grid-flow-col mr-1">
                <i-time theme="outline" class="text-gray-500 grid place-content-center" size="14" />
                <span class="mr-1">5خرداد1398</span>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
    <div>
      <a-modal
        :width="1048"
        :body-style="{'height':'75vh'}"
        destroy-on-close
        :footer="null"
        class="font-extrabold text-xl"
        v-model:visible="visible"
        title="متقاضیان استخدام"
        @ok="handleOk"
      >
        <div>
          <RecruitmentApplicantsModal />
        </div>
        <div class="mt-6">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1">
              <template #tab>
                <span class="font-normal text-gray-400">تکمیل مدارک</span>
              </template>
              <CompletionOfDocumentsModal />
            </a-tab-pane>
            <a-tab-pane key="2">
              <template #tab>
                <span class="font-normal text-gray-400">ارزیابی</span>
              </template>
              <AssessmentModal />
            </a-tab-pane>
            <a-tab-pane key="3">
              <template #tab>
                <span class="font-normal text-gray-400">فرم ها</span>
              </template>
              <FormsTabs />
            </a-tab-pane>
            <a-tab-pane key="4">
              <template #tab>
                <span class="font-normal text-gray-400">مصاحبه</span>
              </template>
              <TabInterView />
            </a-tab-pane>
            <a-tab-pane key="5">
              <template #tab>
                <span class="font-normal text-gray-400">اطلاعات متقاضی</span>
              </template>
              <ApplicantsTabs />
            </a-tab-pane>
            <template #renderTabBar="{ DefaultTabBar, ...props }">
              <component :is="DefaultTabBar" v-bind="props" class="text-right bg-white" />
            </template>
          </a-tabs>
        </div>
      </a-modal>
    </div>
  </div>
</template>
<script lang="ts">
  import FormsTabs from "./FormsTabs.vue";
  import CompletionOfDocumentsModal from "./CompletionOfDocumentsModal.vue";
  import { useStore } from "vuex";
  import { defineComponent, ref, computed } from "vue";
  import AssessmentModal from "./AssessmentModal.vue";
  import RecruitmentApplicantsModal from "./RecruitmentApplicantsModal.vue";
  import ApplicantsTabs from "./ApplicantTabs.vue";
  import TabInterView from "./TabInterView.vue";
  export default defineComponent({
    name: "Applicants",
    components: {
      TabInterView,
      ApplicantsTabs,
      AssessmentModal,
      CompletionOfDocumentsModal,
      RecruitmentApplicantsModal,
      FormsTabs
    },
    /**
     * @param
     * @example
     *
     */
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run Tab of joboffer examples
       * @public this is a public method
       * @alpha tabs modal joboffer that اطلاعات متقاضی ،مصاحبه،فرم،ارزیابی،تکمیل مدارک
       * @beta items tab
       * @example تکمیل مدارک،مصاحبه ،متقاضیان،تکمیل مدارک،ارزیابی
       * @return tab drawer
       */
      const onVisible = ref<boolean>(false);
      const store = useStore();
      store.dispatch("getAllApplicant/GetAllApplicant");
      const getAllApplicant = computed(
        () => store.state.getAllApplicant.getAllApplicant
      );
      const loading = ref<boolean>(false);
      const visible = ref<boolean>(false);
      const showModal = () => {
        visible.value = true;
      };
      const handleOk = () => {
        loading.value = true;
      };
      return {
        activeKey: ref("5"),
        loading,
        visible,
        showModal,
        handleOk,
        getAllApplicant,
        onVisible
      };
    }
  });
</script>
<style lang="scss">
</style>
