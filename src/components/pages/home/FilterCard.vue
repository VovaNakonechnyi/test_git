<script setup>
import { storeToRefs } from 'pinia'

import { useNotesStore } from '@/stores/notes'

import AppSwitcher from '@/components/ui/AppSwitcher.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

const { filter, categories } = storeToRefs(useNotesStore())
</script>

<template>
  <div class="filter-wrapper">
    <h2>Filter:</h2>
    <AppSelect v-model="filter.filteredByCategory" :options="categories" label="By Categories" />
    <AppSwitcher class="mt-1" v-model="filter.filteredByFavourite" label="By Favourite" />
  </div>
</template>
