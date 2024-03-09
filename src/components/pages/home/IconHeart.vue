<script setup>
import IconEmptyHeart from '@/components/icons/IconEmptyHeart.vue'
import IconFullHeart from '@/components/icons/IconFullHeart.vue'

defineProps({
  filled: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <IconEmptyHeart v-if="!filled" />
  <IconFullHeart v-else />
</template>
