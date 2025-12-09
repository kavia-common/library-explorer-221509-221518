<template>
  <div>
    <AppHeader />
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Default layout wrapping all pages with the Ocean Professional header.
 */
</script>

<style scoped>
.content-wrapper {
  padding-top: 1rem;
}
</style>
