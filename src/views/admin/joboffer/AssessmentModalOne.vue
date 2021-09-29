/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/02/13-14:33
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the مودال    ارزیابی Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-1">
    <div>
      <a-card>
        <div class="grid">
          <div class="grid grid-flow-col justify-between">
            <div class="grid grid-flow-col justify-start mr-3">
              <div class>
                <img src="@/assets/images/img/image12.jpg" class="w-16 h-16 rounded-full" />
              </div>
              <div class="mr-3 space-y-1">
                <div class="text-xs text-gray-400">10:45-9خرداد 98</div>
                <div class="grid grid-flow-col font-bold">
                  <div class="text-green-400 ml-2">رد شده</div>
                  <div class="text-gray-500">توسط حسین کلایی</div>
                </div>
                <div>
                  <span
                    class="rounded-md mt-1 text-xs px-2 py-1 font-bold text-gray-400 bg-gray-200"
                  >مدیرحسابداری</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div class="grid grid-flow-col cursor-pointer">
                  <i-redo class="text-blue-400" />
                  <span class="mr-1 text-blue-400 text-xs font-bold">تجدید نظر</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { defineComponent, ref } from "vue";
  import TimeLineForm from "./TimeLineForm.vue";
  export default defineComponent({
    name: "AssessmentModalOne",
    components: {
      TimeLineForm
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run modal joboffer of examples
       * @public this is a public method
       * @alpha مودال ارزیابی  مدیر مستقیم و مراحلش joboffer
       * @beta تاریخ پروفایل ومشخصات
       *
       */
      return {
        activeKey: ref("1")
      };
    }
  });
</script>

<style lang="scss">
</style>
