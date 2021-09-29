/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:50
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the افزودن متقاضی Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { RuleObject } from "ant-design-vue/lib/form/interface";
import { useStore } from "vuex";
import { LoginFormStateApplicant } from "./FormLoginFormState/LoginFromStateApplicant";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import AddIndividualUpdate from "./AddIndividualUpload.vue";
import {
  defineComponent,
  ref,
  computed,
  UnwrapRef,
  reactive,
  toRaw,
} from "vue";
import { useI18n } from "vue-i18n";
import { message } from "ant-design-vue";
/**
 * @param
 * @example
 *
 */
export default defineComponent({
  name: "Addindividual",
  components: {
    AddIndividualUpdate,
  },
  setup(props, context) {
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run Form joboffer  of examples
     * @public this is a public method
     * @alpha مراحل افزودن متقاضی درجاب افر
     * @beta item افزودن متقاضی دارد
     * @returns modal visible value return true age applicant return value
     */
    const { t } = useI18n();
    const visible = ref<boolean>(false);
    const closePage = () => {
      /**
       * sucess event emit
       */
      context.emit("closePage", (visible.value = true));
    };
    const store = useStore();
    store.dispatch("skill/GetSkill");
    const skill = computed(() => store.state.skill.skill);
    store.dispatch("education/GetEducation");
    const education = computed(() => store.state.education.education);
    store.dispatch("resume/Getresume");
    const resume = computed(() => store.state.resume.resume);
    store.dispatch("title/GetTitle");
    const title = computed(() => store.state.title.title);
    const formRef = ref();
    const formState: UnwrapRef<LoginFormStateApplicant> = reactive({
      id: "",
      age: "",
      skill: "",
      name: "",
      mobile: "",
      email: "",
      description: "",
    });
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
      title: [{ required: true, message: `${t("field.valid-title")}` }],
      resume: [{ required: true, message: `${t("field.valid-resume")}` }],
      age: [
        {
          required: true,
          validator: checkAge,
        },
      ],
      education: [
        {
          required: true,
          message: `${t("field.valid-education")}`,
        },
      ],
      skill: [{ required: true, message: `${t("field.valid-skill")}` }],
      name: [{ required: true, message: `${t("field.valid-name")}` }],
      mobile: [
        { max: 11, required: true, message: `${t("field.valid-mobile")}` },
      ],
      email: [{ required: true, message: `${t("field.valid-email")}` }],
      description: [
        { required: true, message: `${t("field.valid-description")}` },
      ],
    };
    const onSumbit = () => {
      formRef
        .value!.validate()
        .then(() => {
          message.success("اطلاعات متقاضی با موفقیت ثبت شد");
          console.log("values", formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<LoginFormStateApplicant>) => {
          console.log("error", error);
        });
    };
    const value = ref("");
    const registerForm = () => {
      formRef.value!.register();
    };
    return {
      rules,
      skill,
      value,
      resume,
      onSumbit,
      formState,
      formRef,
      title,
      closePage,
      visible,
      registerForm,
      education,
    };
  },
});
