/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:26
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the بدنه نامه دبیرخانه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="h-screen">
    <div class="mt-20">
      <div class="grid">
        <div class="grid place-items-center">
          <i-info class="text-yellow-400 text-2xl" />
        </div>
        <div class="grid justify-center mt-5 items-center">
          <span class="text-xl text-medium">نامه وارده فاقد بدنه می باشد</span>
        </div>
      </div>
      <div
        class="grid mt-3 justify-center text-base text-gray-400"
      >شما می توانید بدنه نامه را آپلود ویا اسکن کنید</div>
      <div class="grid justify-center">
        <a-upload>
          <a-button
            type="danger"
            class="mt-10 py-5 grid grid-flow-col place-content-center"
          >آپلود بدنه نامه</a-button>
        </a-upload>

        <a-button
          type="link"
          class="mt-3 text-red-400 py-5 grid grid-flow-col place-content-center"
        >اسکن بدنه نامه</a-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { defineComponent } from "vue";
  export default defineComponent({
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run basic information resume of examples
     * @public this is a public method
     * @alpha two page form بدنه نامه دبیرخانه
     * @beta بدنه نامه  بدنه نامه اپلود یا اسکن کنید
     */
    name: "bodyLetter"
  });
</script>
<style scoped></style>