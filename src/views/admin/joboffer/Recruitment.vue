/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the جدول استخدامApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <div @click="showModal" class="grid cursor-pointer rounded-lg gap-3 mt-6">
      <a-card
        class="shadow-xl mx-6 mt-2"
        v-for="recruitments in recruitment"
        :key="recruitments.id"
      >
        <div class="grid">
          <div class="flex space-y-2">
            <div class="flex-shrink-0">
              <img :src="recruitments.image" class="w-16 rounded-full h-16" />
            </div>
            <div>
              <div class="mr-2">{{ recruitments.fname }} {{ recruitments.lname }}</div>
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
      title="استخدام"
      @ok="handleOk"
      :body-style="{'height':'74vh'}"
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
            <template #tab>مصاحبه</template>
            <TabInterView />
          </a-tab-pane>
          <a-tab-pane key="5">
            <template #tab>متقاضیان</template>
            <ApplicantTabs />
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
  import { useStore } from "vuex";
  import { defineComponent, ref, computed } from "vue";
  import AddApplicantForm from "./AddApplicantForm.vue";
  import CompletionOfDocumentsModal from "./CompletionOfDocumentsModal.vue";
  import RecruitmentApplicantsModal from "./RecruitmentApplicantsModal.vue";
  import AssessmentModal from "./AssessmentModal.vue";
  import FormsTabs from "./FormsTabs.vue";
  import TabInterView from "./TabInterView.vue";
  import ApplicantTabs from "./ApplicantTabs.vue";
  export default defineComponent({
    name: "Recruitment",
    components: {
      RecruitmentApplicantsModal,
      AddApplicantForm,
      CompletionOfDocumentsModal,
      AssessmentModal,
      FormsTabs,
      TabInterView,
      ApplicantTabs
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run Recruitment joboffer of examples
       * @public this is a public method
       * @alpha ودیتاهادول استخدام با تمامی تب هاjoboffer
       * @beta item recruitment modal tabs timeline
       * @example tabs متقاضیان  و مصاحبه فرم وارزیابی و تکمیل مدارک
       * @returns  change set value visible ,change set value loading
       */
      const store = useStore();
      store.dispatch("recruitment/Recruitment");
      const recruitment = computed(() => store.state.recruitment.recruitment);
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
      const handleCancel = () => {
        visible.value = false;
      };
      /**
       * sucess event emit
       *
       */
      const handleOk = () => {
        loading.value = true;
      };
      return {
        loading,
        showModal,
        visible,
        handleCancel,
        handleOk,
        activeKey: ref("5"),
        recruitment
      };
    }
  });
</script>
<style lang="scss">
</style>

