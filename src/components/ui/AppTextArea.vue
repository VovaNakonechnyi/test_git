<script setup>
import AppError from '@/components/ui/AppError.vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 3
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  },
  errorMsg: {
    type: String,
    default: ''
  },
  attr: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <textarea
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :rows="rows"
      v-bind="attr"
      :class="customClass"
      :placeholder="placeholder"
    />
    <AppError v-if="errorMsg">
      {{ errorMsg }}
    </AppError>
  </div>
</template>

<style lang="scss" scoped></style>
