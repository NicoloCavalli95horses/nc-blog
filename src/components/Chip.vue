<template>
  <div class="chip">
    <h4>{{ text }}</h4>
  </div>
</template>

<script setup>
// ==========================
// Import
// ==========================
defineProps({
  text: String
});

</script>

<style lang="scss" scoped>
.chip {
  width: max-content;
  border-radius: var(--radius-l);
  border: 1px solid var(--font-light);
  padding: 0.5rem 0.8rem;
  margin: 0.4rem;
}
</style>
