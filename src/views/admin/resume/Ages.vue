/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the فیلترهای بیشتر  Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <AForm ref="formRef" :rules="rules" :model="formState" @submit="onSubmit">
    <div class="grid mt-5">
      <span class="text-base font-bold">سن</span>
    </div>
    <div class="grid grid-cols-2 mt-2">
      <div class="grid place-items-start mt-2" v-for="ages in age" :key="ages.id">
        <a-checkbox v-model:name="name" class="mt-1 mr-2">{{ ages.name }}</a-checkbox>
      </div>
    </div>
    <hr class="mt-5 text-center" />
  </AForm>
</template>
<script lang="ts">
  import { useStore } from "vuex";
  import { defineComponent, computed, UnwrapRef, reactive } from "vue";
  /**
   * @param
   * @example
   *
   */
  interface LoginFromState {
    id: number | string;
    name: String;
  }
  export default defineComponent({
    name: "Ages",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run ages modal resume of examples
       * @public this is a public method
       * @alpha modal فیلتر های بیشتر قسمت سن ارشیو رزومه
       * @beta types ages از 0تا40
       * @returns set state age vuex
       */
      const store = useStore();
      store.dispatch("age/GetAge");
      const age = computed(() => store.state.age.age);
      const formState: UnwrapRef<LoginFromState> = reactive({
        id: "",
        name: ""
      });

      return { age, formState };
    }
  });
</script>
<style scoped>
</style>
