/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دبیرخانه فرم  اطلاعا ت اولیه اینپوت ها دیزابل Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <div class="mt-8 mr-8">
      <a-form ref="formRef" :rules="rules" :form="form" :model="formState">
        <a-form-item :label="$t('field.titleLetter')">
          <a-radio-group disabled>
            <a-radio value="ورودی">ورودی</a-radio>
            <a-radio
              v-for="titleLetters in titleLetter"
              :key="titleLetters.id"
              class="mr-4"
              value="titleLetters.name"
            >{{titleLetters.name}}</a-radio>
          </a-radio-group>
        </a-form-item>
        <div class="grid grid-cols-5">
          <div class="col-span-3 grid grid-cols-3 gap-10">
            <a-form-item class="grid" :label="$t('field.letterDate')">
              <a-input class="font-bold" disabled placeholder="1399/04/11" />
            </a-form-item>
            <a-form-item class="grid" :label="$t('field.numberLetter')">
              <a-input class="font-bold grid" disabled placeholder="652/02" />
            </a-form-item>
            <a-form-item class="grid" :label="$t('field.andicator')">
              <a-select disabled placeholder="دبیرخانه مرکزی وارده وارده">
                <a-select-option value="1">1</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </div>
        <div class="grid grid-cols-5 gap-10">
          <div>
            <a-form-item class="grid" :label="$t('field.howsend')">
              <a-select disabled placeholder="خرید داخلی">
                <a-select-option value="2"></a-select-option>
              </a-select>
            </a-form-item>
          </div>
          <div class="col-span-2 mr-6">
            <a-form-item class="grid" :label="$t('field.howsend')">
              <a-input disabled placeholder="اعلام رضایت مندی مشتری" />
            </a-form-item>
          </div>
        </div>
        <div class="grid grid-cols-5">
          <div class="col-span-3 grid grid-cols-3 gap-10">
            <a-form-item class="grid" :label="$t('field.howsend')">
              <a-select disabled placeholder="پست الکترونیک">
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item class="grid" :label="$t('field.place')">
              <a-select disabled placeholder="مدیرفناوری اطلاعات">
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item class="grid" :label="$t('field.deleviry')">
              <a-select disabled placeholder>
                <a-select-option value="1">1</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </div>
      </a-form>
    </div>
    <GisheTabsFormThree />
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { defineComponent, computed } from "vue";
  import GisheTabsFormThree from "./GisheTabsFormThree.vue";
  import { useStore } from "vuex";
  export default defineComponent({
    name: "gisheTabsForms",
    components: { GisheTabsFormThree },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run gishe tabs forms mailroom of examples
       * @public this is a public method
       * @alpha three page form disabled دبیرخانه
       * @beta اطلاعات فرمی که دیزابل شامل input selectbox button checkbox
       * @returns change state titleletter , store dispatch
       */
      const store = useStore();
      const titleLetter = computed(() => store.state.titleLetter.titleLetter);
      store.dispatch("titleLetter/GetTitleLetter");
      return {
        titleLetter
      };
    }
  });
</script>
<style scoped></style>