<script setup>
import { useRoute } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const route = useRoute()

const layouts = {
  default: DefaultLayout
}
</script>

<template>
  <notifications />
  <component :is="layouts[route.meta.layout]"> </component>
</template>

<style lang="scss" scoped></style>
