/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of فیلترهای بیشتر مهارت ها the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <AForm ref="formRef" :rules="rules" :model="formState">
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
       * @param {String} run skills joboffer of examples
       * @public this is a public method
       * @alpha skill فیلترهای بیشترjoboffer
       * @beta skills morefilter has
       * @example همکاران سیستم افیس مایکروسافت کارتیمی مدیریت شبکه های اجتماعی
       * @returns change state dispatch skill ,set change value state
       */
      const store = useStore();
      store.dispatch("skill/GetSkill");
      const skills = computed(() => store.state.skill.skill);
      const placement = ref<string>("left");
      const value6 = ref<string>("input content");
      const value5 = ref<string>("مشاهده همه مهارت ها");
      const formState: UnwrapRef<LoginFromState> = reactive({
        id: "",
        name: ""
      });
      const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      return {
        handleChange,
        value6,
        value5,
        formState,
        placement,
        skills
      };
    }
  });
</script>
<style lang="scss">
</style>
