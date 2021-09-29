<template>
  <div class="relative">
    <div>
      <a-menu theme="dark" mode="inline">
        <HNavMenuItem :model="item" v-for="(item , index) in menus" :key="index"/>
      </a-menu>
    </div>
  </div>
</template>

<script lang="ts">
import HNavMenuGroup from "./HorizontalMenuGroup.vue"
import HNavMenuItem from "./HorizontalMenuItem.vue"
import {defineComponent} from 'vue'
import menus from '@/menus'
import {toRaw} from 'vue';

export default defineComponent({
  name: 'HorizontalMenu',
  props: {
    model: {}
  },
  components: {
    HNavMenuGroup,
    HNavMenuItem,
  },
  setup(props) {
    return {
      menus: toRaw(menus)
    }
  }
})
</script>
