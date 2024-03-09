<script setup>
import { storeToRefs } from 'pinia'

import { useNotesStore } from '@/stores/notes'

import AppSwitcher from '@/components/ui/AppSwitcher.vue'

const { sort } = storeToRefs(useNotesStore())
</script>

<template>
  <div class="sort-wrapper">
    <h2>Sort:</h2>
    <AppSwitcher :disabled="sort.sortByCreatedTime" v-model="sort.sortByTitle" label="By Title" />
    <AppSwitcher
      class="mt-1"
      :disabled="sort.sortByTitle"
      v-model="sort.sortByCreatedTime"
      label="By Created Time"
    />
  </div>
</template>
