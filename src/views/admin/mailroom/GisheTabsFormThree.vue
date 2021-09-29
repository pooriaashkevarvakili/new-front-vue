/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:29
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the دبیرخانه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="mt-5">
    <a-form ref="formRef" :model="formState" :rules="rules" :form="form">
      <div class="mr-6 mt-5">
        <a-form-item
          class="mb-1"
          :label="$t('field.lettersender')"
          has-feedback
          ref="lettersender"
          :labelCol="{span: 4}"
          :wrapperCol="{span:5}"
          name="lettersender"
        >
          <div class="mr-9">
            <a-select placeholder="فرستنده نامه واردکنید" v-model:value="formState.lettersender">
              <a-select-option value="مشتری">مشتری</a-select-option>
            </a-select>
          </div>
        </a-form-item>
        <div class="mr-2 text-gray-400">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
      </div>
      <div class="mr-6 mt-5">
        <a-form-item
          class="mb-1"
          :label="$t('field.recepiant')"
          has-feedback
          ref="recepiant"
          :labelCol="{span: 4}"
          :wrapperCol="{span:5}"
          name="recepiant"
        >
          <div class="mr-9">
            <a-input v-model:value="formState.recepiant" placeholder="گیرنده نامه واردکنید" />
          </div>
        </a-form-item>
        <div class="mr-2 text-gray-400">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
      </div>
      <div class="mr-6 mt-5">
        <a-form-item
          class="mb-1"
          :label="$t('field.refer')"
          has-feedback
          ref="refer"
          :labelCol="{span: 4}"
          :wrapperCol="{span:5}"
          name="refer"
        >
          <div class="mr-9">
            <a-input v-model:value="formState.refer" placeholder="نوع ارجاع واردکنید" />
          </div>
        </a-form-item>
        <div class="mr-2 text-gray-400">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
      </div>
      <div class="grid place-items-end">
        <a-button
          @click="onSubmit"
          type="danger"
          class="ml-10 p-12 py-5 rounded-xl grid grid-flow-col place-content-center"
        >ثبت نامه</a-button>
      </div>
    </a-form>
  </div>
</template>
<script src="./GisheTabsFormThree.ts" lang="ts">
</script>
<style scoped>
</style>