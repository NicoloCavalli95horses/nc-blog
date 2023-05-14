<template>
  <div class="wrapper">
    <template v-if="!documents">
      <p>loading...</p>
    </template>

    <template v-else>
      <div class="post" v-for="doc in documents" :key="doc.id">
        <h2 class="title">{{ doc.title }}</h2>
        <p>{{ doc.body }}</p>
        <div class="tags">
          <template v-for="tag in doc.tags" :key="tag">
            <Chip :text="tag" />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
// ==========================
// Import
// ==========================
import getCollection from '../utils/getCollection';
import Chip from '../components/Chip.vue';

// ==========================
// Consts
// ==========================
const { documents } = getCollection({ collectionName: 'posts'});
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;

  .post {
    margin: 2rem 0;
    .title {
      text-transform: uppercase;
      margin: 0.5rem 0;
    }
    .tags {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
