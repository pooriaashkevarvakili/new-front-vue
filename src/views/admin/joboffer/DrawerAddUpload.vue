/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/04/05-9:34
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دراور صفحه دوم اطلاعات متقاضی Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div class="mt-2 grid grid-rows-6">
    <div class="border border-dashed border-blue-400">
      <a-upload
        ref="name"
        name="file"
        v-model:file-list="fileList"
        :multiple="true"
        :headers="headers"
        @change="handleChange"
        class="py-3 grid place-content-center cursor-pointer"
      >
        <div class="grid place-items-center">
          <i-upload-logs class="text-gray-400" theme="outline" size="40" />
        </div>
        <div class="grid grid-flow-col place-items-center mt-2">
          <span class="text-sm font-primary">رزومه های متقاضیان را در اینجا بکشید ورهاکنیدیا</span>
          <span class="text-blue-400 rtl text-xs font-primary mr-1 cursor-pointer">آپلود کنید</span>
        </div>
        <div class="grid place-items-center">
          <span class="text-xs mt-3 font-primary text-gray-500">*فرمت رزومه هاباید pdf باشد</span>
        </div>
      </a-upload>
    </div>
  </div>
  <div class="grid grid-flow-col place-content-start">
    <a-button type="danger" class="grid place-content-center py-6">ثبت رزومه ها</a-button>
    <a-button @click="remove" type="danger" class="grid place-content-center mr-2 py-6">بازگشت</a-button>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { message } from "ant-design-vue";
  import { defineComponent, ref, reactive } from "vue";
  import { FileInfo } from "./FormLoginFormState/FileItem";
  export default defineComponent({
    name: "draweraddupload",
    setup(props, context) {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run form drawer resume upload joboffer of examples
       * @public this is a public method
       * @alpha مراحل افزودن متقاصی و اطلاعت صقحه گروهی
       * @returns  modal emit return visible =true
       */
      const visible = ref<boolean>(false);
      const remove = () => {
        context.emit("remove", (visible.value = true));
      };
      const state = reactive({
        name: ""
      });
      const handleChange = (info: FileInfo) => {
        const status = info.file.status;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`${info.file.name} file upload successfully`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed`);
        }
      };
      return {
        fileList: ref([]),
        handleChange,
        remove,
        state,
        visible,
        headers: {
          authorization: "authorization-text"
        }
      };
    }
  });
</script>
<style>
</style>