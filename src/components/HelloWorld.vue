<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
    <h3>{{ subTitle }}</h3>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: remSize(-10px);
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@include media(lg) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
