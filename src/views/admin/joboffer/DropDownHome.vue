/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/06/21-10:34
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the dropdown home Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="flex ml-2">
    <template v-for="(placement, index) in placements" :key="placement">
      <a-dropdown :placement="placement" v-model:visible="visible" trigger="click">
        <a class="ant-dropdown-link" @click.prevent>
          <img
            src="@/assets/images/img/eclipse1.png"
            class="w-12 h-12 ml-2 rounded-full overflow-hidden"
          />
        </a>
        <template #overlay>
          <a-menu class="py-2 w-11/12">
            <a-menu-item>
              <div>
                <a-input class="bg-gray-100" placeholder="جستجو">
                  <template #suffix>
                    <i-search />
                  </template>
                </a-input>
              </div>
            </a-menu-item>
            <a-menu-item>
              <div
                v-for="img in images"
                :key="img.id"
                class="grid grid-flow-col place-content-start mt-3"
              >
                <img :src="img.img" class="w-10 h-10" />
                <div class="grid mr-2 mt-1">{{ img.name }}</div>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
    <img src="@/assets/images/img/image8.jpg" class="w-12 h-12 rounded-full overflow-hidden" alt />
    <img src="@/assets/images/img/image3.jpg" class="w-12 h-12 rounded-full overflow-hidden -mr-3" />
    <img src="@/assets/images/img/image12.jpg" class="w-12 h-12 rounded-full overflow-hidden -mr-3" />
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
    name: "DropDownHome",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run form dropdown img joboffer of examples
       * @public this is a public method
       * @alpha drop down شامل عکس وسرچ ها
       * @beta drop down شامل پروفایل و فامیلی
       * @returns return image vue vuex or searchs return vue vuex
       */
      const store = useStore();
      store.dispatch("images/GetImages");
      const images = computed(() => store.state.images.images);
      store.dispatch("searchs/GetSearchs");
      const searchs = computed(() => store.state.searchs.searchs);
      return {
        images,
        searchs,
        placements: ["bottomCenter"]
      };
    }
  });
</script>

<style>
</style>