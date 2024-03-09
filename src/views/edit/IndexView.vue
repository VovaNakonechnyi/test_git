<script setup>
import { useRoute, useRouter } from 'vue-router'

import { useNotesStore } from '@/stores/notes'

import { successMsg } from '@/helpers/notification'
import { createDate } from '@/helpers/date'

import NoteForm from '@/components/shared/form/NoteForm.vue'

const route = useRoute()
const router = useRouter()

const { getNote } = useNotesStore()

const note = getNote(route.params.id)

const noteForForm = {
  title: note.title,
  body: note.body,
  category: note.category.value
}

const onSubmit = (currentNote) => {
  updateNote(currentNote)

  successMsg(currentNote.title, 'Note is updated')

  router.push('/')
}

const updateNote = (currentNote) => {
  note.title = currentNote.title
  note.body = currentNote.body
  note.category = currentNote.category
  note.editDate = createDate()
}
</script>

<template>
  <div class="create-page">
    <NoteForm :data="noteForForm" @submit="onSubmit">
      <template #header> Edit a note </template>
    </NoteForm>
  </div>
</template>

<style lang="scss" scoped></style>
