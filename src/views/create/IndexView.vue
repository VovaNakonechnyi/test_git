<script setup>
import { useRouter } from 'vue-router'

import { useNotesStore } from '@/stores/notes'

import { successMsg } from '@/helpers/notification'

import NoteForm from '@/components/shared/form/NoteForm.vue'

const router = useRouter()

const { setNote } = useNotesStore()

const onSubmit = (createdNote) => {
  setNote(createdNote)

  successMsg(createdNote.title, 'Note is created!')

  router.push('/')
}
</script>

<template>
  <div class="create-page">
    <NoteForm @submit="onSubmit">
      <template #header> Create a new note </template>
    </NoteForm>
  </div>
</template>

<style lang="scss" scoped></style>
