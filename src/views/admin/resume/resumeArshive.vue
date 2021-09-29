/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1400/05/05-11:53
- ------------------------------------------------------------------------------------ *
- This file is more Filter of job offer module.
- All of the ارشیورزومه Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
<template>
  <div>
    <div class="bg-white grid h-screen">
      <div>
        <div class="grid grid-cols-1 mt-10 mr-8">
          <span class="text-3xl font-extrabold">آرشیو رزومه</span>
        </div>
        <div class="grid grid-cols-2 mt-5 mr-5">
          <div>
            <div class="grid grid-flow-col place-content-start">
              <div>
                <a-select
                  show-search
                  style="width:350px"
                  placeholder="جستجو عنوان شغل،شماره درخواست و"
                  option-filter-prop="children"
                >
                  <template #suffixIcon>
                    <i-search />
                  </template>
                  <a-select-option
                    :key="searchTitles.id"
                    v-for="searchTitles in searchTitle"
                    :value="searchTitles.name"
                  >{{searchTitles.name}}</a-select-option>
                </a-select>
              </div>
              <div class="mr-3">
                <TitleJobs />
              </div>
              <div class="mr-3">
                <ResumeSelectDropdown />
              </div>
              <div class="mr-3">
                <ResumeStatus />
              </div>
              <div class="mr-3">
                <ResumeFilter />
              </div>
            </div>
          </div>
          <div class="grid justify-end">
            <DrawerAddPlus />
          </div>
        </div>
        <div class="mt-5 mr-5">
          <ResumeTable />
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
  import DrawerAddPlus from "./DrawerAddPlus.vue";
  import { defineComponent, computed } from "vue";
  import TitleJobs from "./TitleJobs.vue";
  import ResumeStatus from "./ResumeStatus.vue";
  import ResumeFilter from "./ResumeFilter.vue";
  import ResumeSelectDropdown from "./resumeSelectDropdown.vue";
  import ResumeTable from "./resumeTable.vue";
  export default defineComponent({
    name: "resumeArshive",
    components: {
      ResumeTable,
      DrawerAddPlus,
      TitleJobs,
      ResumeSelectDropdown,
      ResumeStatus,
      ResumeFilter
    },
    setup() {
      /**
       * Gets called when the user clicks on the button
       *
       * @param {SyntheticEvent} even the react `SyntheticEvent`
       * @param {String} run resume arshive resume of examples
       * @public this is a public method
       * @alpha صفحه اصلی resume arsive
       * @returns searchTitle set change value
       */
      const store = useStore();
      store.dispatch("searchTitle/GetSearchTitle");
      const searchTitle = computed(() => store.state.searchTitle.searchTitle);
      return {
        searchTitle
      };
    }
  });
</script>
<style scoped></style>