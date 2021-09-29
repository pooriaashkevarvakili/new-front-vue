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
  <div class="grid place-content-end grid-flow-col">
    <a-button type="danger" class="grid ml-2 place-content-center py-6">ثبت رزومه ها</a-button>
    <a-button type="danger" @click="onRemove" class="grid place-content-center py-6 mr-2">بازگشت</a-button>
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
  import { FileInfo } from "./ts/DrawerAdUpload";
  export default defineComponent({
    name: "draweraddupload",
    setup(props, context) {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run Drawer upload applicant of examples
       * @public this is a public method
       * @alpha page two drawer upload resume ارشیورزومه
       * @beta drawer upload resume  افزودن متقاضی
       * @returns change set modal onRemove
       */
      const state = reactive({
        name: ""
      });
         /**
       * sucess event emit
       *
       */
      const visible = ref<boolean>(false);
      const onRemove = () => {
        context.emit("onRemove", (visible.value = false));
      };
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
        state,
        onRemove,
        headers: {
          authorization: "authorization-text"
        }
      };
    }
  });
</script>
<style>
</style>