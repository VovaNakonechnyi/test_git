<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue', 'click'])
</script>

<template>
  <div class="switch-wrapper">
    <label>
      {{ label }}
    </label>
    <label class="switch">
      <input
        :value="modelValue"
        @change="emit('update:modelValue', $event.target.checked)"
        :checked="checked || modelValue"
        :disabled="disabled"
        type="checkbox"
      />
      <span class="slider round" :class="{ disabled: disabled }"></span>
    </label>
  </div>
</template>
<style lang="scss" scoped>
.disabled {
  background-color: #808080 !important;
  &:before {
    background-color: $grey !important;
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: remSize(60px);
  height: remSize(34px);
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $grey;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: remSize(26px);
    width: remSize(26px);
    left: remSize(4px);
    bottom: remSize(4px);
    background-color: $white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  &.round {
    border-radius: remSize(34px);
    &:before {
      border-radius: 50%;
    }
  }
}
input {
  &:checked {
    & + .slider {
      background-color: $primary;
      &:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    }
  }
}
</style>
