/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/01/31-8:40
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module. - All of the درخواست اطلاعات بیشتر جزئیات Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

<template>
  <div class="mt-2 grid grid-rows-2">
    <a-timeline class="mr-4 mt-5" mode="right">
      <a-timeline-item>
        <template #dot>
          <i-check-one class="text-green-400" theme="outline" size="22" />
        </template>
        <div class="mr-3 flex justify-start mr-3">
          <div class="flex-shrink-0">
            <img src="@/assets/images/img/image3.jpg" class="w-10 h-10 mr-3" />
          </div>
          <div>
            <div class="mr-2 text-gray-400 mt-1 font-normal text-xs">10:45-9خرداد 98</div>
            <div>
              <span class="font-normal mr-1">تایید شده توسط حسین مجیدی نژاد</span>
            </div>
            <div class="mt-2">
              <span class="bg-gray-200 text-gray-400 text-xs rounded-xl p-2">سرپرست حسابداری</span>
            </div>
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <i-check-one class="text-green-400" theme="outline" size="22" />
        </template>
        <div class="mr-3 flex justify-start">
          <div class="flex-shrink-0">
            <img src="@/assets/images/img/image2.jpg" class="w-10 h-10 mr-3" />
          </div>
          <div>
            <div class="mr-2 text-gray-400 mt-1 font-normal text-xs">10:45-9خرداد 98</div>
            <div>
              <span class="font-normal mr-1">تاییدشده توسط نیلوفررحیمی</span>
            </div>
            <div class="mt-2">
              <span class="bg-gray-200 text-gray-400 text-xs rounded-xl p-2">مدیرحسابداری</span>
            </div>
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <i-check-one class="text-green-400" theme="outline" size="22" />
        </template>
        <div class="mr-3 flex justify-start mr-3">
          <div class="flex-shrink-0">
            <img src="@/assets/images/img/image8.jpg" class="w-10 h-10 mr-3" />
          </div>
          <div>
            <div class="mr-3 mt-1 font-normal text-xs">10:45-9خرداد 98</div>
            <div>
              <span class="font-normal mr-1">تاییدشده توسط نیلوفررحیمی</span>
            </div>
            <div class="mt-2">
              <span class="bg-gray-200 text-xs rounded-xl p-2">مدیرمنابع انسانی</span>
            </div>
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <i-check-one class="text-green-400" theme="outline" size="22" />
        </template>
        <div class="mr-3 flex justify-start mr-3">
          <div class="flex-shrink-0">
            <img src="@/assets/images/img/image1.jpg" class="w-10 h-10 mr-3" />
          </div>
          <div>
            <div class="mr-2 mt-1 font-normal text-xs">10:45-9خرداد 98</div>
            <div class>
              <span
                class="text-black font-medium mr-1"
              >منتشرشده در سایت هاکوپیان و ایران تلنت توسط مینارضاییان</span>
            </div>
            <div class="mt-2">
              <span class="bg-gray-200 text-xs rounded-xl p-2">سرپرست استخدام</span>
            </div>
          </div>
        </div>
      </a-timeline-item>
    </a-timeline>
  </div>
  <div class="grid grid-flow-col place-content-start -mt-6">
    <a-button @click="showModal" type="danger" class="grid place-content-center mr-2 py-6">بازگشت</a-button>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "details",
    setup(props, context) {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run details applicant of examples
       * @public this is a public method
       * @alpha اطلاعات بیشتر بخش جزئیات درخواست استخدام
       * @beta  اطلاعات تایم لاین باپروفایل وکاری که میکند
       * @return showmodal value change modal
       */
      const visible = ref(false);
      const showModal = () => {
        /**
         * sucess event emit
         */
        context.emit("showModal", (visible.value = false));
      };
      return {
        showModal,
        visible
      };
    }
  });
</script>
<style></style>