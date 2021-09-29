/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the ارشیو رزومه دراور Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <AddIndividualUpdate />
  <div class="mt-5">
    <AForm :form="form" ref="formRef" :rules="rules" :model="formState" layout="vertical">
      <div class="grid grid-cols-2 gap-6">
        <AFormItem
          ref="title"
          name="title"
          class="font-normal"
          :label="$t('field.title')"
          has-feedback
        >
          <a-select
            show-search
            option-filter-prop="children"
            placeholder="انتخاب کنید"
            v-model:value="formState.title"
            value
            style="margin-left:70px"
          >
            <template #suffixIcon>
              <span></span>
            </template>
            <a-select-option
              :value="titles.name"
              v-for="(titles,index) in title"
              :key="titles.id"
            >{{titles.name}}</a-select-option>
          </a-select>
        </AFormItem>
        <AFormItem
          has-feedback
          ref="resume"
          name="resume"
          class="font-normal"
          :label="$t('field.resume')"
        >
          <a-select
            show-search
            option-filter-prop="children"
            placeholder="انتخاب کنید"
            v-model:value="formState.resume"
            value
            style="margin-left:70px"
          >
            <template #suffixIcon>
              <span></span>
            </template>
            <a-select-option
              :value="resumes.name"
              v-for="(resumes,index) in resume "
              :key="resumes.id"
            >{{resumes.name}}</a-select-option>
          </a-select>
        </AFormItem>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <AFormItem
          ref="name"
          name="name"
          class="font-normal"
          :label="$t('field.name')"
          has-feedback
        >
          <AInput
            v-model:value="formState.name"
            placeholder="نام خانوادگی واردکنید"
            autocomplete="on"
            type="text"
          />
        </AFormItem>
        <AFormItem
          has-feedback
          required
          ref="mobile"
          name="mobile"
          class="font-normal"
          :label="$t('field.mobile')"
        >
          <AInput v-model:value="formState.mobile" placeholder="موبایل واردکنید" autocomplete="on" />
        </AFormItem>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <AFormItem
          required
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
        <AFormItem has-feedback ref="education" name="education" :label="$t('field.education')">
          <a-select
            show-search
            option-filter-prop="children"
            placeholder="انتخاب کنید"
            v-model:value="formState.education"
            value
          >
            <template #suffixIcon>
              <span></span>
            </template>
            <a-select-option
              :value="educations.name"
              v-for="(educations,index) in education "
              :key="educations.id"
            >{{educations.name}}</a-select-option>
          </a-select>
        </AFormItem>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <AFormItem
          required
          ref="age"
          name="age"
          class="font-normal"
          :label="$t('field.age')"
          has-feedback
        >
          <AInput
            v-model:value="formState.age"
            placeholder="سن واردکنید"
            autocomplete="off"
            type="text"
          />
        </AFormItem>
        <div>
          <AFormItem name="sex" ref="sex" :label="$t('field.sex')">
            <a-radio-group class="mt-2">
              <a-radio value="آقا">آقا</a-radio>
              <a-radio value="خانم">خانم</a-radio>
            </a-radio-group>
          </AFormItem>
        </div>
      </div>
      <div>
        <AFormItem has-feedback ref="skill" name="skill" :label="$t('field.skill')">
          <a-select mode="multiple" placeholder="انتخاب کنید" v-model:value="formState.skill" value>
            <template #suffixIcon>
              <span></span>
            </template>
            <a-select-option
              :value="skills.name"
              v-for="(skills,index) in skill "
              :key="skills.id"
            >{{skills.name}}</a-select-option>
          </a-select>
        </AFormItem>
      </div>
      <div class="mt-3">
        <AFormItem
          has-feedback
          ref="description"
          name="description"
          class="font-normal"
          :label="$t('field.description')"
        >
          <AInput
            autocomplete="on"
            v-model:value="formState.description"
            value
            placeholder="توضیح واردکنید"
            class="py-5"
          />
        </AFormItem>
      </div>
      <div class="grid grid-flow-col place-content-end mt-10">
        <a-button
          type="danger"
          @change="RegisterForm"
          class="py-6 grid place-content-center"
          @click.prevent.stop="onSumbit"
        >
          <span class="text-white">ثبت اطلاعات متقاضی</span>
        </a-button>
        <a-button type="danger" class="py-6 mr-4 grid place-content-center" @click="closePage">
          <span class="text-white">بازگشت</span>
        </a-button>
      </div>
    </AForm>
  </div>
</template>
<script src="./AddIndividual.ts" lang="ts">
  /**
   * Gets called when the user clicks on the button
   * @alpha one page arshive resume drawer add applicant vue
   */
</script>
<style lang="scss">
</style>
