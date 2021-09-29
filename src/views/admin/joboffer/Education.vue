/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <AForm ref="formRef" :rules="rules" :model="formState" @submit="onSubmit">
    <div class="grid grid-cols-2 mt-2">
      <div class="grid place-items-start mt-2" v-for="education in education" :key="education.id">
        <a-checkbox v-model:name="name" class="mr-2 mt-1">{{ education.name }}</a-checkbox>
      </div>
    </div>
    <hr class="mt-5 text-center" />
  </AForm>
</template>
<script lang="ts">
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";
  import { defineComponent, computed, UnwrapRef, reactive, toRaw } from "vue";
  interface LoginFromState {
    id: string;
    name: string;
  }
  export default defineComponent({
    name: "Education",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run form education joboffer of examples
       * @public this is a public method
       * @alpha  مراحل مودال تحصیل در فیلترهای بیشتر
       * @example تحصیلات از دیپلم تاکارشناسی
       * @returns education state return value vuex 
       */
      const router = useRouter();
      const store = useStore();
      store.dispatch("education/GetEducation");
      const education = computed(() => store.state.education.education);
      const formState: UnwrapRef<LoginFromState> = reactive({
        id: "undefined",
        name: "undefined"
      });

      const onSubmit = async () => {
        try {
          await store.dispatch("education/GetEducation", toRaw(formState));
          computed(
            () => store.state.registrationOfApplicant.registrationOfApplicant
          );
          router.push({ name: "Education" });
        } catch (e) {}
      };
      return {
        education,
        formState,
        onSubmit
      };
    }
  });
</script>
<style scoped>
</style>
