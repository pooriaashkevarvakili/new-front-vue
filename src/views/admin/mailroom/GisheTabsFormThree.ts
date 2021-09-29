/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/06/21-9:39
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the gishe tabs form disble دبیرخانه صفحه سوم Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

/**
 * @param
 * @example
 *
 */
import { useI18n } from "vue-i18n";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, ref, UnwrapRef, reactive, toRaw } from "vue";
import { GisheTabsForm } from "./tsFormBasicInformation/GisheTabsForm";
import { message } from "ant-design-vue";
export default defineComponent({
  name: "gisheTabsFormThree",
  setup() {
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run gishe tabs resume of examples
     * @public this is a public method
     * @alpha three page form دبیرخانه
     * @beta input select-box  فرستنده وگیرنده ونوع ارجاع
     * @returns change set value form-ref
     */
    const formRef = ref();
    const formState: UnwrapRef<GisheTabsForm> = reactive({
      recepiant: "",
      refer: "",
    });
    const { t } = useI18n();
    const rules = {
      lettersender: {
        required: true,
        message: `${t("field.valid-lettersender")}`,
      },
      recepiant: {
        required: true,
        message: `${t("field.valid-recepiant")}`,
      },
      refer: {
        required: true,
        message: `${t("field.valid-refer")}`,
      },
    };
    const onSubmit = () => {
      formRef
        .value!.validate()
        .then(() => {
          message.success("اطلاعات شما باموفقیت ثبت شد");
          console.log("value", formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<GisheTabsForm>) => {
          console.log("false");
          console.log("error", error);
        });
    };
    return {
      onSubmit,
      formRef,
      formState,
      rules,
    };
  },
});
