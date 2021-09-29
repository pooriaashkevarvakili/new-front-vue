<template>
  <div class="flex flex-col items-center">
    <TaskCard
      v-for="(item, index) in lastTasks"
      :last="index === (lastTasks.length-1)"
      :key="index"
      :model="item"
    />
    <AButton class="w-full mt-4" type="danger" ghost size="large">
      <div class="flex items-center justify-center">
        <span class="flex-1">نمایش تمامی کارها</span>
        <i-left class="flex" size="1.5em" />
      </div>
    </AButton>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Task } from "@/services/tasks";
import TaskCard from "@/components/card/TaskCard.vue";

export default {
  name: "LastTasks",
  components: { TaskCard },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("tasks/fetchLastTasks"));
    const lastTasks = computed((): Array<Task> => store.state.tasks.last);
    return {
      lastTasks
    };
  }
};
</script>
