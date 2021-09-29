<template>
  <div class="flex flex-col items-center">
    <NotifyCardItem
      v-for="(item, index) in lastNotify"
      :last="index === (lastNotify.length-1)"
      :key="index"
      :model="item"
    />
    <AButton class="w-full mt-4" type="danger" ghost size="large">
      <div class="flex items-center justify-center">
        <span class="flex-1">مشاهده همه</span>
        <i-left class="flex" size="1.5em" />
      </div>
    </AButton>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import NotifyCardItem from "@/components/card/NotifyCardItem.vue";
import { Notify } from "@/store/interface/notify";

export default {
  name: "LastNotify",
  components: { NotifyCardItem },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("notify/fetchLastNotify"));
    const lastNotify = computed((): Array<Notify> => store.state.notify.last);
    return {
      lastNotify
    };
  }
};
</script>
