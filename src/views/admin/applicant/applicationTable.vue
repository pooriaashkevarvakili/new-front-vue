/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-12:50
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the درخواست استخدام Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <div class="bg-white grid h-screen">
      <div>
        <div class="grid grid-cols-1 mt-10 mr-8">
          <span class="text-3xl font-extrabold">درخواست استخدام</span>
        </div>
        <div class="grid grid-cols-2 mt-5 mr-5">
          <div>
            <div class="grid grid-flow-col place-content-start">
              <a-select
                show-search
                style="width:350px"
                placeholder="جستجوعنوان شغل ،دپارتمان یا محل کار"
                option-filter-prop="children"
              >
                <template #suffixIcon>
                  <i-search />
                </template>
                <a-select-option
                  :key="searchJobs.id"
                  v-for="searchJobs in searchJob"
                  :value="searchJobs.name"
                >{{searchJobs.name}}</a-select-option>
              </a-select>

              <div class="mr-3">
                <DropdownRequestStatus />
              </div>
            </div>
          </div>
          <div class="grid justify-end">
            <DrawerSubmitJobApplication />
          </div>
        </div>
        <div class="mt-5 mr-5">
          <TableRequestStatus />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @param
   * @example
   *
   */
  import { useStore } from "vuex";
  import { defineComponent, computed } from "vue";
  import DropdownRequestStatus from "./DropdownRequestStatus.vue";
  import DrawerSubmitJobApplication from "./DrawerSubmitJobApplication.vue";
  import TableRequestStatus from "./TableRequestStatus.vue";
  export default defineComponent({
    name: "applicationTable",
    components: {
      DropdownRequestStatus,
      DrawerSubmitJobApplication,
      TableRequestStatus
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run table application applicant of examples
       * @public this is a public method
       * @alpha درخواست استخدام بادیتا وجدول
       * @beta search select box drawer ثبت درخواست استخدام
       * @returns change store state
       */ 
      const store = useStore();
      store.dispatch("searchJob/GetSearchJob");
      const searchJob = computed(() => store.state.searchJob.searchJob);
      return {
        searchJob
      };
    }
  });
</script>
<style scoped>
</style>