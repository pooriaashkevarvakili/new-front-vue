/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/10-13:11
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دراپ داون عدم تایید درتمیل مدارکApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <template v-for="(placement, index) in placements" :key="placement">
    <a-dropdown :placement="placement" v-model:visible="visibleOne">
      <a @click.prevent>
        <div class="grid grid-flow-col mt-6">
          <i-info class="flex items-center text-gray-400" />
          <span class="font-extrabold text-gray-400 text-xs mr-1">عدم تایید</span>
        </div>
      </a>
      <template #overlay>
        <a-menu class="py-2 -mt-4">
          <a-menu-item class="grid grid-cols-1">
            <div class="grid place-items-end col-start-3">
              <span class="font-primary font-bold">علت تایید عدم این مدرک چیست؟</span>
            </div>
          </a-menu-item>
          <a-menu-item>
            <hr />
          </a-menu-item>
          <a-menu-item>
            <AForm ref="formRef" :rules="rules" :model="formState" @submit="onSubmit">
              <AFormItem v-for=" disappRovals in disappRoval" :key="disappRovals.id">
                <a-checkbox>{{disappRovals.name }}</a-checkbox>
              </AFormItem>
            </AForm>
            <a-button type="danger" class="py-5 grid place-content-center w-full">
              <span class="font-primary font-extrabold text-white text-sm">ثبت</span>
            </a-button>
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

  import { defineComponent, ref, computed } from "vue";
  export default defineComponent({
    name: "CompletionOfDocumentsDropDownOne",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run modal joboffer of examples
       * @public this is a public method
       * @alpha عدم تایید وچه مراحلش را طی میکندjoboffer
       * @beta ایتم های عدم تاییدبا تمام گزینه هاش وثبت
       * @returns return disapproval value vuex
       */
      const formRef = ref<HTMLFormElement | null>();
      const store = useStore();
      store.dispatch("disappRoval/GetDisappRoval");
      const disappRoval = computed(() => store.state.disappRoval.disappRoval);
      const visibleOne = ref<boolean>(false);
      return {
        visibleOne,
        placements: ["bottomRight"],
        disappRoval,
        formRef
      };
    }
  });
</script>
<style scoped></style>
