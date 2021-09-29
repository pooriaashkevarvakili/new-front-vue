/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال اطلاعات انتقال به درخواست استخدام  manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <div class="grid">
      <a-select
        v-model:value="formState.search"
        show-search
        class="mr-1"
        placeholder="جستجو عنوان شغل"
        option-filter-prop="children"
      >
        <template #suffixicon>
          <span></span>
        </template>
        <a-select-option
          v-for="officeResumes in officeResume"
          :key="officeResumes"
          :value="officeResumes.name"
        >{{officeResumes.name}}</a-select-option>
      </a-select>
    </div>
    <div class="grid mt-10">
      <a-checkbox>
        برنامه نویس اندروید
        <div class="mt-2">
          <i-calendar class="text-gray-400" />
          <span class="mr-2 text-gray-400 text-xs">ایجاد شده در 25خرداد 1399 توسط حسین مجیدی نژاد</span>
        </div>
      </a-checkbox>
      <a-checkbox>
        کارشناس حسابداری
        <div class="mt-2">
          <i-calendar class="text-gray-400" />
          <span class="mr-2 text-gray-400 text-xs">ایجاد شده در 25خرداد 1399 توسط حسین مجیدی نژاد</span>
        </div>
      </a-checkbox>
      <a-checkbox>
        مدیربازرگانی
        <div class="mt-2">
          <i-calendar class="text-gray-400" />
          <span class="mr-2 text-gray-400 text-xs">ایجاد شده در 25خرداد 1399 توسط حسین مجیدی نژاد</span>
        </div>
      </a-checkbox>
    </div>
    <div class="mt-24 grid grid-flow-col place-content-end">
      <a-button
        @click="showModal"
        type="danger"
        class="ml-3 py-6 grid grid-flow-col place-content-center"
      >بازگشت</a-button>
      <a-button type="danger" class="py-6 grid grid-flow-col place-content-center">انتقال رزومه ها</a-button>
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { useStore } from "vuex";
  import { OfficeResumeOne } from "./ts/OfficeResumeOne";
  import { defineComponent, UnwrapRef, reactive, computed, ref } from "vue";
  export default defineComponent({
    name: "modalOfficeResumeForm",
    setup(props, context) {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run modal office  form resume of examples
       * @public this is a public method
       * @alpha select-box check-box
       * @returns set value emit value,change set value vue vuex
       */
      const visible = ref<boolean>(false);
      const formState: UnwrapRef<OfficeResumeOne> = reactive({
        search: ""
      });
      /**
       * sucess event emit
       *
       */
      const showModal = () => {
        context.emit("showModal", (visible.value = false));
      };
      const store = useStore();
      store.dispatch("officeResume/GetOfficeResume");
      const officeResume = computed(() => store.state.officeResume.officeResume);
      return {
        formState,
        visible,
        officeResume,
        showModal
      };
    }
  });
</script>
<style></style>