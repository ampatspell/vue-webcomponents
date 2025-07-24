<script setup lang="ts">
  import { bridge } from './bridge';

  const { name } = defineProps({
    name: { type: String, required: true },
  });
</script>

<template>
  <div class="hello">
    {{name}} : {{bridge.name}}
  </div>
</template>
