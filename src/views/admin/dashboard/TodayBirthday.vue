<template>
  <div class="flex items-center flex-col">
    <BirthListItem v-for="(item , index) in todayList" :key="index" :model="item" />
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import BirthListItem from "@/components/card/BirthListItem.vue";

export default {
  name: "TodayBirthday",
  components: { BirthListItem },
  setup() {
    const store = useStore();
    store.dispatch("dashboard/fetchTodayBirthday");
    const todayList = computed(() => store.state.dashboard.todayBirthdayList);
    return { todayList };
  }
};
</script>

