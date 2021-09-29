<template>
  <div class="flex items-center">
    <AAvatar :size="64" class="flex items-center ml-4" style="background-color: rgb(250 250 250)">
      <i-alarm-clock class="flex items-center" fill="rgb(32 121 204)" size="2em" />
    </AAvatar>
    <div>
      <div>ساعت ورود</div>
      <div class="font-bold text-3xl">7:55</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Entrance"
};
</script>

<style scoped>
</style>
