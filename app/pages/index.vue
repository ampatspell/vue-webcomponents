<script setup lang="ts">
  import NextHello from '~/published/next-hello.vue';

  const name = ref('component');
</script>

<template>
  <NextHello :name="name" />
</template>
