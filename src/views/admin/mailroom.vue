/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دبیرخانه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <Mailroom />
  </div>
</template>

<script lang="ts">
  /**
   * all folder mailroom
   */
  import { defineComponent } from "vue";
  import Mailroom from "./mailroom/mailroom.vue";
  export default defineComponent({
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run table resume of examples
     * @public this is a public method
     * @alpha  دبیرخانه
     */
    name: "mainRoom",
    components: {
      Mailroom
    }
  });
</script>

<style>
</style>