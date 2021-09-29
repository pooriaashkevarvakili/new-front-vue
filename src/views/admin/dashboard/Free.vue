<template>
  <div class="flex items-center">
    <AAvatar :size="64" class="flex items-center ml-4" style="background-color: rgb(227 255 208)">
      <i-stopwatch class="flex items-center" size="2em" fill="green" />
    </AAvatar>
    <div>
      <div>مانده مرخصی</div>
      <div class="font-bold text-3xl">7 روز</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Free"
};
</script>

<style scoped>
</style>
