<script setup>
import AppError from '@/components/ui/AppError.vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  },
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: 'id'
  },
  value: {
    type: String,
    default: 'value'
  },
  title: {
    type: String,
    default: 'title'
  },
  customClass: {
    type: String,
    default: ''
  },
  disabledValue: {
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
  <div class="select-wrapper">
    <label v-if="label">{{ label }}</label>
    <select
      v-bind="attr"
      :class="customClass"
      :value="modelValue"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option[id]"
        :value="option[value]"
        :disabled="option.value === disabledValue"
      >
        {{ option[title] }}
      </option>
    </select>
    <AppError v-if="errorMsg">{{ errorMsg }}</AppError>
  </div>
</template>
<style lang="scss" scoped></style>
