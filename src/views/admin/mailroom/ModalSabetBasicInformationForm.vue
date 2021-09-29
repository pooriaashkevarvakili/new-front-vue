/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/09-11:46
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال فرم دبیرخانه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid justify-center -mt-10">
    <div>
      <span class="text-green-400 text-xl font-bold">شماره نامه:</span>
      <span class="text-green-400 text-xl font-bold mr-4">99/08742</span>
    </div>
    <div class="mt-3">
      <span class="text-green-400 font-bold text-xl">تاریخ نامه :</span>
      <span class="text-green-400 text-xl fon-bold mr-4">1399/04/11</span>
    </div>
  </div>
  <div class="grid grid-flow-col mt-8 place-content-start">
    <div>
      <span class="mr-4 text-gray-400">نوع نامه:</span>
    </div>
    <div class="mr-10">
      <span class="text-gray-400 text-lg font-medium">داخلی</span>
    </div>
  </div>
  <div class="grid grid-flow-col mt-8 place-content-start">
    <div>
      <span class="mr-4 text-gray-400">اندیکاتور:</span>
    </div>
    <div class="mr-10">
      <span class="text-gray-400 text-lg font-medium">دبیرخانه مرکزی-وارده-وارده</span>
    </div>
  </div>
  <div class="grid grid-flow-col mt-8 place-content-start">
    <div>
      <span class="mr-4 text-gray-400">شماره نامه:</span>
    </div>
    <div class="mr-7">
      <span class="text-gray-400 text-lg font-medium">652/02</span>
    </div>
  </div>
  <div class="grid grid-flow-col mt-8 place-content-start">
    <div>
      <span class="mr-4 text-gray-400">موضوع نامه:</span>
    </div>
    <div class="mr-6">
      <span class="text-gray-400 text-lg font-medium">اعلام رضایت مندی مشتری</span>
    </div>
  </div>
  <div class="grid grid-flow-col mt-8 place-content-start">
    <div>
      <span class="mr-4 text-gray-400">تاریخ نامه:</span>
    </div>
    <div class="mr-8">
      <span class="text-gray-400 text-lg font-medium">1399/04/11</span>
    </div>
  </div>
  <div class="grid grid-flow-col mt-8 place-content-start">
    <div>
      <span class="mr-4 text-gray-400">پرونده نامه:</span>
    </div>
    <div class="mr-6">
      <span class="text-gray-400 text-lg font-medium">افتخارات وگواهینامه</span>
    </div>
  </div>
  <div class="grid grid-flow-col mt-8 place-content-start">
    <div>
      <span class="mr-4 text-gray-400">نحوه ارسال:</span>
    </div>
    <div class="mr-7">
      <span class="text-gray-400 text-lg font-medium">پست الکترونیک</span>
    </div>
  </div>
  <div class="grid grid-flow-col mt-8 place-content-start">
    <div>
      <span class="mr-4 text-gray-400">محل ارسال:</span>
    </div>
    <div class="mr-6">
      <span class="text-gray-400 text-lg font-medium">مدیرفناوری اطلاعات</span>
    </div>
  </div>
  <div class="grid grid-flow-col mt-8 place-content-start">
    <div>
      <span class="mr-4 text-gray-400">تحویل دهنده:</span>
    </div>
  </div>
  <div class="grid grid-flow-col place-content-end mt-5">
    <a-button class="ml-3 py-5 p-8 text-red-500 grid grid-flow-col place-content-center">چاپ فیش</a-button>
    <a-button type="danger" class="py-5 p-8 grid grid-flow-col place-content-center">
      <router-link to="gishetabs">ویرایش</router-link>
    </a-button>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { useStore } from "vuex";
  import { defineComponent, computed } from "vue";
  export default defineComponent({
    name: "modalsabetBasicInformationForm",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run modal form resume of examples
       * @public this is a public method
       * @alpha all information modal page form
       * @beta types modal form gishe
       * @example نوع نامه اندیکاتور شماره موضوع تاریخ پرونده نامه نحوه ومحل ارسال
       * @returns change set value state modalsabetbasicinformation
       */
      const store = useStore();
      const modalsabetbasicInformation = computed(
        () => store.state.modalsabetbasicinformation.modalsabetbasicinformation
      );
      store.dispatch("modalsabetbasicinformation/GetModalsabetbasicinformation");
      return {
        modalsabetbasicInformation
      };
    }
  });
</script>