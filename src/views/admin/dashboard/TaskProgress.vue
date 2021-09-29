<template>
  <div class="flex items-center">
    <AAvatar :size="64" class="flex items-center ml-4" style="background-color: #ffecc5">
      <i-tag-one fill="#faad14" size="2em" class="flex items-center" />
    </AAvatar>
    <div>
      <div>درصد پیشرفت تسک ها</div>
      <div class="font-bold text-3xl">75٪</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TaskProgress"
};
</script>

<style scoped>
</style>
