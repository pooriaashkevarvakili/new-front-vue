<template>
  <div>
    <div class="mt-2">
      <div>
        <AForm ref="formRef" layout="vertical" :rules="rules" :model="formState" :form="form">
          <div class="grid grid-rows-2">
            <div>
              <div class="grid grid-cols-1 bg-gray-200 py-8">
                <a-checkbox class="mr-4">استفاده ازکارمندان فعلی سازمان</a-checkbox>
                <span
                  class="mr-10 mt-1"
                >با انتخاب این گزینه می توانید فردی از داخل سازمان برای این عنوان شغلی معرفی کنید</span>
                <FormSearchPicture />
              </div>
              <div class="grid grid-cols-2 mt-5 gap-10">
                <AFormItem has-feedback ref="hoghugh" name="hoghugh" :label="$t('field.hoghugh')">
                  <a-select
                    show-search
                    placeholder="انتخاب کنید"
                    v-model:value="formState.hoghugh"
                    value
                  >
                    <a-select-option
                      :value="hoghughs.name"
                      v-for="(hoghughs,index) in hoghugh "
                      :key="hoghughs.id"
                    >{{hoghughs.name}}</a-select-option>
                  </a-select>
                </AFormItem>
                <AFormItem has-feedback ref="modat" name="modat" :label="$t('field.modat')">
                  <a-select
                    show-search
                    placeholder="انتخاب کنید"
                    v-model:value="formState.modat"
                    value
                  >
                    <a-select-option
                      :value="modats.name"
                      v-for="(modats,index) in modat "
                      :key="modats.id"
                    >{{modats.name}}</a-select-option>
                  </a-select>
                </AFormItem>
              </div>
              <div>
                <a-checkbox>نمایش حقوق به متقاضی</a-checkbox>
              </div>
              <div class="grid grid-cols-1 mt-5">
                <AFormItem
                  has-feedback
                  ref="mahalenteshar"
                  name="mahalenteshar"
                  :label="$t('field.mahalenteshar')"
                >
                  <a-select
                    mode="multiple"
                    placeholder="انتخاب کنید"
                    v-model:value="formState.mahalenteshar"
                    value
                  >
                    <a-select-option
                      :value="resumes.name"
                      v-for="(resumes,index) in resume"
                      :key="resumes.id"
                    >{{resumes.name}}</a-select-option>
                  </a-select>
                </AFormItem>
              </div>
            </div>
          </div>
          <div class="grid -mt-16 place-content-end grid-flow-col">
            <a-button
              @click="onClose"
              class="ml-3 py-6 grid grid-flow-col place-content-center"
              type="danger"
            >لغودرخواست</a-button>
            <a-button
              class="py-6 grid grid-flow-col place-content-center"
              type="danger"
              @click="onSubmit"
            >تاییدوارسال به کارشناسی استخدام</a-button>
          </div>
        </AForm>
      </div>
    </div>
  </div>
</template>
<script src="./CompleteTheApplication.ts" lang="ts">
</script>
<style></style>