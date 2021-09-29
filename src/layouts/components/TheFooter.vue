<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Hacoupian - Technology Dep.
      Author: Ahmadreza Azizan

========================================================================================== -->


<template functional>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <span>COPYRIGHT @ {{ new Date().getFullYear() }} <a href="https://1.envato.market/Hacoupian_admin" target="_blank"
                                                        rel="nofollow">Ahmadreza Azizan</a>, All rights Reserved</span>
    <span class="md:flex hidden items-center">
            <span>Hand-crafted & Made with</span>
            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2"/>
        </span>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "the-footer",
  props: {
    classes: {
      type: String,
    },
  }
})
</script>
