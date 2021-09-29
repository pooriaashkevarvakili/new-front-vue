/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/03/28-14:43
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the time Line  Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <span class="text-black font-extrabold mr-5">آخرین فعالیت ها</span>
    <a-timeline class="mr-4 mt-5" mode="right">
      <a-timeline-item>
        <template #dot>
          <i-dot class="text-gray-200" theme="outline" size="22" />
        </template>
        <div class="mr-3 flex justify-start mr-3">
          <div class="flex-shrink-0">
            <img src="@/assets/images/img/image3.jpg" class="w-10 h-10 mr-1" />
          </div>
          <div>
            <div class="mr-2 text-gray-400 mt-1 font-normal text-xs">10:45-9خرداد 98</div>
            <div>
              <span class="text-black font-normal text-xs">علیرضا</span>
              <span class="text-xs font-normal text-gray-400 mr-1">رزومه متقاضی را دانلود کرد</span>
            </div>
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <i-dot class="text-gray-200" theme="outline" size="22" />
        </template>
        <div class="mr-3 flex justify-start">
          <div class="flex-shrink-0">
            <img src="@/assets/images/img/image2.jpg" class="w-10 h-10 mr-1" />
          </div>
          <div>
            <div class="mr-2 text-gray-400 mt-1 font-normal text-xs">10:45-9خرداد 98</div>
            <div>
              <span class="text-black font-normal text-xs mr-1">علیرضا</span>
              <span class="text-xs font-normal text-gray-400 mr-1">رزومه متقاضی را دانلود کرد</span>
            </div>
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <i-dot class="text-gray-200" theme="outline" size="22" />
        </template>
        <div class="mr-3 flex justify-start mr-3">
          <div class="flex-shrink-0">
            <img src="@/assets/images/img/image8.jpg" class="w-10 h-10 mr-1" />
          </div>
          <div>
            <div class="mr-3 text-gray-400 mt-1 font-normal text-xs">10:45-9خرداد 98</div>
            <div>
              <span class="font-normal text-xs mr-1">علیرضا</span>
              <span class="text-xs font-normal text-gray-400 mr-1">رزومه متقاضی را دانلود کرد</span>
            </div>
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <i-dot class="text-gray-200" theme="outline" size="22" />
        </template>
        <div class="mr-3 flex justify-start mr-3">
          <div class="flex-shrink-0">
            <img src="@/assets/images/img/image1.jpg" class="w-10 h-10 mr-1" />
          </div>
          <div>
            <div class="mr-2 text-gray-400 mt-1 font-normal text-xs">10:45-9خرداد 98</div>
            <div class>
              <span class="text-black font-medium text-xs mr-1">علیرضا</span>
              <span class="text-xs font-medium text-gray-400 mr-1">رزومه متقاضی را دانلود کرد</span>
            </div>
          </div>
        </div>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "TimeLineForm",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run timeline modal joboffer of examples
       * @public this is a public method
       * @alpha دیتاهای تایم لاین در مودال joboffer
       * @beta time line item ,profille ,date
       */
    }
  });
</script>
<style lang="scss">
</style>
