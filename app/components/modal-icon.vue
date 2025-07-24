<script setup lang="ts">
  import Fa6SolidCloudBolt from './icons/fa6-solid--cloud-bolt.vue';

  // const props = defineProps({
  //   onClick: { type: () => void, required: true },
  // });
</script>

<!-- <script lang="ts">
  import Fa6SolidCloudBolt from '$lib/icons/fa6-solid--cloud-bolt.svelte';

  let { onClick }: { onClick: () => void } = $props();
</script> -->

<template>
  <div class="icon" style:--size="32px" style:--padding="10px" @click={onClick}>
    <Fa6SolidCloudBolt />
  </div>
</template>

<style>
  .icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: var(--size);
    height: var(--size);
    border: 1px solid #eee;
    :global(> svg) {
      width: calc(var(--size) - var(--padding));
      height: calc(var(--size) - var(--padding));
    }
  }
</style>
