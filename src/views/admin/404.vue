<template>
  <div>
    <a-result status="404" title="404" sub-title="صفحه ای که به دنبال آن بودید یافت نشد.">
      <template #extra>
        <a-button type="primary" @click="error()">داشبورد</a-button>
      </template>
    </a-result>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "404",
  setup() {
    const router = useRouter();
    const error = () => {
      router.push("/dashboard");
    };
    return {
      error
    };
  }
});
</script>

<style scoped>
</style>
