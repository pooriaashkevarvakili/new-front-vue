/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:27
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال فرم افزودن اطلاعات متقاضی مهارت Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div>
    <div class="grid">
      <span class="font-normal">مهارت های پیشنهادی:</span>
      <div class="grid grid-flow-col">
        <div class="mt-2 p-6 py-2 bg-gray-300 text-gray-500 grid place-items-center rounded-xl">
          <span class="font-medium grid place-items-center">icdl</span>
        </div>
        <div
          v-for="formSkill in formSkills"
          :key="formSkill.id"
          class="p-4 mt-2 bg-gray-300 text-gray-500 rounded-lg py-5 mr-2 grid grid-flow-col place-content-center"
        >
          <span class="grid text-sm font-medium place-items-center">{{formSkill.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { useStore } from "vuex";
  import { defineComponent, computed } from "vue";
  export default defineComponent({
    name: "addApplicantFormSkills",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run skills joboffer of examples
       * @public this is a public method
       * @alpha skills form modal applicant
       * @beta item skills that from api has
       * @example icdl  msproject ,...
       * @returns return value vuex store
       */
      const store = useStore();
      store.dispatch("addApplicantFormSkills/GetAddApplicantFormSkills");
      const formSkills = computed(
        () => store.state.addApplicantFormSkills.addApplicantFormSkills
      );
      return {
        formSkills
      };
    }
  });
</script>
<style scoped></style>
