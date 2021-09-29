<template>
  <div>
    <template v-for="(placement, index) in placements" :key="placement">
      <a-dropdown @click.prevent v-model:visible="visible" :placement="placement">
        <i-more />
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <div class="grid grid-flow-col place-content-start">
                <i-file-staff class="text-gray-400 text-xl" />
                <span class="mr-2">مشاهده رزومه</span>
              </div>
            </a-menu-item>
            <a-menu-item>
              <div class="grid grid-flow-col place-content-start">
                <i-file-withdrawal class="text-gray-400" />
                <div class="grid grid-flow-col place-content-start -mr-2">
                  <ModalOfficeResume />
                </div>
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
                <i-close-one class="text-gray-400" />
                <span class="mr-2">حذف</span>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { defineComponent, ref } from "vue";
  import ModalOfficeResume from "./modalOfficeResume.vue";
  export default defineComponent({
    name: "resumeTableDropdown",
    components: {
      ModalOfficeResume
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run table resume of examples
       * @public this is a public method
       * @alpha options dropdowns table arshive resume
       */
      const visible = ref<boolean>(false);
      return {
        visible,
        placements: ["bottomLeft"]
      };
    }
  });
</script>
<style></style>