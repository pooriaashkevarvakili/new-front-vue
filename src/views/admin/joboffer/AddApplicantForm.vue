/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:27
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال فرم افزودن اطلاعات متقاضی Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-1">
    <div>
      <AForm :form="form" ref="formRef" :rules="rules" :model="formState" layout="vertical">
        <div class="grid grid-cols-2 mt-5 gap-6">
          <AFormItem
            ref="email"
            name="email"
            class="font-normal"
            :label="$t('field.email')"
            has-feedback
          >
            <AInput
              v-model:value="formState.email"
              placeholder="ایمیل واردکنید"
              autocomplete="on"
              type="text"
            />
          </AFormItem>
          <AFormItem
            has-feedback
            ref="mobile"
            name="mobile"
            class="font-normal"
            :label="$t('field.mobile')"
          >
            <AInput
              v-model:value="formState.mobile"
              placeholder="موبایل واردکنید"
              autocomplete="on"
            />
          </AFormItem>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <AFormItem ref="age" name="age" class="font-normal" :label="$t('field.age')" has-feedback>
            <AInput
              v-model:value="formState.age"
              placeholder="سن واردکنید"
              autocomplete="off"
              type="text"
            />
          </AFormItem>
          <a-form-item
            ref="education"
            name="education"
            class="font-normal"
            :label="$t('field.education')"
            has-feedback
          >
            <a-select v-model:value="formState.education" show-search placeholder="انتخاب کنید">
              <a-select-option
                v-model="formState.education"
                :key="educations.id"
                v-for="educations in education"
                :value="educations.name"
              >{{educations.name}}</a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <div>
          <AFormItem
            has-feedback
            ref="skillForm"
            name="skillForm"
            class="font-normal"
            :label="$t('field.skill')"
          >
            <a-select
              v-model:value="formState.skillForm"
              mode="tags"
              show-search
              placeholder="انتخاب کنید"
              option-filter-prop="children"
            >
              <a-select-option
                v-model="formState.skillForm"
                :key="skillForms.id"
                v-for="skillForms in skillForm"
                :value="skillForms.name"
              >{{skillForms.name}}</a-select-option>
            </a-select>
          </AFormItem>
        </div>
        <addApplicantFormSkills />
        <div class="mt-5">
          <AFormItem
            class="font-normal"
            ref="description"
            name="description"
            :label="$t('field.description')"
            has-feedback
          >
            <AInput
              class="py-6"
              v-model:value="formState.description"
              placeholder="توضیحات"
              autocomplete="on"
              type="text"
            />
          </AFormItem>
        </div>
        <div class="grid grid-flow-col place-content-start">
          <a-button
            type="danger"
            @change="RegisterForm"
            class="py-5 grid place-content-center"
            @click.prevent.stop="onSumbit"
          >ثبت اطلاعات</a-button>
          <a-button
            type="danger"
            class="py-5 mr-3 grid place-content-center"
            @click="modalClose"
          >بازگشت</a-button>
        </div>
      </AForm>
    </div>
  </div>
</template>
<script src="./AddApplicantForm.ts">
  /**
   * Gets called when the user clicks on the button
   *
   * @param {SyntheticEvent} even the react `SyntheticEvent`
   * @param {String} run form joboffer of examples
   * @public this is a public method
   * @alpha form modal افزودن متقاضی
   * @beta form item that email,age,mobile,description,skillform vue-js
   * 
   */
</script>
<style>
</style>
