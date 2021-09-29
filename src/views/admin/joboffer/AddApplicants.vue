/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال  اطلاعات متقاضی Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div>
    <a-modal
      width="1048px"
      v-model:visible="visible"
      title="اطلاعات متقاضی"
      @ok="handleOk"
      :footer="null"
    >
      <div>
        <RecruitmentApplicantsModal />
      </div>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane class key="1" tab="اطلاعات متقاضی">
          <AddApplicantForm />
        </a-tab-pane>
      </a-tabs>
    </a-modal>
  </div>
</template>
<script lang="ts">
  import RecruitmentApplicantsModal from "./RecruitmentApplicantsModal.vue";
  import AddApplicantForm from "./AddApplicantForm.vue";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "AddApplicants",
    components: {
      RecruitmentApplicantsModal,
      AddApplicantForm
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run drawer joboffer of examples
       * @public this is a public method
       * @alpha مراحل اطلاعات متقاضی
       * @beta item اطلاعات متقاضی که مدال
       * @returns return value modal loading modal
       */
      const loading = ref<boolean>(false);
      const visible = ref<boolean>(false);
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
        handleCancel,
        activeKey: ref("1")
      };
    }
  });
</script>
<style lang="scss">
</style>
