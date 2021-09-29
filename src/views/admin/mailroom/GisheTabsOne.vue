/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the تب های گیشه اینپوت دیزابلApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="mr-8 mt-6">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1">
        <template #tab>
          <span
            class="text-base hover:text-xl font-normal text-gray-400 hover:text-red-400"
          >ابطال نامه</span>
        </template>
        <div class="h-screen"></div>
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <span
            class="text-base hover:text-xl font-normal text-gray-400 hover:text-red-400"
          >بایگانی نامه</span>
        </template>
        <div class="h-screen"></div>
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #tab>
          <span
            class="text-base hover:text-xl font-normal text-gray-400 hover:text-red-400"
          >یادداشت/جوابیه</span>
        </template>
        <div class="h-screen"></div>
      </a-tab-pane>
      <a-tab-pane key="4">
        <template #tab>
          <span class="text-base hover:text-xl font-normal text-gray-400 hover:text-red-400">ارجاعات</span>
        </template>
        <div class="h-screen"></div>
      </a-tab-pane>
      <a-tab-pane key="5">
        <template #tab>
          <span
            class="text-base hover:text-xl font-normal text-gray-400 hover:text-red-400"
          >نامه های مرتبط</span>
        </template>
        <div class="h-screen"></div>
      </a-tab-pane>
      <a-tab-pane key="6">
        <template #tab>
          <span
            class="text-base hover:text-xl font-normal text-gray-400 hover:text-red-400"
          >پیوست نامه</span>
        </template>
        <div class="h-screen"></div>
      </a-tab-pane>
      <a-tab-pane key="7">
        <template #tab>
          <span
            class="text-base hover:text-xl font-normal text-gray-400 hover:text-red-400"
          >بدنه نامه</span>
        </template>
        <BodyLetter />
      </a-tab-pane>
      <a-tab-pane key="8">
        <template #tab>
          <span
            class="text-base hover:text-xl font-normal text-gray-400 hover:text-red-400"
          >اطلاعات اولیه</span>
        </template>
        <GisheTabsFormTwo />
      </a-tab-pane>
      <template #renderTabBar="{ DefaultTabBar, ...props }">
        <component :is="DefaultTabBar" v-bind="props" class="text-right bg-white" />
      </template>
    </a-tabs>
  </div>
</template>

<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { defineComponent, ref } from "vue";
  import GisheTabsFormTwo from "./GisheTabsFormTwo.vue";
  import BodyLetter from "./BodyLetter.vue";
  export default defineComponent({
    name: "gisheTabsOne",
    components: {
      GisheTabsFormTwo,
      BodyLetter
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run gishe tabs resume of examples
       * @public this is a public method
       * @alpha three page form tab disabled
       * @beta tabs page three
       * @example اطلاعات اولیه بدنه نامه پیوست نامه های مرتبط  ارجاعات بایگانی نامه  ابطال نامه
       */
      return {
        activeKey: ref("8")
      };
    }
  });
</script>
<style scoped></style>