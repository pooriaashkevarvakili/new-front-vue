/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/06/21-9:38
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the basic information form دبیرخانه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import ModalSabetBasicInformationForm from "./ModalSabetBasicInformationForm.vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { useStore } from "vuex";
import {
  defineComponent,
  ref,
  computed,
  UnwrapRef,
  reactive,
  toRaw,
} from "vue";
import { useI18n } from "vue-i18n";
import { FormBasicInformation } from "./tsFormBasicInformation/FormBasicInformation";
import { message } from "ant-design-vue";
export default defineComponent({
  name: "basicInformation",
  components: {
    ModalSabetBasicInformationForm,
  },
  setup() {
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} even the react `SyntheticEvent`
     * @param {String} run basic information resume of examples
     * @public this is a public method
     * @alpha one page form دبیرخانه
     * @beta form input selectbox checkbox button sabet letter new letter
     * @example نوع نامه اندیکاتور شماره وموضوع وپرونده نامه اطلاعات ارسال تحویل دهنده
     * @returns change value set vuex ,form-ref set change value
     */
    const formRefOne = ref();
    const store = useStore();
    store.dispatch("andiactor/GetAndiactor");
    const andiactor = computed(() => store.state.andiactor.andiactor);
    store.dispatch("leterfile/GetLeterFile");
    const titleLetter = computed(() => store.state.titleLetter.titleLetter);
    store.dispatch("titleLetter/GetTitleLetter");
    const leterfile = computed(() => store.state.leterfile.leterfile);
    store.dispatch("howsend/GetHowSend");
    const howSend = computed(() => store.state.howsend.howsend);
    store.dispatch("place/GetPlace");
    const place = computed(() => store.state.place.place);
    store.dispatch("deleviry/GetDeleviry");
    const deleviry = computed(() => store.state.deleviry.deleviry);
    const formState: UnwrapRef<FormBasicInformation> = reactive({
      id: "",
      numberLetter: "",
      letterDiscription: "",
      letterDate: "",
      informationSend: "",
    });
    const { t } = useI18n();
    const rules = {
      andicator: {
        required: true,
        message: `${t("field.valid-andicator")}`,
        trigger: "change",
      },
      numberLetter: {
        required: true,
        message: `${t("field.valid-numberLetter")}`,
        trigger: "change",
      },
      letterDiscription: {
        required: true,
        message: `${t("field.valid-description")}`,
      },
      letterDate: {
        required: true,
        message: `${t("field.valid-letterDate")}`,
      },
      letterFile: {
        required: true,
        message: `${t("field.valid-letterFile")}`,
      },
      howsend: {
        required: true,
        message: `${t("field.valid-howsend")}`,
      },
      place: {
        required: true,
        message: `${t("field.valid-place")}`,
      },
      deleviry: {
        required: true,
        message: `${t("field.valid-deleviry")}`,
      },
    };
    const value = ref<number>(1);
    /**
     * sucess event emit
     *
     */
    const visible = ref<boolean>(false);
    const showModal = () => {
      visible.value = true;
    };
    const loading = ref<boolean>(false);
    /**
     * sucess event emit
     *
     */
    const handleOk = () => {
      loading.value = true;
    };
    /**
     * sucess event emit
     *
     */
    const handleCancel = () => {
      visible.value = false;
    };
    const onSumbit = () => {
      formRefOne
        .value!.validate()
        .then(() => {
          message.success("اطلاعات شما باموفقیت ثبت شد");
          showModal();
          console.log("value", formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<FormBasicInformation>) => {
          console.log("false");
          console.log("error", error);
        });
    };
    return {
      andiactor,
      leterfile,
      onSumbit,
      howSend,
      place,
      rules,
      value,
      titleLetter,
      formRefOne,
      formState,
      deleviry,
      visible,
      showModal,
      handleOk,
      handleCancel,
    };
  },
});
