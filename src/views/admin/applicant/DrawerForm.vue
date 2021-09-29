
/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module. - All of the دراوراطلاعات بیشتر Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div v-for="drawerFormOnes  in drawerFormOne" :key="drawerFormOnes.id">
    <div class="grid grid-cols-2 mt-5">
      <div class="grid grid-flow-row">
        <span class="text-gray-400">{{drawerFormOnes.name}}</span>
        <span>{{drawerFormOnes.user}}</span>
      </div>
      <div class="grid grid-flow-row">
        <span class="text-gray-400">{{drawerFormOnes.userOne}}</span>
        <span>{{drawerFormOnes.userTwo}}</span>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 mt-5">
    <div class="grid grid-flow-row">
      <span class="text-gray-400">شرح موقعیت شغلی</span>
      <span>شرکت هاکوپیان یک نیروی حسابدار باشرایط زیردردفترمرکزی تهران استخدام می نماید:</span>
      <span>-حداقل مدرک کارشناسی</span>
      <span>-سابقه کاری مرتبط حداقل 5سال</span>
      <div class="grid grid-flow-col place-content-start">
        <span class="text-red-400">مشاهده بیشتر</span>
        <i-down class="grid items-center text-red-400" />
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 mt-10">
    <div class="grid grid-flow-row">
      <span class="text-gray-400 mt-2">مهارت ها</span>
    </div>
    <div class="grid grid-flow-col place-content-start mt-5">
      <span class="bg-blue-200 py-4 text-blue-400 rounded-xl p-3">نرم افزار افیس</span>
      <span class="bg-blue-200 py-4 text-blue-400 rounded-xl p-4 mr-2">تایپ</span>
      <span class="bg-blue-200 py-4 text-blue-400 rounded-xl p-3 mr-2">همکاران سیستم</span>
    </div>
  </div>
  <div v-for="drawerForms in drawerForm" :key="drawerForms.id">
    <div class="grid grid-cols-2 mt-10">
      <div class="grid grid-flow-row">
        <span class="text-gray-400">{{drawerForms.name}}</span>
        <span>{{drawerForms.user}}</span>
      </div>
      <div class="grid grid-flow-row">
        <span class="text-gray-400">{{drawerForms.userOne}}</span>
        <span>{{drawerForms.userTwo}}</span>
      </div>
    </div>
  </div>
  <div class="grid place-items-end mt-28">
    <a-button
      @click="showModal"
      type="danger"
      class="p-5 py-6 grid grid-flow-col place-content-center"
    >بازگشت</a-button>
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
  export default defineComponent({
    name: "drawerForm",
    setup(props, context) {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run Drawer form applicant of examples
       * @public this is a public method
       * @alpha درخواست استخدام وضعیت درخواست دراور اطلاعات بیشتر
       * @beta time-line tabs button
       * @returns set change value,set change emit event modal
       */
      const store = useStore();
      const visible = ref(false);
      const showModal = () => {
        /**
         * sucess event emit
         */
        context.emit("showModal", (visible.value = false));
      };
      store.dispatch("drawerForm/GetDrawerForm");
      const drawerForm = computed(() => store.state.drawerForm.drawerForm);
      store.dispatch("drawerFormOne/GetDrawerFormOne");
      const drawerFormOne = computed(
        () => store.state.drawerFormOne.drawerFormOne
      );
      return {
        visible,
        showModal,
        drawerFormOne,
        drawerForm
      };
    }
  });
</script>
<style></style>