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
          <div class="grid grid-cols-2">
            <div class="font-medium">وضعیت درخواست</div>
            <div class="grid place-items-end">
              <i-down />
            </div>
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
                    style="width:220px"
                    dropdown-match-select-width
                    :token-separators="[',']"
                    @change="handleChange"
                  >
                    <a-select-option
                      :value="dataRequestTables.id"
                      v-for="dataRequestTables in datarequesttable"
                      :key="dataRequestTables.id"
                    >
                      <a-checkbox
                        :checked="true"
                        v-if="isVisible(dataRequestTables.id)"
                      >{{ dataRequestTables.name }}</a-checkbox>
                      <a-checkbox :checked="false" v-else>{{dataRequestTables.name }}</a-checkbox>
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
    name: "dropdownRequestStatus",
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
       * @param {String} run dropdown request status applicant of examples
       * @public this is a public method
       * @alpha dropdown وضعیت درخواست درخواست استخدام
       * @beta drop-down check-box select
       * @returns change value handle-cancel,change data store
       */
      const store = useStore();
      store.dispatch("datarequesttable/GetDataRequestTable");
      const datarequesttable = computed(
        () => store.state.datarequesttable.datarequesttable
      );
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
        datarequesttable,
        placements: ["bottomRight"]
      };
    }
  });
</script>
<style scoped>
</style>
