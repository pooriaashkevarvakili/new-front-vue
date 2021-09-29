/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the جدول Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <a-table :columns="columns" :data-source="data" :row-selection="rowSelection">
      <template #operation>
        <DropDownInfomation />
      </template>
    </a-table>
  </div>
</template>
<script src="./TableRequest.ts" lang="ts">
</script>
<style scoped>
</style>