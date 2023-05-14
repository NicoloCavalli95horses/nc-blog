<template>
  <div class="chip">
    <h5>{{ text }}</h5>
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
  padding: 0.8rem 1.2rem;
  margin: 1rem 0.4rem;
  background-color: var(--primary);
}
</style>
