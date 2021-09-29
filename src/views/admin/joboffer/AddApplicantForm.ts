/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:50
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the درخواست استخدام Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import addApplicantFormSkills from "./AddApplicantFormSkills.vue";
import { AddApplicantForm } from "./FormLoginFormState/AddApplicantForm";
import { useStore } from "vuex";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { RuleObject } from "ant-design-vue/lib/form/interface";
import {
  defineComponent,
  ref,
  computed,
  UnwrapRef,
  reactive,
  toRaw,
} from "vue";
import { message } from "ant-design-vue";
import { useI18n } from "vue-i18n";
/**
 * @param
 * @example
 *
 */
export default defineComponent({
  name: "AddApplicantForm",
  components: {
    addApplicantFormSkills,
  },
  setup(props, context) {
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run form joboffer of examples
     * @public this is a public method
     * @alpha form modal افزودن متقاضی js ,ts
     * @beta form item that email,age,mobile,description,skillform
     * @return visible value=true age applicant return value set
     */
    const { t } = useI18n();
    const visible = ref<boolean>(false);
    /**
     * sucess event emit
     *
     */
    const modalClose = () => {
      context.emit("modalClose", (visible.value = true));
    };
    const formRef = ref<HTMLFormElement | null>();

    const formState: UnwrapRef<AddApplicantForm> = reactive({
      age: "",
      skillForm: "",
      email: "",
      mobile: "",
      description: "",
    });
    const onSumbit = () => {
      formRef
        .value!.validate()
        .then(() => {
          message.success("اطلاعات شما باموفقیت ثبت شد");
          console.log("value", formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<AddApplicantForm>) => {
          console.log("error", error);
        });
    };
    const RegisterForm = () => {
      formRef.value!.register();
    };
    let checkAge = async (rule: RuleObject, value: number) => {
      if (!value) {
        return Promise.reject("لطفا سن راواردکنید");
      } else {
        if (value >= 18 && value <= 35) {
          return Promise.resolve("سن درست نوشته اید");
        } else {
          return Promise.reject(" سن متقاضی باید بین 18تا35 باشد");
        }
      }
    };
    const rules = {
      email: [
        {
          required: true,
          message: `${t("field.valid-email")}`,
        },
      ],
      mobile: [
        {
          max: 11,
          required: true,
          message: `${t("field.valid-mobile")}`,
        },
      ],
      age: [
        {
          required: true,
          validator: checkAge,
        },
      ],
      skillForm: [{ required: true, message: `${t("field.valid-skillForm")}` }],
      education: [{ required: true, message: `${t("field.valid-education")}` }],
      description: [
        { required: true, message: `${t("field.valid-description")}` },
      ],
    };
    const store = useStore();
    store.dispatch("skillForm/GetSkillForm");
    const skillForm = computed(() => store.state.skillForm.skillForm);
    store.dispatch("education/GetEducation");
    const education = computed(() => store.state.education.education);
    return {
      education,
      formState,
      visible,
      formRef,
      rules,
      onSumbit,
      RegisterForm,
      modalClose,
      skillForm,
    };
  },
});
