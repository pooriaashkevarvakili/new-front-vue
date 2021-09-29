/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دراپ داون ردکردن متقاضیpplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <template v-for="(placement, index) in placements" :key="placement">
    <a-dropdown trigger="click" v-model:visible="visible" :placement="placement">
      <a class="ant-dropdown-link" @click.prevent>
        <div class="mr-2">
          <a-button
            type="danger"
            class="py-5 grid place-content-center text-white font-extrabold"
          >ردکردن متقاضی</a-button>
        </div>
      </a>
      <template #overlay>
        <a-menu class="pb-2 pl-1">
          <a-menu-item class="grid grid-cols-1">
            <div class="grid place-items-start">
              <span class="text-base font-bold">علت رد کردن این متقاضی چیست؟</span>
            </div>
          </a-menu-item>
          <hr class="mt-1" />
          <a-menu-item>
            <div
              class="mt-2"
              v-for="rejectTheApplicants in rejectTheApplicant"
              :key="rejectTheApplicants.id"
            >
              <AForm ref="formRef" :rules="rules" :model="formState" @submit="onSubmit">
                <AFormItem class="mb-1">
                  <a-checkbox>{{rejectTheApplicants.name}}</a-checkbox>
                </AFormItem>
              </AForm>
            </div>
            <a-input placeholder="ردکردن متقاضی رادراینجابیان کنید" class="py-8 mt-2" />
            <div class="grid">
              <div class="grid col-start-1 mt-5">
                <a-button
                  class="py-5 grid place-content-center font-extrabold"
                  type="danger"
                >ردکردن متقاضی</a-button>
              </div>
            </div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </template>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { useStore } from "vuex";
  import { defineComponent, ref, computed, UnwrapRef, reactive } from "vue";
  interface LoginFromState {
    id: string;
    name: string;
  }
  export default defineComponent({
    name: "RejectTheApplicant",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run Reject the applicant joboffer of examples
       * @public this is a public method
       * @alpha button ردکردن متقاضی در مودال فرم باچک باکس و دکمه ردکردن متقاضی joboffer
       * @beta button ردکردن متقاضی checkbox text area button ردکردن متقاضی
       * @example checkbox نداشتن سابقه کاری حقوق درخواستی بالا و تکس ایرا علت رد کردن متقاضی بیان کنید و دکمه رد کردن متقاضی
       * @returns change set value dispatch
       */
      const visible = ref<boolean>(false);
      const store = useStore();
      store.dispatch("rejectTheApplicant/GetRejectTheApplicant");
      const rejectTheApplicant = computed(
        () => store.state.rejectTheApplicant.rejectTheApplicant
      );
      const formState: UnwrapRef<LoginFromState> = reactive({
        id: "",
        name: ""
      });
      return {
        visible,
        value: ref([]),
        placements: ["topRight"],
        rejectTheApplicant,
        formState
      };
    }
  });
</script>
<style scoped>
</style>
