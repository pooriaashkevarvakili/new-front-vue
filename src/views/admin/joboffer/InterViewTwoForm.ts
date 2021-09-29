/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:50
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the فرم مصاحبهApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
import InterViewTwoFormDropDown from "./InterViewTwoFormDropDown.vue";
import InterViewTwoFormOne from "./InterViewTwoFormOne.vue";
import InterViewTwoFormTwo from "./InterViewTwoFormTwo.vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { useStore } from "vuex";
import { LoginFormStateInterViewTwoForm } from "./FormLoginFormState/LoginFormState";
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
    InterViewTwoFormOne,
    InterViewTwoFormTwo,
    InterViewTwoFormDropDown,
  },
  setup(props, context) {
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run forn modal joboffer of examples
     * @public this is a public method
     * @alpha مودال صفحه دوم فرم مصاحبه با تمامی اطلاعات
     * @beta form interview , sumbit ,return
     * @example form time-picker year select-box,drop-down
     * @returns change set value form-ref change value set
     */
    const { t } = useI18n();
    const visible = ref<boolean>(false);
    /**
     * sucess event emit
     */
    const modalClose = () => {
      context.emit("modalClose", (visible.value = false));
    };
    const formRef = ref<HTMLFormElement | null>();
    const formState: UnwrapRef<LoginFormStateInterViewTwoForm> = reactive({
      id: "",
      date: "",
      timeinterview: "",
      noteInterview: "",
    });
    const onSumbit = () => {
      formRef
        .value!.validate()
        .then(() => {
          message.success("اطلاعات شما باموفقیت ثبت شد");
          console.log("values", formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<LoginFormStateInterViewTwoForm>) => {
          console.log("error", error);
        });
    };
    const rules = {
      interviews: [
        { required: true, message: `${t("field.valid-interviews")}` },
      ],
      location: [{ required: true, message: `${t("field.valid-location")}` }],
      date: [{ required: true, message: `${t("field.valid-date")}` }],
      timeinterview: [
        { required: true, message: `${t("field.valid-timeinterview")}` },
      ],
      noteInterview: [{ required: true, message: `${t("field.valid-note")}` }],
    };
    const store = useStore();
    store.dispatch("location/GetLocation");
    const location = computed(() => store.state.location.location);
    store.dispatch("interviews/GetInterviews");
    const interviews = computed(() => store.state.interviews.interviews);
    return {
      location,
      formState,
      onSumbit,
      visible,
      interviews,
      modalClose,
      formRef,
      rules,
    };
  },
});
