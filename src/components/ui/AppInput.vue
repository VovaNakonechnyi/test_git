<script setup>
import AppError from '@/components/ui/AppError.vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
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
    <input
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :type="type"
      :placeholder="placeholder"
      v-bind="attr"
    />
    <AppError v-if="errorMsg">{{ errorMsg }}</AppError>
  </div>
</template>
<style lang="scss" scoped></style>
