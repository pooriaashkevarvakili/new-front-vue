/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال تکمیل مدارکApplication manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-3 gap-5">
    <div class="col-span-2">
      <div class="grid grid-flow-col place-content-start">
        <CompletionOfDocumentsDropDown />
      </div>
      <div>
        <AForm ref="formRef" :model="formState">
          <div class="grid grid-cols-2 gap-5 mt-5">
            <div class="border-solid border-gray-300 h-16 bg-white">
              <AFormItem>
                <a-checkbox class="font-normal mr-5 mt-2">صفحات شناسنامه</a-checkbox>
              </AFormItem>
            </div>
            <div
              class="grid justify-start grid-flow-col border-solid border-gray-300 h-16 bg-white"
            >
              <AFormItem>
                <a-checkbox class="font-normal mr-5 mt-2">کارت ملی</a-checkbox>
              </AFormItem>
              <CompletionOfDocumentsDropDownOne />
            </div>
          </div>
          <div class="grid grid-cols-2 mt-5 gap-5">
            <div
              class="border-solid border-gray-300 h-16 bg-white"
              v-for="completionOfDocumentsForms in completionofdocumentsmodal"
              :key="completionOfDocumentsForms.id"
            >
              <AFormItem>
                <a-checkbox class="font-normal mr-5 mt-2">{{completionOfDocumentsForms.name}}</a-checkbox>
              </AFormItem>
            </div>
          </div>
        </AForm>
      </div>
      <div class="mt-10 grid grid-flow-col place-content-start">
        <a-button
          type="primary"
          class="py-6 p-3 grid grid-flow-col place-content-center"
        >تایید مدارک واستخدام</a-button>
        <a-button
          type="danger"
          class="py-6 mr-3 p-3 grid grid-flow-col place-content-center"
        >عدم تایید</a-button>
      </div>
    </div>
    <div class="grid">
      <TimeLineForm />
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import CompletionOfDocumentsDropDown from "./CompletionOfDocumentsDropDown.vue";
  import CompletionOfDocumentsDropDownOne from "./CompletionOfDocumentsDropDownOne.vue";
  import TimeLineForm from "./TimeLineForm.vue";
  import { CompletionOfDocumentsModal } from "./FormLoginFormState/CompletionOfDocumentsModal";
  import { useStore } from "vuex";
  import { defineComponent, reactive, UnwrapRef, computed } from "vue";
  export default defineComponent({
    name: "CompletionOfDocumentsModal",
    components: {
      TimeLineForm,
      CompletionOfDocumentsDropDown,
      CompletionOfDocumentsDropDownOne
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run form modal joboffer of examples
       * @public this is a public method
       * @alpha five page modal مراحل تکمیل مدارک دکمه های تایید مدارک واستخدام عدم تایید
       * @beta ایتم های تکمیل مدارک با تمامی گزینه هاش وباتن
       * @returns value change state vuex vue
       */
      const store = useStore();
      store.dispatch("completionofdocumentsmodal/GetCompletionOfDocumentsModal");
      const completionofdocumentsmodal = computed(
        () => store.state.completionofdocumentsmodal.completionofdocumentsmodal
      );
      const formState: UnwrapRef<CompletionOfDocumentsModal> = reactive({
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      });
      return {
        formState,
        placements: ["bottomLeft"],
        completionofdocumentsmodal
      };
    }
  });
</script>
<style scoped>
</style>
