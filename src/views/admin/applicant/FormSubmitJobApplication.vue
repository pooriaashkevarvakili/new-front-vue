/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the درخواست استخدام فرم  Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <AForm :form="form" ref="formRef" :rules="rules" :model="formState" layout="vertical">
    <div class="grid grid-cols-2 gap-4">
      <AFormItem has-feedback ref="departeman" name="departeman" :label="$t('field.departeman')">
        <a-select show-search placeholder="انتخاب کنید" v-model:value="formState.departeman" value>
          <a-select-option
            :value="departemans.name"
            v-for="(departemans,index) in departeman "
            :key="departemans.id"
          >{{departemans.name}}</a-select-option>
        </a-select>
      </AFormItem>
      <AFormItem has-feedback ref="job" name="job" :label="$t('field.title')">
        <a-select
          v-model:value="formState.job"
          show-search
          placeholder="انتخاب کنید"
          option-filter-prop="children"
        >
          <a-select-option :key="jobs.id" v-for="jobs in job" :value="jobs.name">{{jobs.name}}</a-select-option>
        </a-select>
      </AFormItem>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <AFormItem has-feedback ref="semat" name="semat" :label="$t('field.semat')">
        <a-select
          v-model:value="formState.semat"
          show-search
          placeholder="انتخاب کنید"
          option-filter-prop="children"
        >
          <a-select-option
            :key="semats.id"
            v-for="semats in semat"
            :value="semats.name"
          >{{semats.name}}</a-select-option>
        </a-select>
      </AFormItem>
      <AFormItem has-feedback ref="mahal" name="mahal" :label="$t('field.mahal')">
        <a-select
          v-model:value="formState.mahal"
          show-search
          placeholder="انتخاب کنید"
          option-filter-prop="children"
        >
          <a-select-option
            :key="mahals.id"
            v-for="mahals in mahal"
            :value="mahals.name"
          >{{mahals.name}}</a-select-option>
        </a-select>
      </AFormItem>
    </div>
    <div>
      <AFormItem
        has-feedback
        ref="sharh"
        name="sharh"
        class="font-normal"
        :label="$t('field.sharh')"
      >
        <AInput
          autocomplete="on"
          v-model:value="formState.sharh"
          value
          placeholder="دررباره این موقعیت شغلی نیازمندی ها وشرایط لازم دراینجا توضیح دهید"
          class="py-10"
        />
      </AFormItem>
    </div>
    <div>
      <AFormItem has-feedback ref="skill" name="skill" :label="$t('field.skill')">
        <a-select mode="multiple" placeholder="انتخاب کنید" v-model:value="formState.skill" value>
          <a-select-option
            :value="skills.name"
            v-for="(skills,index) in skill "
            :key="skills.id"
          >{{skills.name}}</a-select-option>
        </a-select>
      </AFormItem>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <AFormItem has-feedback ref="education" name="education" :label="$t('field.educationneed')">
        <a-select show-search placeholder="انتخاب کنید" v-model:value="formState.education" value>
          <a-select-option
            :value="educations.name"
            v-for="(educations,index) in education "
            :key="educations.id"
          >{{educations.name}}</a-select-option>
        </a-select>
      </AFormItem>
      <AFormItem has-feedback ref="history" name="history" :label="$t('field.history')">
        <a-select show-search placeholder="انتخاب کنید" v-model:value="formState.history" value>
          <a-select-option
            :value="historys.name"
            v-for="(historys,index) in history "
            :key="historys.id"
          >{{historys.name}}</a-select-option>
        </a-select>
      </AFormItem>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <AFormItem has-feedback ref="sex" name="sex" :label="$t('field.sexApplicant')">
        <a-select show-search placeholder="انتخاب کنید" v-model:value="formState.sex" value>
          <a-select-option
            :value="sexs.name"
            v-for="(sexs,index) in sex "
            :key="sexs.id"
          >{{sexs.name}}</a-select-option>
        </a-select>
      </AFormItem>
      <AFormItem has-feedback ref="elat" name="elat" :label="$t('field.elat')">
        <a-select show-search placeholder="انتخاب کنید" v-model:value="formState.elat" value>
          <a-select-option
            :value="elats.name"
            v-for="(elats,index) in elat "
            :key="elats.id"
          >{{elats.name}}</a-select-option>
        </a-select>
      </AFormItem>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <AFormItem has-feedback ref="hoghugh" name="hoghugh" :label="$t('field.hoghugh')">
        <a-select show-search placeholder="انتخاب کنید" v-model:value="formState.hoghugh" value>
          <a-select-option
            :value="hoghughs.name"
            v-for="(hoghughs,index) in hoghugh "
            :key="hoghughs.id"
          >{{hoghughs.name}}</a-select-option>
        </a-select>
      </AFormItem>
      <AFormItem has-feedback ref="modat" name="modat" :label="$t('field.modat')">
        <a-select show-search placeholder="انتخاب کنید" v-model:value="formState.modat" value>
          <a-select-option
            :value="modats.name"
            v-for="(modats,index) in modat "
            :key="modats.id"
          >{{modats.name}}</a-select-option>
        </a-select>
      </AFormItem>
    </div>
  </AForm>
  <div class="mt-28 justify-end">
    <div class="grid grid-flow-col place-content-end">
      <div class="grid">
        <a-button @click="onClose" type="danger" class="py-6 ml-4 grid place-content-center">بازگشت</a-button>
      </div>
      <a-button
        @click.prevent.stop="validateForm"
        type="danger"
        class="py-6 grid place-content-center"
      >ثبت درخواست استخدام</a-button>
    </div>
  </div>
</template>
<script src="./FormSubmitJobApplication.ts">
</script>
<style scoped></style>