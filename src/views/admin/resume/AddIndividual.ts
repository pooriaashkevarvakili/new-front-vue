/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:50
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the افزودن متقاضیApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
/**
 * @param
 * @example
 *
 */
import { RuleObject } from "ant-design-vue/lib/form/interface";
import { useStore } from "vuex";
import { LoginFormStateApplicant } from "./ts/LoginFromStateApplicant";
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
     * @param {String} run add individual resume of examples
     * @public this is a public method
     * @alpha one page arshive resume drawer add applicant ts
     * @beta افزودن متقاضی شامل اینپوت سلکت باکس
     * @returns set state skill vue vuex,set state resume vue vuex ,form-ref set value change
     */
    const visible = ref<boolean>(false);
    const { t } = useI18n();
    const closePage = () => {
      /**
       * sucess event emit
       */
      context.emit("onRemovePage", (visible.value = true));
    };
    const checked = ref<boolean>(false);
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
      skills: "",
      name: "",
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
          trigger: "change",
        },
      ],
      education: [{ required: true, message: `${t("field.valid-education")}` }],
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
          message.success("اطلاعات شما باموفقیت ثبت شد");
          console.log("values", formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<LoginFormStateApplicant>) => {
          console.log("error", error);
        });
    };
    const registerForm = () => {
      formRef.value!.register();
    };
    return {
      rules,
      skill,
      checked,
      resume,
      onSumbit,
      formState,
      formRef,
      education,
      title,
      closePage,
      visible,
      registerForm,
    };
  },
});
