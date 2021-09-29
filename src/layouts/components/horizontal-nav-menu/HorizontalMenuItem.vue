<!-- =========================================================================================
    File Name: VerticalNavMenuItem.vue
    Description: Vertical NavMenu item component.
    Component Name: VerticalNavMenuItem
    ----------------------------------------------------------------------------------------
    Item Name: Hacoupian - Technology Dep.
      Author: Ahmadreza Azizan

========================================================================================== -->

<template>
  <a-menu-item>
    <router-link :to="model.url || `/${model.id}`" class="flex items-center">
      <component size="1.5em" :is="model.icon" class="ml-3" v-if="model.icon"/>
      <strong>{{ $t(model.name) }}</strong>
    </router-link>
  </a-menu-item>
</template>

<script lang="ts">
import {toRaw} from 'vue'
export default {
  name: 'v-nav-menu-item',
  props: {
    model: {type: Object, default: {}},
  },
  computed: {
    getIcon(): String {
      return `i-${this.model.icon}`;
    }
  }
}

</script>

