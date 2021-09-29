/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the ارشیورزومه تاریخ ارسال Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <template v-for="(placement, index) in placements" :key="placement">
      <a-dropdown v-model:visible="visible" trigger="click" :placement="placement">
        <div>
          <a @click.prevent>
            <a-button class="text-black grid grid-flow-col px-4 p-2 py-5 place-content-center">
              تاریخ ارسال
              <i-down class="grid mt-1 mr-2" />
            </a-button>
          </a>
        </div>

        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a-range-picker
                :show-time="{format:'HH:nm'}"
                format="yyyy-MM-DD HH:mm"
                :placeholder="['start Time','End Time']"
                @onchange="onChange"
                @ok="onOk"
              />
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
  import { Moment } from "moment";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "selectDropdown",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run resume select dropdown resume of examples
       * @public this is a public method
       * @alpha تاریخ ارسال  arshive resume
       * @return change value set
       */
      const visible = ref<boolean>(false);
      const placement = ref<string>("left");
      const onChange = (value: Moment[], dateString: string[]) => {
        console.log("select time", value);
        console.log("formatedSelectedTime", dateString);
      };
      const onOk = (value: Moment[]) => {
        console.log("onOk:", value);
      };
      return {
        onChange,
        onOk,
        placement,
        visible,
        placements: ["bottomRight"]
      };
    }
  });
</script>
<style></style>