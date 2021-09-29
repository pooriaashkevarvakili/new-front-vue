/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module. - All of the دراپ داون جدول Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <template v-for="(placement,index) in placements" :key="placement">
    <a-dropdown v-model:visible="visible" :placement="placement" trigger="click">
      <a @click.prevent>
        <i-more />
      </a>
      <template #overlay>
        <a-menu class="py-2 h-48">
          <a-menu-item>
            <div class="grid grid-flow-col place-content-start">
              <i-more class="text-gray-400 grid items-center" />
              <div class="-mr-1">
                <DropDownMore />
              </div>
            </div>
          </a-menu-item>
          <a-menu-item>
            <div class="grid grid-flow-col place-content-start">
              <i-reduce-one class="text-gray-400 grid" />
              <span class="text-gray-400 mr-1">غیرفعال کردن</span>
            </div>
          </a-menu-item>
          <a-menu-item>
            <div class="grid grid-flow-col place-content-start">
              <i-edit clase="text-gray-400" />
              <span class="mr-2">ویرایش</span>
            </div>
          </a-menu-item>
          <a-menu-item>
            <div class="grid grid-flow-col place-content-start">
              <i-close-one class="text-gray-400 text-xl" />
              <span class="mr-4">حذف</span>
            </div>
          </a-menu-item>
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
  import DropDownMore from "./DropDownMore.vue";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "DropDownInfomation",
    components: { DropDownMore },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run dropdown information application applicant of examples
       * @public this is a public method
       * @alpha  درخواست استخدام دراور در جدول
       * @beta drop-down table
       */
      const visible = ref(false);
      return {
        visible,
        placements: ["bottomRight"]
      };
    }
  });
</script>
<style></style>