/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of فیلترهای بیشتر مهارت ها the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <AForm ref="formRef" :rules="rules" :model="formState" @submit="onSubmit">
    <div class="grid mt-6">
      <span class="text-base font-bold">مهارت ها</span>
    </div>
    <div class="grid place-items-start mt-4">
      <a-input
        size="large"
        class="text-right rounded-lg border-none w-5/12 py-2"
        placeholder="جستجوی مهارت"
      >
        <template #prefix>
          <i-search />
        </template>
      </a-input>
    </div>
    <div>
      <div class="grid mt-3">
        <div class="grid grid-cols-2 mt-2">
          <div class="grid place-items-start mt-2" v-for="skill in skills" :key="skill.id">
            <a-checkbox>{{ skill.name }}</a-checkbox>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 w-full">
      <a-select show-search option-filter-prop="children" style="width:220px">
        <a-select-option :value="skill.id" v-for="skill in skills" :key="skill.id">{{ skill.name }}</a-select-option>
      </a-select>
    </div>
  </AForm>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { useStore } from "vuex";

  import { defineComponent, ref, computed, UnwrapRef, reactive } from "vue";
  interface LoginFromState {
    id: number | string;
    name: String;
  }
  export default defineComponent({
    name: "Skills",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run modal status resume of examples
       * @public this is a public method
       * @alpha skills in more filters arshive resume
       * @returns change value in handle cancel
       */
      const store = useStore();

      store.dispatch("skill/GetSkill");
      const skills = computed(() => store.state.skill.skill);
      const placement = ref<string>("left");
      const value6 = ref<string>("input content");
      const value5 = ref<string>("مشاهده همه مهارت ها");
      const value = ref([]);

      const formState: UnwrapRef<LoginFromState> = reactive({
        id: "",
        name: ""
      });

      const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      const filterOption = (input: string, option: any) => {
        return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      };
      const handleCancle = () => {
        value.value = [];
      };
      const handleBlur = () => {
        console.log("blur");
      };
      const handleFocus = () => {
        console.log("focus");
      };
      return {
        value: ref([]),
        handleChange,
        value6,
        value5,
        filterOption,
        handleBlur,
        handleFocus,
        handleCancle,
        placement,
        skills,
        formState
      };
    }
  });
</script>
<style lang="scss">
</style>
