/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the افزودن متقاضی افزودن گروهی Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="ml-4">
    <a-button
      type="danger"
      class="w-full py-6 grid place-content-center grid-flow-col"
      @click="showDrawer"
    >
      <template #icon>
        <i-people-plus class="text-white text-right text-xl" />
      </template>
      <span class="text-white font-bold mr-1">افزودن متقاضی</span>
    </a-button>
    <a-drawer
      class="drawer-custom"
      :placement="placement"
      :width="675"
      :visible="visible"
      @close="onClose"
      :closable="true"
    >
      <template #title>
        <div class="text-white text-2xl">افزودن متقاضی</div>
      </template>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" class="grid">
          <template #tab>
            <div class="p-1 font-primary">افزودن گروهی</div>
          </template>
          <DrawerAddUpload @remove="onClose" />
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #tab>
            <div class="p-1">افزودن فردی</div>
          </template>
          <AddIndividual @closePage="onClose" />
        </a-tab-pane>
        <template #renderTabBar="{ DefaultTabBar, ...props }">
          <component :is="DefaultTabBar" v-bind="props" class="text-right bg-white" />
        </template>
      </a-tabs>
    </a-drawer>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import DrawerAddUpload from "./DrawerAddUpload.vue";
  import AddIndividual from "./AddIndividual.vue";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "DrawerAddPlus",
    components: {
      AddIndividual,
      DrawerAddUpload
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run form joboffer drawer applicant of examples
       * @public this is a public method
       * @alpha مراحل دراور اطلاعات متقاضی به صورت تب وارjoboffer
       * @beta drawer افزودن متقاضی
       * @example افزودن فردی وافزودن گروهی
       * @returns visible return value
       */
      const placement = ref<string>("left");
      const visible = ref<boolean>(false);
      /**
                                           *
                                           * @button the string button
                                         
                                           */
      const showDrawer = () => {
        visible.value = true;
      };
      /**
       * sucess event emit
       *
       */
      const onClose = () => {
        visible.value = false;
      };
      return {
        visible,
        showDrawer,
        onClose,
        placement,
        activeKey: ref("2")
      };
    }
  });
</script>
<style  lang="scss">
</style>
