/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال کل متقاضیان استخدامApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-2">
    <div class="grid place-items-start">
      <div>
        <div class="container">
          <div class="grid grid-flow-col mr-3">
            <div>
              <i-me size="116" class="text-gray-400" />
            </div>
            <div>
              <div v-for="name in user" class="mr-2 mt-2" :key="name.id">
                <span class="text-xl font-bold">{{ name.name }}</span>
              </div>
              <div class="grid grid-flow-col mr-1 mt-3">
                <i-handle-round
                  theme="filled"
                  size="16"
                  class="text-yellow-500 text-2xl place-items-center"
                />
                <span class="mr-1 font-normal text-yellow-600">متقاضی جدید</span>
                <span class="text-gray-400 font-normal mr-1">آپلود شده در خرداد98</span>
              </div>
              <div class="mr-2 mt-4">
                <SendResume />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid place-items-end">
      <div class="grid grid-flow-col text-gray-600 cursor-pointer hover:text-blue-500">
        <i-label class="grid place-content-center" />
        <span
          class="grid grid-flow-col boder border-b-1 border-r-0 border-l-0 border-t-0 border-t-none border-dashed border-gray-400 text-gray-500 font-normal"
        >افزودن به لیست مخاطب</span>
      </div>
      <div class="grid grid-flow-col">
        <ConfirmForInterviewOneCalendar />
        <RejectTheApplicant class="mr-2" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import RejectTheApplicant from "./RejectTheApplicant.vue";
  import SendResume from "./SendResume.vue";
  import { useStore } from "vuex";
  import ConfirmForInterviewOneCalendar from "./ConfirmationForInterviewOneCalendar.vue";
  import { defineComponent, computed } from "vue";
  export default defineComponent({
    name: "RecruitmentApplicantsModal",
    components: {
      RejectTheApplicant,
      SendResume,
      ConfirmForInterviewOneCalendar
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run recruitment applicant modal joboffer of examples
       * @public this is a public method
       * @alpha joboffer صفحه اصلی مودال شامل نام وفامیلی چه متقاضی  وچه موقعی رزومه دریافت شده و چه موقعی رزومه برای مصاحبه تایید یاردشده
       * @beta profile , name drop-down send-resume  button calendar وعلت ردکردن متقاضی
       * @example resume send form input follow ya onfollow
       * @returns change set value dispatch or set state vuex
       */
      const store = useStore();
      store.dispatch("user/GetUser");
      const user = computed(() => store.state.user.user);
      return { user };
    }
  });
</script>
<style scoped>
</style>
