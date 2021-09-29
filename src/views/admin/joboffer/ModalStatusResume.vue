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
        <a-button class="text-black px-4 p-2 py-5 grid place-content-center">
          <div>
            <div class="font-medium">وضعیت رزومه</div>
          </div>
        </a-button>
        <template #overlay>
          <a-menu class="w-full max-w-xs">
            <a-menu-item class="pb-2">
              <template v-for="(placement, index) in placements" :key="placement">
                <div class="w-full">
                  <a-select
                    v-model:value="value"
                    mode="multiple"
                    style="width:170px"
                    dropdown-match-select-width
                    :token-separators="[',']"
                    @change="handleChange"
                  >
                    <a-select-option
                      :value="resume.id"
                      v-for="resume in statusResume"
                      :key="resume.id"
                    >
                      <a-checkbox :checked="true" v-if="isVisible(resume.id)">{{ resume.name }}</a-checkbox>
                      <a-checkbox :checked="false" v-else>{{ resume.name }}</a-checkbox>
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
    name: "ModalStatusResume",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run modal status joboffer of examples
       * @public this is a public method
       * @alpha dropdown وضعیت رزومه page home joboffer
       * @beta status resume checkbox two button اعمال پاک کردن
       * @example  در نحوه مصاحبه دروضعیت رزومه
       *در انتظار مصاحبه اول ردشده ومثال های دیگری که در مصاحبه دارد
       * @returns value change set
       */
      const store = useStore();
      store.dispatch("statusResume/GetStatusResume");
      const statusResume = computed(() => store.state.statusResume.statusResume);
      const value = ref([]);
      const placement = ref<string>("left");
      const loading = ref<boolean>(false);
      const visible = ref<boolean>(false);
      const dropdownMatchSelectWidth = ref<boolean>(false);
      const isVisible = elemId => {
        return value.value.includes(elemId);
      };
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
        handleCancle,
        statusResume,
        placements: ["bottomRight"]
      };
    }
  });
</script>
<style scoped>
</style>
