/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/31-11:38
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the اطلاعات بیشتر Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
/**
 * @param
 * @example
 *
 */
import FormSearchPicture from "./FormSearchPicture.vue";
import { useStore } from "vuex";
import { CompleteTheApplication } from "./applicationTs/CompleteTheApplication";
import { useI18n } from "vue-i18n";
import {
  defineComponent,
  computed,
  UnwrapRef,
  reactive,
  ref,
  toRaw,
} from "vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { message } from "ant-design-vue";
export default defineComponent({
  name: "completeTheApplication",
  components: {
    FormSearchPicture,
  },
  setup(props, context) {
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run table application applicant of examples
     * @public this is a public method
     * @alpha drawer اطلاعات بیشتر شامل فرم وولیدیت درخواست استخدام
     * @beta input select-box check-box
     * @returns change set value change form sumbit
     */
    const visible = ref<boolean>(false);
    const onClose = () => {
      /**
       * sucess event emit
       */
      context.emit("onClose", (visible.value = false));
    };
    const formState: UnwrapRef<CompleteTheApplication> = reactive({});
    const { t } = useI18n();
    const rules = {
      hoghugh: [{ required: true, message: `${t("field.valid-hoghugh")}` }],
      modat: [{ required: true, message: `${t("field.valid-modat")}` }],
      mahalenteshar: [
        { required: true, message: `${t("field.valid-mahalenteshar")}` },
      ],
    };
    const store = useStore();
    const hoghugh = computed(() => store.state.hoghugh.hoghugh);
    store.dispatch("hoghugh/GetHoghugh");
    const modat = computed(() => store.state.modat.modat);
    store.dispatch("modat/GetModat");
    const formRef = ref();
    store.dispatch("resume/Getresume");
    const resume = computed(() => store.state.resume.resume);
    const onSubmit = () => {
      formRef
        .value!.validate()
        .then(() => {
          message.success("اطلاعات شما باموفقیت ثبت شد");
          console.log("valiues", formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<CompleteTheApplication>) => {
          console.log("error", error);
        });
    };
    return {
      hoghugh,
      modat,
      formState,
      rules,
      onSubmit,
      formRef,
      resume,
      onClose,
      visible,
    };
  },
});
