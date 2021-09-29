/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the متقاضیان استخدامApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <Home />
</template>
<script lang="ts">
  /**
   * all folder joboffer
   */
  import { defineComponent } from "vue";
  import Home from "./joboffer/Home.vue";
  export default defineComponent({
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run table resume of examples
     * @public this is a public method
     * @alpha  joboffer
     */
    name: "joboffer",
    components: {
      Home
    }
  });
</script>

<style>
</style>