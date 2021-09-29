<template>
  <div class="flex flex-col items-center">
    <AAvatar :size="128" class="flex items-center mb-4" style="background-color: rgb(250 250 250)">
      <i-user class="flex items-center" size="3em" fill="grey" />
    </AAvatar>
    <div class="font-bold">{{ getFullName }}</div>
    <div>{{ getMobile }}</div>
    <div class="flex items-center justify-between w-full mt-4">
      <div class="flex items-center flex-col">
        <div>کدپرسنلی</div>
        <div class="font-bold text-1xl">7:55</div>
      </div>
      <ADivider type="vertical" />
      <div class="flex items-center flex-col">
        <div>واحد سازمانی</div>
        <div class="font-bold text-1xl">7:55</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "MyProfile",
  setup() {
    const store = useStore();
    const getFullName = computed((): string => {
      return `${store.state.auth.user.firstname} ${store.state.auth.user.lastname}`;
    });
    const getMobile = computed((): string => {
      return `${store.state.auth.user.phone_number}`;
    });
    return { getFullName, getMobile };
  }
};
</script>

<style scoped>
</style>
