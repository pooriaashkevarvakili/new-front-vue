/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the فرم دبیرخانه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template >
  <div>
    <a-form :rules="rules" :model="formState" ref="formRefOne">
      <div class="mr-10">
        <a-form-item
          class="mb-1 font-bold"
          :labelCol="{span: 4}"
          :label="$t('field.titleLetter')"
          required
        >
          <a-radio-group class v-model:value="value">
            <div class="grid grid-flow-col mr-10">
              <a-radio class="font-medium" :value="1">ورودی</a-radio>

              <a-radio
                class="font-normal mr-14 text-gray-400"
                v-for="titleLetters in titleLetter"
                :value="titleLetters.name"
              >{{titleLetters.name}}</a-radio>
            </div>
          </a-radio-group>
        </a-form-item>
        <div class="text-gray-400 font-normal">درگیشه اطلاعات نامه وارده ثبت می شود</div>
      </div>
      <div class="bg-gray-50 mr-5 p-5">
        <a-form-item
          ref="andicator"
          name="andicator"
          class="mb-1 font-bold"
          :labelCol="{span: 4}"
          :wrapperCol="{span:6}"
          :label="$t('field.andicator')"
          has-feedback
        >
          <div class="mr-9">
            <a-select placeholder="اندیکاتورواردکنید" v-model:value="formState.andicator">
              <a-select-option
                v-for="andicators in andiactor "
                :value="andicators.name"
                :key="andicators.id"
              >{{andicators.name}}</a-select-option>
            </a-select>
          </div>
        </a-form-item>
        <div class="text-gray-400 font-medium">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
      </div>
      <div class="mr-6">
        <a-form-item
          has-feedback
          ref="numberLetter"
          name="numberLetter"
          class="mb-1 font-bold"
          :labelCol="{span: 4}"
          :wrapperCol="{span:6}"
          :label="$t('field.numberLetter')"
        >
          <div class="mr-9">
            <a-input placeholder="شماره نامه واردکنید" v-model:value="formState.numberLetter" />
          </div>
        </a-form-item>
        <div class="text-gray-400 font-medium">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
      </div>
      <div class="mr-2 bg-gray-50 p-5">
        <a-form-item
          has-feedback
          ref="letterDiscription"
          name="letterDiscription"
          class="mb-1 font-bold"
          :labelCol="{span: 4}"
          :wrapperCol="{span:14}"
          :label="$t('field.letterDiscription')"
        >
          <div class="mr-9">
            <a-input placeholder="موضوع نامه واردکنید" v-model:value="formState.letterDiscription" />
          </div>
        </a-form-item>
        <div class="text-gray-400 font-medium">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
      </div>
      <div class="mr-4">
        <a-form-item
          has-feedback
          ref="letterDate"
          name="letterDate"
          class="mb-1 font-bold"
          :labelCol="{span: 4}"
          :wrapperCol="{span:6}"
          :label="$t('field.letterDate')"
        >
          <div class="mr-9">
            <a-input placeholder="تاریخ نامه واردکنید" v-model:value="formState.letterDate" />
          </div>
        </a-form-item>
        <div class="text-gray-400 font-medium">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
      </div>
      <div class="bg-gray-50 p-5">
        <a-form-item
          has-feedback
          ref="letterFile"
          name="letterFile"
          class="mb-1 font-bold"
          :labelCol="{span: 4}"
          :wrapperCol="{span:6}"
          :label="$t('field.letterFile')"
        >
          <div class="mr-9">
            <a-select placeholder="پرونده نامه واردکنید" v-model:value="formState.letterFile">
              <a-select-option
                v-for="letterFiles in leterfile "
                :value="letterFiles.name"
                :key="letterFiles.id"
              >{{letterFiles.name}}</a-select-option>
            </a-select>
          </div>
        </a-form-item>
        <div class="text-gray-400 font-medium">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
      </div>
      <div class="grid grid-cols-6">
        <div>
          <a-form-item class="font-bold mr-6 mb-1" :label="$t('field.informationSend')"></a-form-item>
          <div class="text-gray-400 font-medium mr-4">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
        </div>
        <div class="col-span-3 grid grid-cols-2">
          <div class="mr-9">
            <a-form-item
              has-feedback
              ref="howsend"
              name="howsend"
              :label="$t('field.howsend')"
              class="grid"
            >
              <a-select v-model:value="formState.howsend">
                <a-select-option
                  v-for="howsends in howSend "
                  :key="howsends.id"
                  :value="howsends.name"
                >{{howsends.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </div>

          <div class="mr-12">
            <a-form-item
              has-feedback
              ref="place"
              name="place"
              class="grid"
              :label="$t('field.place')"
            >
              <a-select v-model:value="formState.place">
                <a-select-option
                  v-for="places in place "
                  :key="places.id"
                  :value="places.name"
                >{{places.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 p-5">
        <a-form-item
          has-feedback
          ref="deleviry"
          name="deleviry"
          class="mb-1 font-bold"
          :labelCol="{span: 4}"
          :wrapperCol="{span:6}"
          :label="$t('field.deleviry')"
        >
          <a-select placeholder="تحویل دهنده واردکنید" v-model:value="formState.deleviry">
            <a-select-option
              v-for="delevirys in deleviry "
              :value="delevirys.name"
              :key="delevirys.id"
            >{{delevirys.name}}</a-select-option>
          </a-select>
        </a-form-item>
        <div class="text-gray-400 font-medium">تاریخ راواردکنیدویاازروی تقویم انتخاب کنید</div>
      </div>
      <div class="grid place-content-end grid-flow-col ml-5">
        <a-button
          class="ml-5 p-8 rounded-xl py-5 grid grid-flow-col place-content-center text-red-500"
        >نامه جدید</a-button>
        <a-button
          class="p-8 rounded-xl py-5 grid grid-flow-col place-content-center"
          type="danger"
          @click="onSumbit()"
        >ثبت نامه</a-button>
      </div>
      <div>
        <a-modal
          class="modal-custom"
          width="587px"
          :body-style="{'height':'62vh'}"
          v-model:visible="visible"
          @ok="handleOk"
          :footer="null"
        >
          <template #title>
            <div class="grid place-items-end">
              <div class="border border-custom border-solid rounded-full -ml-0.5 mt-2.5 w-10 h-10">
                <span></span>
              </div>
            </div>
            <div class="grid mt-5 grid-flow-col place-content-center">
              <i-check-one class="text-green-400" size="24" />
              <p class="text-3xl mr-2">نامه وارده با موفقیت ثبت شد</p>
            </div>
          </template>
          <ModalSabetBasicInformationForm />
        </a-modal>
      </div>
    </a-form>
  </div>
</template>
<script src="./BasicInformation.ts">
</script>
<style lang="scss" scoped >
  .border-custom {
    border-color: #333333;
  }
</style>