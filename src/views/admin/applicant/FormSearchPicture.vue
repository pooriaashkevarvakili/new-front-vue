/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/13-15:54
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module. - All of the ثبت درخواست استخدام Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div class="grid grid-cols-2 mt-3 mr-10">
    <a-auto-complete
      v-model:value="value"
      :dropdown-match-select-width="false"
      :dropdown-style="{width:'300px'}"
      option-label-prop="value"
    >
      <template #dataSource>
        <a-select-opt-group v-for="group in dataSource" :key="group.title">
          <a-select-option v-for="opt in group.children" :key="opt.title">
            <div class="flex">
              <img :src="opt.src" class="w-12 h-12" />
              <div class="flex-1 mr-4">
                <div>
                  <span class="font-bold font-normal">{{opt.title}}</span>
                </div>

                <span class="font-normal text-xs">{{opt.name}}</span>
              </div>
              <badge
                class="bg-gray-200 rounded-xl text-sm mt-1 p-2 grid grid-flow-col place-content-center"
              >{{opt.count}}</badge>
            </div>
          </a-select-option>
        </a-select-opt-group>
      </template>
      <a-input placeholder="انتخاب کنید">
        <template #suffix>
          <i-search />
        </template>
      </a-input>
    </a-auto-complete>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { useStore } from "vuex";
  import { defineComponent, ref, computed } from "vue";
  export default defineComponent({
    name: "formSearchPicture",
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run form search picture applicant of examples
       * @public this is a public method
       * @alpha درخواست استخدام فرم سرچ با تمامی اطلاعات تکمیل درخواست
       * @beta profile select  search-box
       * @returns change data store
       */
      const dataSource = [
        {
          children: [
            {
              src: "src/assets/images/img/image2.jpg",
              title: "علیرضا محمدی",
              count: "990234",
              name: "حسابدار"
            },
            {
              src: "src/assets/images/img/image3.jpg",
              title: "نیمافدایی",
              count: "983001",
              name: "کارشناس بازرگانی"
            },
            {
              src: "src/assets/images/img/image12.jpg",
              title: " نیلوفررحیمی",
              count: "94530",
              name: "مسئول دفتر"
            },
            {
              src: "src/assets/images/img/image13.jpg",
              title: " سعیدساداتی",
              count: "99001",
              name: "برنامه نویس فرانت"
            }
          ]
        }
      ];
      const store = useStore();
      const image = computed(() => store.state.image.image);
      store.dispatch("image/GetImage");
      return {
        dataSource,
        value: ref(""),
        image
      };
    }
  });
</script>
<style></style>