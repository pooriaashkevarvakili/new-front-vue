/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:27
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the فرم مصاحبه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div class="grid grid-cols-1">
    <div>
      <AForm :form="form" ref="formRef" :rules="rules" :model="formState" layout="vertical">
        <div class="grid grid-cols-2 gap-6">
          <AFormItem has-feedback ref="date" name="date" :label="$t('field.date')">
            <a-date-picker
              placeholder="انتخاب کنید"
              v-model:value="formState.date"
              value
              style="width:210px"
            >
              <template #suffixIcon>
                <span></span>
              </template>
            </a-date-picker>
          </AFormItem>
          <AFormItem
            has-feedback
            ref="timeinterview"
            name="timeinterview"
            :label="$t('field.timeinterview')"
          >
            <a-time-picker
              v-model:value="formState.timeinterview"
              value
              class="w-5/12"
              placeholder="شروع"
            >
              <template #suffixIcon>
                <span></span>
              </template>
            </a-time-picker>
            <span class="mr-2">تا</span>
            <a-time-picker
              v-model:value="formState.timeinterview"
              placeholder="پایان"
              value
              class="mr-1 w-5/12"
            >
              <template #suffixIcon>
                <span></span>
              </template>
            </a-time-picker>
          </AFormItem>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <AFormItem
            has-feedback
            ref="interviews"
            name="interviews"
            class="font-normal"
            :label="$t('field.interviews')"
          >
            <a-select
              v-model:value="formState.interviews"
              show-search
              placeholder="انتخاب کنید"
              option-filter-prop="children"
            >
              <template #suffixIcon>
                <span></span>
              </template>
              <a-select-option
                :value="interview.name"
                v-for="(interview,index) in interviews"
                :key="interview.id"
              >{{interview.name}}</a-select-option>
            </a-select>
          </AFormItem>
          <AFormItem
            has-feedback
            ref="location"
            name="location"
            class="font-normal"
            :label="$t('field.location')"
          >
            <a-select
              show-search
              option-filter-prop="children"
              placeholder="انتخاب کنید"
              v-model:value="formState.location"
              value
            >
              <template #suffixIcon>
                <span></span>
              </template>
              <a-select-option
                :value="locations.name"
                v-for="(locations,index) in location"
                :key="locations.id"
              >{{locations.name}}</a-select-option>
            </a-select>
          </AFormItem>
        </div>
        <div class="grid grid-cols-2 gap-10">
          <AFormItem
            has-feedback
            name="noteInterview"
            ref="noteInterview"
            :label="$t('field.note')"
          >
            <AInput v-model:value="formState.noteInterview" placeholder="یادداشت واردکنید" />
          </AFormItem>
          <InterViewTwoFormOne />
        </div>
        <InterViewTwoFormTwo />
        <div class="grid grid-flow-col place-content-start mt-12">
          <a-button
            type="danger"
            class="py-5 grid place-content-center"
            @click.prevent.stop="onSumbit()"
          >ثبت زمان مصاحبه</a-button>
          <a-button
            type="danger"
            class="py-5 mr-4 grid place-content-center"
            @click="modalClose"
          >بازگشت</a-button>
        </div>
      </AForm>
    </div>
  </div>
</template>
<script src="./InterViewTwoForm.ts">
</script>
<style>
</style>
