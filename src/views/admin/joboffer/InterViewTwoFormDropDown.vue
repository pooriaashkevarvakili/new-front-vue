/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال فرم مصاحبه دراپداونApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <template v-for="(placement, index) in placements" :key="placement">
    <a-dropdown v-model:visible="visibleOne" trigger="click" :placement="placement">
      <a class="ant-dropdown-link" @click.prevent>
        <img src="@/assets/images/img/eclipse1.png" class="w-10 h-10 mr-2" />
      </a>
      <template #overlay>
        <a-menu class="py-2">
          <a-menu-item>
            <a-form :model="formState">
              <a-input-search placeholder="جستجو" v-model:value="formState.search"></a-input-search>
            </a-form>
            <hr class="mt-3 bg-black" />
            <div
              v-for="img in images"
              :key="img.id"
              class="grid grid-flow-col place-content-start mt-3"
            >
              <img :src="img.img" class="w-10 h-10" />
              <div class="grid font-normal mr-2 mt-1">{{ img.name }}</div>
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
  import { useStore } from "vuex";
  import { InterViewTwoFormDropdown } from "./FormLoginFormState/InterViewTwoFormDropdown";
  import { defineComponent, ref, UnwrapRef, reactive, computed } from "vue";
  export default defineComponent({
    name: "InterViewTwoFormDropdown",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run interview form dropdown joboffer of examples
       * @public this is a public method
       * @alpha  در دراپ داون joboffer مراحل فرم مصاحبه
       * @beta dropdown profile name search
       * @returns change set value state vuex
       */
      const store = useStore();
      store.dispatch("images/GetImages");
      const images = computed(() => store.state.images.images);
      const formState: UnwrapRef<InterViewTwoFormDropdown> = reactive({
        search: ""
      });
      const visibleOne = ref<boolean>(false);
      return { visibleOne, formState, placements: ["bottomCenter"], images };
    }
  });
</script>
<style scoped>
</style>
