<script setup>
import { storeToRefs } from 'pinia'

import { useNotesStore } from '@/stores/notes'

import NoteCard from '@/components/pages/home/NoteCard.vue'
import FilterCard from '@/components/pages/home/FilterCard.vue'
import SortCard from '@/components/pages/home/SortCard.vue'

const { generalNotes } = storeToRefs(useNotesStore())
</script>

<template>
  <div class="filter-sort-section">
    <FilterCard />
    <SortCard />
  </div>
  <div class="card-section">
    <template v-if="generalNotes && generalNotes.length">
      <NoteCard v-for="note in generalNotes" :note="note" :key="note.id" />
    </template>
    <template v-else> <h1 class="mt-5">Ops... Nothing here</h1> </template>
  </div>
</template>
<style lang="scss" scoped></style>
