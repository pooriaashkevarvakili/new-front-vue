<template>
  <div class="flex items-stretch w-full cursor-pointer p-2">
    <AAvatar :size="48" class="flex mb-4" style="background-color: rgb(250 250 250)">
      <i-user size="1em" fill="grey" />
    </AAvatar>
    <div class="flex-1 mr-4">
      <div>
        <strong>{{ model.name }}</strong>
      </div>
      <i>{{ model.position }}</i>
    </div>
    <AButton size="small" type="link">{{ $t('dashboard.send-greeting') }}</AButton>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { User } from "@/store/interface/user";

export default {
  name: "BirthListItem",
  props: {
    model: Object as PropType<User>
  }
};
</script>

