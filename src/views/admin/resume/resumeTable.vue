/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the جدول ارشیورزومه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div>
    <a-table :columns="columns" :data-source="data" :row-selection="rowSelection">
      <template #operation>
        <ResumeTableDropdown />
      </template>
    </a-table>
  </div>
</template>
<script src="./resumeTable.ts" lang="ts">
  /**
   * Gets called when the user clicks on the button
   *
   * @param {SyntheticEvent} even the react `SyntheticEvent`
   * @param {String} run table resume of examples
   * @public this is a public method
   * @alpha table arshive resume
   */
</script>
<style scoped>
</style>