/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دراپ داون ارسال رزومهApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <a-dropdown trigger="click" v-model:visible="visible" :placement="placement">
    <a @click.prevent>
      <a-button class="grid-flow-col grid place-content-center py-5 mt-2" type="primary">
        <template #icon>
          <i-download size="18" class="text-base" />
        </template>
        <span class="text-white font-bold mr-1">دریافت رزومه</span>
      </a-button>
    </a>
    <template #overlay>
      <a-menu class="pb-2 ml-28">
        <a-menu-item class="grid grid-cols-1">
          <div class="grid place-items-start">
            <span class="font-bold text-base">ارزیابی مدیر مستقیم</span>
          </div>
        </a-menu-item>
        <hr class="mt-2" />
        <a-menu-item>
          <div>
            <AForm ref="formRef" :rules="rules" :model="formState" layout="vertical">
              <div>
                <AFormItem
                  required
                  has-feedback
                  ref="score"
                  name="score"
                  class="mb-1"
                  :label="$t('field.point')"
                >
                  <AInput v-model:value="formState.score" value placeholder="عددامتیازواردکنید" />
                </AFormItem>
              </div>
              <div>
                <AFormItem
                  required
                  has-feedback
                  class="mb-1"
                  ref="optionApplicant"
                  name="optionApplicant"
                >
                  <AInput
                    v-model:value="formState.optionApplicant"
                    class="py-12"
                    placeholder="نظر شمادرمورد متقاضی"
                  />
                </AFormItem>
              </div>
              <div class="grid grid-flow-col mt-4">
                <a-button class="p-8 py-4 grid place-content-center">
                  <div class="grid grid-flow-col place-content-start">
                    <i-thumbs-down class="grid" />
                    <span class="mr-1 text-sm text-gray-500 font-extrabold">تایید</span>
                  </div>
                </a-button>
                <a-button class="p-8 mr-2 py-4 grid place-content-center">
                  <div class="grid grid-flow-col place-content-start">
                    <i-thumbs-up class="grid" />
                    <span class="mr-1 text-sm text-gray-500 font-extrabold">رد کردن</span>
                  </div>
                </a-button>
              </div>
              <a-button
                @click="validateForm()"
                class="w-full mt-4 grid place-content-center py-4 font-extrabold"
                type="danger"
              >ثبت</a-button>
            </AForm>
          </div>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { useI18n } from "vue-i18n";
  import { SendResume } from "./FormLoginFormState/SendResume";
  import { defineComponent, ref, reactive, UnwrapRef } from "vue";
  export default defineComponent({
    name: "SendResume",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run sendResume joboffer of examples
       * @public this is a public method
       * @alpha دریافت رزومه باتمامی اطلاعات joboffer
       * @beta send resume input button
       * @example drop-down resume score input ,comment applicant ,button follow or un-follow ,button send
       * @returns change set value form-ref
       */
      const { t } = useI18n();
      const formRef = ref();
      const formState: UnwrapRef<SendResume> = reactive({
        id: "",
        score: "",
        optionApplicant: ""
      });
      const rules = {
        score: [
          {
            required: true,
            message: `${t("field.valid-score")}`
          }
        ],
        optionApplicant: [
          {
            required: true,
            message: `${t("field.valid-optionApplicant")}`
          }
        ]
      };
      /**
       * sucess event emit
       *
       */
      const validateForm = () => {
        formRef.value!.validate();
      };
      const visible = ref<boolean>(false);
      return {
        visible,
        formState,
        validateForm,
        formRef,
        rules
      };
    }
  });
</script>
<style scoped>
</style>
