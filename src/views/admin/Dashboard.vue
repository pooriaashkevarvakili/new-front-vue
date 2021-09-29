<template>
  <div>
    <div class="flex items-center">
      <div class="flex-1">
        <div class="font-bold">{{ dearName }}</div>
        <div>{{ $t('dashboard.welcome') }}</div>
      </div>
      <div>
        <AButton type="danger" ghost>
          <div class="flex">
            <i-plus class="flex" size="1.5em" />
            <span class="font-bold flex">{{ $t('dashboard.add-widget') }}</span>
          </div>
        </AButton>
      </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <DashCard>
        <Today />
      </DashCard>
      <DashCard>
        <Entrance />
      </DashCard>
      <DashCard>
        <Free />
      </DashCard>
      <DashCard>
        <TaskProgress />
      </DashCard>
      <DashCard>
        <MyProfile />
      </DashCard>
      <DashCard :title="$t('dashboard.last-tasks')">
        <LastTasks />
      </DashCard>
      <DashCard :title="$t('dashboard.last-notify')">
        <LastNotify />
      </DashCard>
      <DashCard :title="$t('dashboard.today-birthday')">
        <TodayBirthday />
      </DashCard>
      <DashCard :title="$t('dashboard.today-birthday')">
        <TodayBirthday />
      </DashCard>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, computed } from "vue";
import { getUserData } from "@/services/login";
import { useI18n } from "vue-i18n";
import DashCard from "@/components/card/DashCard.vue";
import Today from "@/views/admin/dashboard/Today.vue";
import Entrance from "@/views/admin/dashboard/Entrance.vue";
import Free from "@/views/admin/dashboard/Free.vue";
import TaskProgress from "@/views/admin/dashboard/TaskProgress.vue";
import LastTasks from "@/views/admin/dashboard/LastTasks.vue";
import LastNotify from "@/views/admin/dashboard/LastNotify.vue";
import MyProfile from "@/views/admin/dashboard/MyProfile.vue";
import TodayBirthday from "@/views/admin/dashboard/TodayBirthday.vue";

export default {
  components: {
    TodayBirthday,
    MyProfile,
    LastNotify,
    LastTasks,
    TaskProgress,
    Free,
    Entrance,
    Today,
    DashCard
  },
  setup() {
    const { t } = useI18n();
    const dearName = computed(
      () => `${getUserData().firstname} ${t("dashboard.dear")} !`
    );
    return {
      dearName
    };
  }
};
</script>
