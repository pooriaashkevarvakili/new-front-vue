/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the dropdown home image Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid col-start-1">
    <div class="grid grid-flow-col ml-4 place-content-start">
      <DropDownHome />
      <a-switch @change="toggleColor" :style="{ backgroundColor: bgColor }" class="px-1 max-w-xs">
        <template #checkedChildren>
          <div class="grid grid-flow-col">
            <i-check
              class="grid place-items-center ml-1 w-5 h-5 text-green-400 bg-white rounded-full"
              theme="multi-color"
              size="15"
            />
            <span class="font-bold text-base">فعال</span>
          </div>
        </template>
        <template #unCheckedChildren>
          <div class="grid grid-flow-col">
            <i-close
              class="bg-white grid grid-flow-col ml-1 place-items-center w-5 h-5 text-red-400 rounded-full"
              theme="multi-color"
              size="15"
            />
            <span class="font-bold text-base">غیرفعال</span>
          </div>
        </template>
      </a-switch>
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { DropDownImg } from "./FormLoginFormState/DropdownImg";
  import DropDownHome from "./DropDownHome.vue";
  import { defineComponent, reactive, toRaw, UnwrapRef, toRefs, ref } from "vue";
  export default defineComponent({
    name: "DropDownImg",
    components: {
      DropDownHome
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run form dropdown img joboffer of examples
       * @public this is a public method
       * @alpha switcher فعال وغیرفعال مراحل joboffer
       * @example blue or red
       * @returns change color return color red or green state return checked1
       */
      const bgColor = ref<string>("red");
      const toggleColor = () => {
        if (bgColor.value == "#3db783") {
          bgColor.value = "#ff6565";
        } else {
          bgColor.value = "#3db783";
        }
      };
      const visible = ref<boolean>(false);
      const changeColor = ref<boolean>(false);
      const state = reactive({
        checked1: true
      });
      const formState: UnwrapRef<DropDownImg> = reactive({
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        search: ""
      });
      const onSubmit = () => {
        console.log("submit!", toRaw(formState));
      };
      return {
        formState,
        onSubmit,
        changeColor,
        toggleColor,
        visible,
        bgColor,
        ...toRefs(state)
      };
    }
  });
</script>
<style lang="scss">
</style>
