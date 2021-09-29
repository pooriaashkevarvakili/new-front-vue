/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module. - All of the وضعیت رزومه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="mr-2">
    <template v-for="(placement, index) in placements" :key="placement">
      <a-dropdown v-model:visible="visible" trigger="click" :placement="placement">
        <a-button class="text-black grid-flow-col px-4 p-2 py-5 grid place-content-center">
          <div class="font-medium">عنوان شغل</div>
          <template></template>

          <i-down class="grid mt-1 mr-2" />
        </a-button>
        <template #overlay>
          <a-menu class="w-full">
            <a-menu-item class="pb-2">
              <template v-for="(placement, index) in placements" :key="placement">
                <div class="w-full">
                  <a-select
                    v-model:value="value"
                    mode="multiple"
                    style="width:185px"
                    dropdown-match-select-width
                    :token-separators="[',']"
                    @change="handleChange"
                  >
                    <a-select-option
                      :value="titlejob.id"
                      v-for="titlejob in titlejobs"
                      :key="titlejob.id"
                    >
                      <a-checkbox :checked="true" v-if="isVisible(titlejob.id)">{{ titlejob.name }}</a-checkbox>
                      <a-checkbox :checked="false" v-else>{{titlejob.name }}</a-checkbox>
                    </a-select-option>
                  </a-select>
                </div>
              </template>
            </a-menu-item>
            <a-menu-item>
              <div class="grid grid-flow-col">
                <a-button
                  type="danger"
                  class="ml-2 max-w-sm grid place-content-center text-white py-4"
                  key="back"
                >اعمال</a-button>
                <a-button
                  class="grid max-w-sm place-content-center py-2 text-white"
                  key="submit"
                  type="primary"
                  :loading="loading"
                  @click="handleCancle"
                >پاک کردن</a-button>
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
  import { defineComponent, ref, computed } from "vue";
  import { useStore } from "vuex";
  export default defineComponent({
    name: "titleJobs",
    props: {
      visible: {
        type: Boolean,
        required: false
      }
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run title jobs resume of examples
       * @public this is a public method
       * @alpha عنوان شغل  arshive resume
       * @returns change value handle cancel
       */
      const store = useStore();
      store.dispatch("titlejobs/GetTitleJobs");
      const titlejobs = computed(() => store.state.titlejobs.titlejobs);
      const value = ref([]);
      const placement = ref<string>("left");
      const loading = ref<boolean>(false);
      const visible = ref<boolean>(false);
      const dropdownMatchSelectWidth = ref<boolean>(false);
      const isVisible = elemId => {
        return value.value.includes(elemId);
      };
      const handleChange = (value: string) => {};
      const handleCancle = () => {
        value.value = [];
      };
      return {
        value,
        loading,
        placement,
        isVisible,
        dropdownMatchSelectWidth,
        visible,
        handleChange,
        handleCancle,
        titlejobs,
        placements: ["bottomRight"]
      };
    }
  });
</script>
<style scoped>
</style>
