/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:50
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the درخواست استخدام Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { useStore } from "vuex";
import { JobApplication } from "./applicationTs/jobApplication";
import {
  defineComponent,
  ref,
  computed,
  reactive,
  UnwrapRef,
  toRaw,
} from "vue";
import { useI18n } from "vue-i18n";
import { message } from "ant-design-vue";

export default defineComponent({
  /**
   * @param
   * @example
   *
   */
  name: "formSubmitJobApplication",
  setup(props, context) {
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run submit job applicant of examples
     * @public this is a public method
     * @alpha دروار ثبت درخواست استخدام در درخواست استخدام
     * @beta select box , input
     * @returns change state departeman ,data context emit,
     */
    const formRef = ref();
    const value = ref<string>("");
    const store = useStore();
    store.dispatch("departeman/GetDeparteman");
    const departeman = computed(() => store.state.departeman.departeman);
    store.dispatch("job/GetJob");
    const job = computed(() => store.state.job.job);
    store.dispatch("semat/GetSemat");
    const visible = ref<boolean>(false);
    const onClose = () => {
      /**
       * sucess event emit
       */
      context.emit("CloseDrawer", (visible.value = false));
    };
    store.dispatch("history/GetHistory");
    const history = computed(() => store.state.history.history);
    const formState: UnwrapRef<JobApplication> = reactive({
      sharh: "",
    });
    store.dispatch("education/GetEducation");
    const education = computed(() => store.state.education.education);
    const semat = computed(() => store.state.semat.semat);
    store.dispatch("mahal/GetMahal");
    store.dispatch("skill/GetSkill");
    const elat = computed(() => store.state.elat.elat);
    store.dispatch("elat/GetElat");
    const sex = computed(() => store.state.sex.sex);
    store.dispatch("sex/GetSex");
    const hoghugh = computed(() => store.state.hoghugh.hoghugh);
    store.dispatch("hoghugh/GetHoghugh");
    const modat = computed(() => store.state.modat.modat);
    store.dispatch("modat/GetModat");
    const skill = computed(() => store.state.skill.skill);
    const mahal = computed(() => store.state.mahal.mahal);
    const { t } = useI18n();
    const rules = {
      history: [{ required: true, message: `${t("field.valid-history")}` }],
      education: [{ required: true, message: `${t("field.valid-education")}` }],
      skill: [{ required: true, message: `${t("field.valid-skill")}` }],
      departeman: [
        { required: true, message: `${t("field.valid-departeman")}` },
      ],
      job: [{ required: true, message: `${t("field.valid-semat")}` }],
      semat: [{ required: true, message: `${t("field.valid-job")}` }],
      mahal: [{ required: true, message: `${t("field.valid-mahal")}` }],
      sex: [{ required: true, message: `${t("field.valid-sex")}` }],
      elat: [{ required: true, message: `${t("field.valid-elat")}` }],
      hoghugh: [{ required: true, message: `${t("field.valid-hoghugh")}` }],
      modat: [{ required: true, message: `${t("field.valid-modat")}` }],
      sharh: [{ required: true, message: `${t("field.valid-sharh")}` }],
    };
    const validateForm = () => {
      formRef
        .value!.validate()
        .then(() => {
          message.success("اطلاعات شماباموفقیت ثبت شد");
          console.log("valiues", formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<JobApplication>) => {
          console.log("error", error);
        });
    };
    store.dispatch("job/GetJob");
    return {
      formRef,
      rules,
      job,
      value,
      departeman,
      validateForm,
      semat,
      onClose,
      visible,
      formState,
      mahal,
      skill,
      education,
      sex,
      history,
      elat,
      modat,
      hoghugh,
    };
  },
});
