<template>
  <div class="flex items-stretch w-full cursor-pointer p-2 task-card">
    <div
      :style="{'background-color':getColor}"
      class="ml-4 notify-icon flex items-center justify-center"
    >
      <component size="1.5em" :is="model.icon" :fill="model.color" />
    </div>
    <div class="flex-1">
      <div class="font-bold">{{ model.title }}</div>
      <div class="text-xs">{{ model.body }}</div>
    </div>
    <div class="text-xs">{{ model.created_at }}</div>
  </div>
  <ADivider class="m-0" v-if="!last" />
</template>

<script lang="ts">
import { PropType } from "vue";
import { Notify } from "@/store/interface/notify";
import { computed } from "vue";
import { TinyColor } from "@ctrl/tinycolor";

export default {
  name: "NotifyCardItem",
  props: {
    model: Object as PropType<Notify>,
    last: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const getColor = computed((): string => {
      return "#" + new TinyColor(props.model.color).lighten(70).toHex();
    });
    return { getColor };
  }
};
</script>

<style scoped>
.notify-icon {
  width: 45px;
  height: 45px;
  border-radius: 5px;
}

.task-card {
  transition: all 0.2s ease;
}

.task-card:hover {
  background-color: #f3f3f3;
}
</style>
