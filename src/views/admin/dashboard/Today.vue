<template>
  <div class="flex items-center">
    <AAvatar :size="64" class="flex items-center ml-4" style="background-color: #ffe3e3">
      <i-calendar class="flex items-center" size="2em" fill="#ff4d4f" />
    </AAvatar>
    <div>
      <div>امروز چهارشنبه</div>
      <div class="font-bold text-3xl">25 اسفند 1399</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Today"
};
</script>

<style scoped>
</style>
