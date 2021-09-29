<template>
  <div class="flex items-stretch w-full cursor-pointer p-2 task-card">
    <div :style="{'background-color':model.color}" class="ml-4 task-line"></div>
    <div class="flex-1">
      <div class="font-bold">
        {{ model.title }}
      </div>
      <div class="text-xs">
        {{ model.body }}
      </div>
    </div>
    <div class="text-xs">
      {{ model.created_at }}
    </div>
  </div>
  <ADivider class="m-0" v-if="!last"/>
</template>

<script lang="ts">
import {PropType} from 'vue';
import {Task} from "@/store/interface/task";


export default {
  name: "TaskCard",
  props: {
    model: Object as PropType<Task>,
    last: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.task-line {
  width: 5px;
  border-radius: 5px;
}

.task-card {
  transition: all 0.2s ease;
}

.task-card:hover {
  background-color: #f3f3f3;
}
</style>
