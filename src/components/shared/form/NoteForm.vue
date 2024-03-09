<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { storeToRefs } from 'pinia'

import { v4 as uuidv4 } from 'uuid'

import { useNotesStore } from '@/stores/notes'

import { getDateNowTimestamp } from '@/helpers/date'

import { DEFAULT_CATEGORY } from '@/constants'

import AppSelect from '@/components/ui/AppSelect.vue'
import AppInput from '@/components/ui/AppInput.vue'
import AppTextArea from '@/components/ui/AppTextArea.vue'

const { data } = defineProps({
  data: {
    type: Object,
    default: () => ({
      title: '',
      body: '',
      category: ''
    })
  }
})

const emits = defineEmits(['submit'])

const { categories } = storeToRefs(useNotesStore())

const validRules = yup.string().required()

const { errors, defineField, handleSubmit, resetForm, meta } = useForm({
  validationSchema: yup.object({
    title: validRules,
    body: validRules,
    category: validRules
  }),
  initialValues: {
    title: data.title,
    body: data.body,
    category: data.category
  }
})

const [title, titleAttrs] = defineField('title')
const [body, bodyAttrs] = defineField('body')
const [category, categoryAttrs] = defineField('category')

const onSubmit = handleSubmit(() => {
  const matchedCategory = categories.value.find((categ) => category.value === categ.value)

  const data = {
    title: title.value,
    body: body.value,
    category: matchedCategory,
    createdDate: getDateNowTimestamp(),
    editDate: null,
    id: uuidv4()
  }

  emits('submit', data)

  resetForm()
})
</script>
<template>
  <h1><slot name="header"></slot></h1>
  <form class="form" @submit.prevent="onSubmit">
    <AppInput
      class="form__elements"
      v-model="title"
      :attr="titleAttrs"
      placeholder="Title"
      :error-msg="errors.title"
    />

    <AppTextArea
      v-model="body"
      :attr="bodyAttrs"
      class="form__elements"
      placeholder="Body"
      :error-msg="errors.body"
    />

    <AppSelect
      class="form__elements"
      custom-class="custom-select"
      v-model="category"
      :attr="categoryAttrs"
      :options="categories"
      :disabled-value="DEFAULT_CATEGORY"
      :error-msg="errors.category"
    />
    <button
      :disabled="!meta.valid"
      :class="{ 'disabled-btn': !meta.valid }"
      class="btn form__submit-btn"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<style lang="scss" scoped>
.disabled-btn {
  background-color: #f1f1f18e !important;
  color: black !important;
}
@mixin form-elements-margin {
  margin: 1.25rem 0 0.25rem 0;
}

:deep(.custom-select) {
  width: 100%;
}

.form {
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @include form-elements-margin;

  &__elements {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    max-width: remSize(600px);
    @include form-elements-margin;
  }
  &__submit-btn {
    min-width: remSize(120px);
    width: 15%;
    margin: 1rem 0;
    color: $primary;
  }
}

@include media-max(md) {
  .form {
    &__elements {
      width: 100%;
    }
  }
}
</style>
