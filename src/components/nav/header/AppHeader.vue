<script setup>
import { RouterLink } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
</script>
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/imgs/icons/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld title="Noty" sub-title="Your best friend to share and note something" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create">Create a Note</RouterLink>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped></style>
