/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-15:55
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module. - All of the اطلاعات بیشتر Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <a-button type="link" @click="showDrawer" class="text-black -mr-2">
    <span class="grid items-center">اطلاعات بیشتر</span>
  </a-button>
  <a-drawer
    title="اطلاعات بیشتر"
    :width="620"
    :placement="placement"
    :visible="visible"
    :body-style="{'height':'68vh'}"
    @close="onClose"
  >
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="3">
        <template #tab>
          <span class="font-extrabold">تکمیل درخواست</span>
        </template>
        <CompleteTheApplication @onClose="onClose" />
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <span class="font-extrabold">جزییات</span>
        </template>
        <Details @showModal="onClose" />
      </a-tab-pane>
      <a-tab-pane key="1">
        <template #tab>
          <span class="font-extrabold">وضعیت درخواست</span>
        </template>
        <DrawerForm @showModal="onClose" />
      </a-tab-pane>
      <template #renderTabBar="{ DefaultTabBar, ...props }">
        <component :is="DefaultTabBar" v-bind="props" class="text-right bg-white" />
      </template>
    </a-tabs>
  </a-drawer>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import DrawerForm from "./DrawerForm.vue";
  import Details from "./Details.vue";
  import CompleteTheApplication from "./CompleteTheApplication.vue";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "dropdownMore",
    components: {
      DrawerForm,
      Details,
      CompleteTheApplication
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run dropdown applicant of examples
       * @public this is a public method
       * @alpha دراور اطلاعات بیشتر درخواست استخدام
       * @beta  tab drawer
       * @returns change value visible tyue show drawer ,onclose visible off drawer
       */
      const visible = ref<boolean>(false);
      const showDrawer = () => {
        visible.value = true;
      };
      const onClose = () => {
        visible.value = false;
      };
      const placement = ref<string>("left");
      return {
        visible,
        showDrawer,
        onClose,
        placement
      };
    }
  });
</script>
<style>
</style>