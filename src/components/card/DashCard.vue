<template>
  <div>
    <ACard>
      <div v-if="title" class="font-extrabold text-md title-dash-card mb-4">{{ title }}</div>
      <slot></slot>
    </ACard>
  </div>
</template>

<script lang="ts">
export default {
  name: "DashCard",
  props: {
    title: String | null
  },
  setup() {}
};
</script>

<style scoped>
.title-dash-card {
  position: relative;
  top: -10px;
  right: -10px;
}
</style>
