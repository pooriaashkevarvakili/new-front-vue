/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the درخواست استخدامApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <ApplicationTable />
</template>

<script lang="ts">
  /**
   * all folder applicant
   */
  /**
   * Gets called when the user clicks on the button
   *
   * @param {SyntheticEvent} even the react `SyntheticEvent`
   * @param {String} run table resume of examples
   * @public this is a public method
   * @alpha  درخواست استخدام
   */
  import { defineComponent } from "vue";
  import ApplicationTable from "./applicant/applicationTable.vue";
  export default defineComponent({
    name: "application",
    components: {
      ApplicationTable
    }
  });
</script>

<style>
</style>