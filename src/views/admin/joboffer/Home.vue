/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is Home job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-flow-col place-content-start cursor-pointer">
    <i-arrow-right class="items-center mt-1 text-blue-400" />
    <p class="mr-1 text-blue-400">بازگشت</p>
  </div>
  <div class="grid grid-cols-2">
    <div>
      <span class="text-2xl font-extrabold">برنامه نویس اندروید</span>
    </div>
    <div class="grid justify-end">
      <DropDownImg />
    </div>
  </div>
  <div class="grid grid-flow-col place-content-start">
    <i-city class="text-2xl text-gray-400" />
    <span class="text-gray-400 font-normal">فنی دفترمرکزی</span>
  </div>
  <div class="grid grid-cols-2 mt-3">
    <div class="grid grid-flow-col place-content-start">
      <AForm ref="formRef" :model="formState" layout="vertical" class="grid grid-flow-col">
        <div>
          <a-select
            show-search
            style="width:250px"
            class="mr-1"
            placeholder="جستجو متقاضی"
            option-filter-prop="children"
          >
            <template #suffixIcon>
              <i-search class="text-base" />
            </template>
            <a-select-option
              :key="searchs.id"
              v-for="searchs in search"
              :value="searchs.name"
            >{{searchs.name}}</a-select-option>
          </a-select>
        </div>
        <a-select
          option-filter-prop="children"
          style="width:130px"
          class="mr-2"
          v-model:value="value5"
          value5
        >
          <template #suffixIcon>
            <span></span>
          </template>
          <a-select-option
            v-for="joboffer in joboffers"
            :key="joboffer.id"
            :value="joboffer.id"
          >{{ joboffer.name }}</a-select-option>
        </a-select>
      </AForm>
      <ModalStatusResume />
      <ModalFilter />
    </div>
    <div class="grid place-content-end">
      <DrawerAddPlus />
    </div>
  </div>
  <Tables />
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import Tables from "./Tables.vue";
  import { useStore } from "vuex";
  import { defineComponent, ref, computed, reactive, UnwrapRef } from "vue";
  import DropDownImg from "./DropDownImg.vue";
  import DrawerAddPlus from "./DrawerAddPlus.vue";
  import ModalFilter from "./ModalFilter.vue";
  import ModalStatusResume from "./ModalStatusResume.vue";
  import { JobOffer } from "./FormLoginFormState/JobOffer";
  export default defineComponent({
    name: "Home",
    components: {
      DropDownImg,
      DrawerAddPlus,
      ModalStatusResume,
      ModalFilter,
      Tables
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run Home img joboffer of examples
       * @public this is a public method
       * @alpha صفحه اصلی joboffer سرچ سلکت تاریخ ارسال وضعیت رزومه فیلترهای بیشتر افزودن متقاضی وجداول
       * @beta ایتم ها نوع کارمند وسلکت باکس مودال دراور وجداول
       * @returns console log value state joboffer return vuex value return modal loading return value
       *
       */
      const value = ref("");
      const onSelect = (value: string) => {
        console.log("onSelect", value);
      };
      const formState: UnwrapRef<JobOffer> = reactive({
        id: "",
        name: ""
      });
      const store = useStore();
      store.dispatch("joboffer/GetJobOffers");
      const joboffers = computed(() => store.state.joboffer.joboffer);
      store.dispatch("search/GetSearch");
      const search = computed(() => store.state.search.search);
      const value6 = ref<string>("input content");
      const value5 = ref<string>("تاریخ ارسال");
      const placement = ref<string>("left");
      const visible = ref<boolean>(false);
      const showDrawer = () => {
        visible.value = true;
      };
      const formRef = ref([""]);
      const onClose = () => {
        visible.value = false;
      };
      return {
        placement,
        visible,
        showDrawer,
        value6,
        value,
        value5,
        onSelect,
        search,
        onClose,
        formRef,
        formState,
        placements: ["bottomRight"],
        checked: ref(false),
        joboffers
      };
    }
  });
</script>
<style lang="scss">
</style>
