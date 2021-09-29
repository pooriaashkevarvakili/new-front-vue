/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the ارشیورزومه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <ResumeArshive />
</template>

<script lang="ts">
  /**
   * all folder resume
   */
  /**
   * Gets called when the user clicks on the button
   *
   * @param {SyntheticEvent} even the react `SyntheticEvent`
   * @param {String} run table resume of examples
   * @public this is a public method
   * @alpha   ارشیورزومه
   */
  import { defineComponent } from "vue";
  import ResumeArshive from "./resume/resumeArshive.vue";
  export default defineComponent({
    name: "resume",
    components: { ResumeArshive }
  });
</script>

<style>
</style>