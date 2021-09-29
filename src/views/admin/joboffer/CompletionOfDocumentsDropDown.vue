/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/10-13:11
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دراپ داون صدور معرفی نامه در تکمیل مدارکApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */

/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دراپ داون ارسال رزومهApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <template v-for="(placement, index) in placements" :key="placement">
    <a-dropdown trigger="click" v-model:visible="visible" :placement="placement">
      <a @click.prevent>
        <div class="grid grid-flow-col">
          <i-plus size="18" class="text-base text-red-400" />
          <span class="text-red-400 font-bold mr-1">صدورمعرفی نامه</span>
        </div>
      </a>
      <template #overlay>
        <a-menu class="pb-2 h-72 ml-28">
          <a-menu-item class="grid grid-cols-1">
            <div class="grid place-items-start">
              <span class="font-bold">معرفی نامه مورد نظر را انتخاب کنید</span>
            </div>
          </a-menu-item>
          <a-menu-item>
            <hr/>
          </a-menu-item>
        <AForm
             ref="formRef"
           :model="formState"
          >
            <AFormItem
            class="mb-1  "
            v-for="introductionLetters in introductionLetter"
            :key="introductionLetters.id"
            >
              <a-checkbox class="mr-2" >{{introductionLetters.name}}</a-checkbox>
            </AformItem>
          </AForm>
          <a-button
            type="danger"
            class="w-full grid mt-4 grid-flow-col  place-content-center "
          >
              <i-printer
              theme="outline"
              size="22"
              class="text-white"
            />
            <span class="mr-1 font-extrabold mt-1 text-white">
              چاپ معرفی نامه
            </span>
          </a-button>
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
import {useStore} from "vuex"
import { defineComponent,computed } from "vue";
export default defineComponent({
  name: "CompletionOfDocumentsDropDown",
  setup() {
        /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run dropdown joboffer of examples
     * @public this is a public method
     * @alpha صدور معرفی نامه ومراحلش five page modal تکمیل مدارک
     * @beta ایتم های صدور معرفی نامه  وگزینه هاش چاپ معرفی نامه
     * @returns return indroductionletter vuex vue
     */
     const store=useStore();
            store.dispatch('introductionLetter/GetIntroLetter')
    const introductionLetter = computed(() => store.state.introductionLetter.introductionLetter)
    return {
      placements: ["bottomRight"],
      introductionLetter
    };
  }
});
</script>
<style scoped>
</style>
