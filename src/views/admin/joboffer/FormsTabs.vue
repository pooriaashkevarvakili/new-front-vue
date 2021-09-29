/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال فرم هاApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-3">
    <div class="col-span-2">
      <div class="grid place-items-start">
        <div class="grid grid-flow-col">
          <div class="border border-dashed p-4 py-12 cursor-pointer">
            <a-upload>
              <i-upload size="24" class="grid place-items-center text-gray-400" />
              <div class="text-gray-400 font-medium mt-2">
                پرسشنامه استخدامی
                <div />
              </div>
            </a-upload>
          </div>
          <div
            v-for="formTab in formTabs"
            :key="formTab.id"
            class="border border-dashed mr-5 p-4 py-12 cursor-pointer"
          >
            <a-upload>
              <i-upload size="24" class="grid place-items-center text-gray-400" />
              <div class="text-gray-400 font-medium mt-2">
                {{formTab.name}}
                <div />
              </div>
            </a-upload>
          </div>
        </div>
      </div>
      <div class="grid place-items-start mt-8">
        <div class="grid grid-flow-col">
          <div class="border border-dashed p-4 py-12 cursor-pointer">
            <a-upload>
              <i-upload size="24" class="grid place-content-center text-gray-400" />
              <div class="mt-2 text-gray-500 font-medium grid place-items-center">
                فرم شماره 5
                <div />
                <div class="text-gray-500 font-medium mt-2">
                  ویژگی های شخصیتی
                  <div />
                </div>
              </div>
            </a-upload>
          </div>
          <div class="border border-dashed mr-5 p-3 py-12 grid place-content-center cursor-pointer">
            <a-upload>
              <i-upload size="24" class="grid place-items-center text-gray-400" />
              <div class="text-gray-500 font-medium mt-2 grid place-items-center">
                فرم شماره 6
                <div />
                <div class="mt-2 text-gray-500 font-medium">
                  مدیرمستقیم متقاضی
                  <div />
                </div>
              </div>
            </a-upload>
          </div>
          <div class="border border-dashed grid place-content-center mr-5 p-7 py-10 cursor-pointer">
            <a-upload>
              <i-upload size="24" class="grid text-gray-400 place-items-center" />
              <div class="font-medium text-gray-500 mt-2 grid place-items-center">
                فرم شماره 7
                <div />
                <div class="mt-2 font-medium text-gray-500">
                  مدیرمنابع انسانی
                  <div />
                </div>
              </div>
            </a-upload>
          </div>
        </div>
      </div>
    </div>
    <div class="grid">
      <TimeLineForm />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed } from "vue";
  import TimeLineForm from "./TimeLineForm.vue";
  import { useStore } from "vuex";
  export default defineComponent({
    name: "FormsTabs",
    components: {
      TimeLineForm
    },
    setup() {
      /**
               * Gets called when the user clicks on the button
               *
               * @param {SyntheticEvent} even the react `SyntheticEvent`
               * @param {String} run form tabs img joboffer of examples
               * @public this is a public method
               * @alpha page three modal form  مراحل فرم متقاضی  جاب افر
               * @beta فرم های اپلود رزومه
               * @example پرسشنامه استخدامی فرم شماره 3و4 ویژگی های شخصیتی مدیرمستقیم متقاضی منابع انسانی
               * @returns  return formtabs vue vuex 
                
               */
      const store = useStore();
      store.dispatch("formTabs/GetFormTabs");
      const formTabs = computed(() => store.state.formTabs.formTabs);
      return {
        formTabs,
        headers: {
          authorization: "authorization-text"
        }
      };
    }
  });
</script>
<style scoped lang="scss">
</style>
