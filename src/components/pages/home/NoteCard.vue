<script setup>
import { useRouter } from 'vue-router'

import { storeToRefs } from 'pinia'

import { useNotesStore } from '@/stores/notes'

import { formatDate } from '@/helpers/date'

import IconHeart from '@/components/pages/home/IconHeart.vue'

defineProps({
  note: {
    type: Object,
    default: () => ({})
  }
})

const router = useRouter()

const { notes: storeNotes } = storeToRefs(useNotesStore())

const handleNoteToFavourite = (note = {}) =>
  note.favourite ? (note.favourite = false) : (note.favourite = true)

const deleteNote = (id = '') =>
  (storeNotes.value = storeNotes.value.filter((note) => note.id !== id))
</script>
<template>
  <div class="card">
    <div class="card__main">
      <h1 class="card__title">{{ note.title }}</h1>
      <div class="card__subtitle">
        Category:
        <h3>
          {{ note.category.title }}
        </h3>
      </div>
      <div class="card__body">
        <p>{{ note.body }}</p>
      </div>
      <div class="card__date">
        <span> Created: {{ formatDate(note.createdDate) }}</span>
        <span> Edited: {{ note.editDate || '-' }} </span>
      </div>
    </div>
    <div class="card__footer">
      <div class="card__footer__favourite">
        <IconHeart
          :filled="note.favourite"
          @click="handleNoteToFavourite(note)"
          class="icon-heart"
        />
      </div>
      <div class="card__footer__btns">
        <button class="btn" @click="router.push({ name: 'edit', params: { id: note.id } })">
          Edit
        </button>
        <button class="btn" @click="deleteNote(note.id)">Delete</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
